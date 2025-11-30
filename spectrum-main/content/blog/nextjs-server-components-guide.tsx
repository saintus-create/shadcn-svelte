import CodeBlock from '@/components/blog-code';

const blogPost = {
  title: "Next.js Server Components: The Game-Changer You Need to Know About",
  excerpt:
    "Server Components are changing everything about how we build React apps. Here's how to use them properly and why they're so much better than the old way.",
  author: {
    name: "Arihant Jain",
    role: "Engineering",
    avatar: "/arihant.jpeg",
  },
  date: "Oct 23, 2025",
  readTime: "8 min read",
  icon: "🚀",
  category: "Engineering",
  content: (
    <div className="space-y-6">
      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">What&apos;s the Big Deal About Server Components?</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Next.js App Router made Server Components the default, and it&apos;s a game-changer. Instead of sending everything to the browser, 
        we can now render components on the server. This means smaller JavaScript bundles and faster apps.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">The New Way of Thinking</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Here&apos;s the key: <strong>everything is a Server Component by default</strong>. You only add client-side rendering 
        when you need interactivity. This is completely different from the old React way where everything was client-side.
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-3">When to Use Server vs Client Components</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-semibold mb-2">Server Components (Default)</h4>
            <ul className="space-y-1 list-disc list-inside text-sm">
              <li>Getting data from databases</li>
              <li>Accessing backend stuff</li>
              <li>Keeping secrets safe</li>
              <li>Big libraries</li>
              <li>Static content</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Client Components (Add &quot;use client&quot;)</h4>
            <ul className="space-y-1 list-disc list-inside text-sm">
              <li>Clicking, typing, interactions</li>
              <li>Using React hooks (useState, useEffect)</li>
              <li>Browser-only features</li>
              <li>Custom hooks</li>
              <li>Real-time updates</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Pattern 1: Getting Data the Easy Way</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Server Components can fetch data directly without any loading states. This is perfect for when the page first loads:
      </p>

      <CodeBlock
        filename="dashboard-page.tsx"
        language="tsx"
        code={`// app/dashboard/page.tsx (Server Component by default)
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

async function getAnalytics() {
  // Direct database query - no API route needed
  const data = await db.analytics.findMany()
  return data
}

export default async function DashboardPage() {
  const analytics = await getAnalytics()
  
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {analytics.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// No loading spinners, no useEffect, no useState!`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Pattern 2: Adding Interactivity</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Want users to be able to click things? Add Client Components inside your Server Components. 
        The &quot;use client&quot; directive tells Next.js where the boundary is:
      </p>

      <CodeBlock
        filename="interactive-chart.tsx"
        language="tsx"
        code={`// components/interactive-chart.tsx
"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function InteractiveChart({ data }: { data: AnalyticsData[] }) {
  const [view, setView] = useState<"daily" | "weekly">("daily")
  
  return (
    <Card>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Button 
            variant={view === "daily" ? "default" : "outline"}
            onClick={() => setView("daily")}
          >
            Daily
          </Button>
          <Button 
            variant={view === "weekly" ? "default" : "outline"}
            onClick={() => setView("weekly")}
          >
            Weekly
          </Button>
        </div>
        <Chart data={data} view={view} />
      </CardContent>
    </Card>
  )
}

// app/dashboard/page.tsx (Server Component)
export default async function DashboardPage() {
  const data = await getAnalytics() // Server-side data fetch
  
  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <InteractiveChart data={data} /> {/* Client component */}
    </div>
  )
}`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Pattern 3: Loading Things as They&apos;re Ready</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        This is one of the coolest features—stream content as it becomes available. Show the fast stuff immediately 
        while the slow stuff loads in the background:
      </p>

      <CodeBlock
        filename="streaming-page.tsx"
        language="tsx"
        code={`import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

async function SlowComponent() {
  const data = await slowDatabaseQuery() // Takes 2 seconds
  return <div>Slow data: {data}</div>
}

async function FastComponent() {
  const data = await fastDatabaseQuery() // Takes 0.1 seconds
  return <div>Fast data: {data}</div>
}

export default function Page() {
  return (
    <div className="space-y-4">
      {/* Shows immediately */}
      <Suspense fallback={<Skeleton className="h-20 w-full" />}>
        <FastComponent />
      </Suspense>
      
      {/* Streams in when ready */}
      <Suspense fallback={<Skeleton className="h-40 w-full" />}>
        <SlowComponent />
      </Suspense>
    </div>
  )
}

// The page shell loads immediately, components stream in progressively`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Pattern 4: Forms That Just Work</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Server Actions let you handle form submissions without building API routes or writing client-side JavaScript:
      </p>

      <CodeBlock
        filename="server-actions.tsx"
        language="tsx"
        code={`// app/actions.ts
"use server"

export async function createPost(formData: FormData) {
  const title = formData.get("title")
  const content = formData.get("content")
  
  await db.post.create({
    data: { title, content }
  })
  
  revalidatePath("/posts")
  redirect("/posts")
}

// app/new-post/page.tsx
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createPost } from "../actions"

export default function NewPostPage() {
  return (
    <form action={createPost} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" required />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea id="content" name="content" required />
      </div>
      <Button type="submit">Create Post</Button>
    </form>
  )
}

// Works without JavaScript! Progressive enhancement built-in`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Pattern 5: Making Things Feel Instant</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        For the best user experience, combine Server Actions with optimistic updates (show changes immediately):
      </p>

      <CodeBlock
        filename="like-button.tsx"
        language="tsx"
        code={`"use client"

import { useOptimistic } from "react"
import { Button } from "@/components/ui/button"
import { likePost } from "../actions"

export function LikeButton({ postId, initialLikes }: Props) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (state) => state + 1
  )
  
  return (
    <form action={async () => {
      addOptimisticLike(null) // Update UI immediately
      await likePost(postId) // Update server in background
    }}>
      <Button type="submit">
        ❤️ {optimisticLikes}
      </Button>
    </form>
  )
}

// Instant feedback, eventual consistency`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistakes That Will Break Your App</h2>
      <div className="bg-muted p-6 rounded-lg my-6">
        <ul className="space-y-3">
          <li>
            <strong>❌ Adding &quot;use client&quot; everywhere:</strong> Start with Server Components, only add &quot;use client&quot; when you need interactivity
          </li>
          <li>
            <strong>❌ Fetching data in Client Components:</strong> Let Server Components handle the initial data fetching
          </li>
          <li>
            <strong>❌ Passing functions as props:</strong> Functions can&apos;t be sent to the server. Use Server Actions instead
          </li>
          <li>
            <strong>❌ Importing Server Components in Client Components:</strong> This breaks the rules
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Why This Actually Makes Things Faster</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        This new approach gives you real performance benefits:
      </p>
      <ul className="space-y-2 list-disc list-inside ml-4">
        <li><strong>Smaller JavaScript bundles:</strong> Server Components don&apos;t send JS to the browser</li>
        <li><strong>Faster page loads:</strong> No waiting for multiple API calls</li>
        <li><strong>Better SEO:</strong> Content is rendered on the server by default</li>
        <li><strong>Better caching:</strong> Server Components can be cached at the edge</li>
        <li><strong>Direct database access:</strong> No need for API routes</li>
      </ul>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Bottom Line</h2>
      <div className="bg-muted p-6 rounded-lg my-6">
        <ul className="space-y-2 list-disc list-inside">
          <li>Start with Server Components; only add client components when you need interactivity</li>
          <li>Server Components can directly access your database and backend</li>
          <li>Use Suspense for progressive loading</li>
          <li>Server Actions replace most API routes</li>
          <li>Combine optimistic updates with Server Actions for the best UX</li>
          <li>This approach gives you better developer experience AND user experience</li>
        </ul>
      </div>

<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Server Components are a complete game-changer for React development. Use these patterns and you&apos;ll build 
        faster, more maintainable apps with less code. Spectrum UI components work great with both Server and Client 
        Components, so you can use the right tool for each job.
      </p>
    </div>
  ),
}

export default blogPost

