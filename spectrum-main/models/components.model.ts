import { Schema, Document, model, models } from "mongoose";

// Define TypeScript Interface for the Component
export interface IComponent extends Document {
  code: string;
  title: string;
  tags: string[];
  description: string;
  previewUrl: string;
  author: string;
  status: "pending" | "approved" | "rejected"; // Enum for valid statuses
  installationGuide?: string | null;
  usageGuide?: string | null;
  props?: string | null;
}

// Define Mongoose Schema
const componentSchema = new Schema<IComponent>({
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 300,
  },
  author: {
    type: String,
    required: true,
  },
  previewUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"], // Restrict to valid values
    default: "pending",
  },
  installationGuide: {
    type: String,
    default: null,
  },
  usageGuide: {
    type: String,
    default: null,
  },
  props: {
    type: String,
    default: null,
  },
});

// Export the Mongoose model (with type safety)
export default models.Component ||
  model<IComponent>("Component", componentSchema);
