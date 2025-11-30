import type React from "react"
import spectrumUiDevelopmentSpeed from "@/content/blog/spectrum-ui-development-speed"
import shadcnCustomizationGuide from "@/content/blog/shadcn-customization-guide"
import nextjsServerComponentsGuide from "@/content/blog/nextjs-server-components-guide"
import commonUiUxMistakes from "@/content/blog/common-ui-ux-mistakes"
import scalableDesignSystem from "@/content/blog/scalable-design-system"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: {
    name: string
    role?: string
    avatar?: string
  }
  date: string
  readTime: string
  icon: string
  category?: string
  content: React.ReactNode
}

const blogPosts: Record<string, BlogPost> = {
  "spectrum-ui-development-speed": {
    slug: "spectrum-ui-development-speed",
    ...spectrumUiDevelopmentSpeed,
  },
  "shadcn-customization-guide": {
    slug: "shadcn-customization-guide",
    ...shadcnCustomizationGuide,
  },
  "nextjs-server-components-guide": {
    slug: "nextjs-server-components-guide",
    ...nextjsServerComponentsGuide,
  },
  "common-ui-ux-mistakes": {
    slug: "common-ui-ux-mistakes",
    ...commonUiUxMistakes,
  },
  "scalable-design-system": {
    slug: "scalable-design-system",
    ...scalableDesignSystem,
  },
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = Object.values(blogPosts)
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return blogPosts[slug] || null
}
