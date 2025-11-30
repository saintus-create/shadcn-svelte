import { NextRequest, NextResponse } from "next/server";
import Component from "@/models/components.model";
import { connectDb } from "@/config/dbConfig/dbConfig";
import rateLimit from "@/config/ratelimit/ratelimit";
import { v2 as cloudinary } from "cloudinary";
import { uploadImage } from "@/config/uploadImage/upload";

type Component = {
  code: string;
  title: string;
  tags: string[];
  description: string;
  author: string;
  previewUrl: string;
  status: string;
  installationGuide: string | null;
  usageGuide: string | null;
  props: string | null;
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req: NextRequest) {
  try {
    if (rateLimit(req) === false) {
      return NextResponse.json(
        { message: "Too many requests, try after some time" },
        { status: 429 },
      );
    }

    // Parse FormData instead of JSON
    const formData = await req.formData();

    // Extract fields from FormData
    const code = formData.get("code") as string;
    const title = formData.get("title") as string;
    const tags = formData.get("tags") as string;
    const description = formData.get("description") as string;
    const author = formData.get("author") as string;
    const installationGuide = formData.get("installationGuide") as string;
    const usageGuide = formData.get("usageGuide") as string;
    const props = formData.get("props") as string;
    const previewImage = formData.get("previewImage") as File | null;

    // Validation
    if (!code || !title || !tags || !description || !author) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    // Check if code is not malicious
    if (code.length > 60 && (!installationGuide || !usageGuide)) {
      return NextResponse.json(
        {
          message:
            "Code is long so installation guide and usage guide are required",
        },
        { status: 400 },
      );
    }

    let avatarUrl = "";

    // Handle image upload if present
    if (previewImage) {
      // Validate file type
      if (!previewImage.type.startsWith("image/")) {
        return NextResponse.json(
          {
            message: "Invalid file type. Only images are allowed",
          },
          { status: 400 },
        );
      }

      // Convert File to Buffer
      const bytes = await previewImage.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Upload to Cloudinary
      try {
        avatarUrl = (await uploadImage(buffer)) as string;
      } catch (error) {
        return NextResponse.json(
          {
            message: "Failed to upload image",
          },
          { status: 500 },
        );
      }
    }

    const newComponent: Component = {
      code,
      title,
      tags: tags.split(",").map((tag) => tag.trim()), // Convert comma-separated string to array
      description,
      author,
      previewUrl: avatarUrl,
      status: "pending",
      installationGuide: installationGuide || null,
      usageGuide: usageGuide || null,
      props: props || null,
    };

    await connectDb();
    const savedComponent = await Component.create(newComponent);

    return NextResponse.json(
      {
        message: "Code is under review. It will take less than 24hr to review",
        savedComponent,
      },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}
