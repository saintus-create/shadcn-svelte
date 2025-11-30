import CodeBlock from '@/components/blog-code';

const blogPost = {
  title: "How to Build a Design System That Actually Scales",
  excerpt:
    "Design systems aren't just for big companies. Here's how to build one that grows with your team, from startup to enterprise, without overthinking it.",
  author: {
    name: "Arihant Jain",
    role: "Engineering",
    avatar: "/arihant.jpeg",
  },
  date: "Oct 21, 2025",
  readTime: "9 min read",
  icon: "📐",
  category: "Engineering",
  content: (
    <div className="space-y-6">
      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">What's a Design System Anyway?</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        A design system is basically your team&apos;s rulebook for building UI. It&apos;s not just components—it&apos;s colors, spacing, 
        typography, and patterns that everyone follows. Think of it as the &quot;single source of truth&quot; for how your app should look and feel.
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-3">What You Actually Need:</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Design tokens:</strong> Your colors, spacing, fonts, shadows</li>
          <li><strong>Components:</strong> Buttons, forms, cards that everyone uses</li>
          <li><strong>Patterns:</strong> Common UI solutions your team keeps using</li>
          <li><strong>Documentation:</strong> How to use each component (seriously, write this down)</li>
          <li><strong>Rules:</strong> Accessibility, mobile, and other stuff that matters</li>
        </ul>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Start with the Basics: Design Tokens</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Design tokens are your foundation. They&apos;re just the basic values—colors, spacing, fonts, shadows. 
        Put these in one place and you can change your entire app&apos;s look by updating a few variables.
      </p>

      <CodeBlock
        filename="globals.css"
        language="css"
        code={`// Design tokens as CSS variables (globals.css)
@layer base {
  :root {
    /* Colors */
    --primary: 221.2 83.2% 53.3%;
    --secondary: 210 40% 96.1%;
    --destructive: 0 84.2% 60.2%;
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    /* Spacing scale */
    --spacing-xs: 0.25rem;   /* 4px */
    --spacing-sm: 0.5rem;    /* 8px */
    --spacing-md: 1rem;      /* 16px */
    --spacing-lg: 1.5rem;    /* 24px */
    --spacing-xl: 2rem;      /* 32px */
    
    /* Typography */
    --font-sans: 'Inter', sans-serif;
    --font-mono: 'Fira Code', monospace;
    
    /* Border radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }
}

// Now your entire app uses these tokens
// Changing --primary updates your whole theme instantly`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">How to Organize Your Components</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        You need a clear folder structure that makes sense. Here&apos;s one that works whether you&apos;re a solo developer or a big team:
      </p>

      <CodeBlock
        filename="project-structure"
        language="bash"
        code={`components/
├── ui/                    # Base components
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   └── ...
├── patterns/              # Composed components
│   ├── forms/
│   │   ├── login-form.tsx
│   │   └── signup-form.tsx
│   ├── navigation/
│   │   ├── navbar.tsx
│   │   └── sidebar.tsx
│   └── data-display/
│       ├── data-table.tsx
│       └── stats-card.tsx
└── layouts/               # Page layouts
    ├── dashboard-layout.tsx
    ├── auth-layout.tsx
    └── marketing-layout.tsx

lib/
├── utils.ts               # Utility functions (cn, etc.)
├── design-tokens.ts       # Token values for JS usage
└── constants.ts           # Shared constants

hooks/
├── use-media-query.ts     # Responsive hooks
├── use-toast.ts           # Feedback hooks
└── ...

styles/
└── globals.css            # Design tokens & base styles`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Three Types of Components You Need</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Type 1: Basic Building Blocks</h3>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        These are your simplest components—buttons, inputs, cards. They do one thing well and can be combined 
        to make bigger things. Keep them flexible but focused.
      </p>

      <CodeBlock
        filename="button.tsx"
        language="tsx"
        code={`// components/ui/button.tsx
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}`}
      />

      <h3 className="text-xl font-semibold mt-6 mb-3">Type 2: Common Patterns</h3>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        These combine multiple basic components to solve common problems. Like a contact form or a user card. 
        They&apos;re more specific but still reusable across your app.
      </p>

      <CodeBlock
        filename="contact-form.tsx"
        language="tsx"
        code={`// components/patterns/forms/contact-form.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// Combines primitives into a ready-to-use pattern`}
      />

      <h3 className="text-xl font-semibold mt-6 mb-3">Type 3: Page Layouts</h3>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        These define how entire pages look—like a dashboard layout or a blog post layout. 
        They&apos;re the most specific but make building new pages super fast.
      </p>

      <CodeBlock
        filename="dashboard-layout.tsx"
        language="tsx"
        code={`// components/layouts/dashboard-layout.tsx
import { Navbar } from "@/components/patterns/navigation/navbar"
import { Sidebar } from "@/components/patterns/navigation/sidebar"

export function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

// Now creating new dashboard pages is trivial
export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <h1>Analytics</h1>
      {/* page content */}
    </DashboardLayout>
  )
}`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Write It Down (Seriously)</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        A design system without documentation is just a bunch of components nobody knows how to use. 
        Good documentation answers these questions:
      </p>

      <ul className="space-y-2 list-disc list-inside ml-4 my-4">
        <li><strong>What is it?</strong> What does this component actually do?</li>
        <li><strong>When do I use it?</strong> What problem does it solve?</li>
        <li><strong>How do I use it?</strong> Show me the code</li>
        <li><strong>When should I NOT use it?</strong> What are the common mistakes?</li>
        <li><strong>Accessibility stuff:</strong> Any gotchas I should know about?</li>
      </ul>

      <p className="mt-4">
        Spectrum UI comes with examples and docs for each component. You can also use tools like Storybook 
        or build your own docs site.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">When You Need to Change Things</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Your design system will evolve. Sometimes you&apos;ll need to break things. Here&apos;s how to do it without making everyone hate you:
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <ol className="space-y-3 list-decimal list-inside">
          <li><strong>Use version numbers:</strong> 1.0.0, 1.1.0, 2.0.0 (major.minor.patch)</li>
          <li><strong>Warn people first:</strong> Tell them what&apos;s changing before you break it</li>
          <li><strong>Write migration guides:</strong> Show them exactly how to fix their code</li>
          <li><strong>Keep a changelog:</strong> Write down everything you changed</li>
          <li><strong>Let teams choose when to upgrade:</strong> Don&apos;t force it on them</li>
        </ol>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Who Gets to Add Stuff?</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        You need rules about who can add components and how they get approved. Otherwise your design system 
        becomes a mess of random components.
      </p>

      <div className="bg-muted p-6 rounded-lg my-4">
        <h3 className="text-lg font-semibold mb-3">How to Add New Components</h3>
        <ol className="space-y-2 list-decimal list-inside">
          <li>Developer says &quot;we need this component&quot; and explains why</li>
          <li>Designer checks if it fits with everything else</li>
          <li>Code it following your team&apos;s standards</li>
          <li>Make sure it works with screen readers</li>
          <li>Write docs and examples</li>
          <li>Design system team reviews it</li>
          <li>Merge it and tell everyone about it</li>
        </ol>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">How Do You Know It&apos;s Working?</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        You need to measure if your design system is actually helping. Track these things:
      </p>

      <ul className="space-y-2 list-disc list-inside ml-4 my-4">
        <li><strong>Are people using it?</strong> What % of your code uses design system components?</li>
        <li><strong>Are teams faster?</strong> Are they shipping features quicker?</li>
        <li><strong>Does everything look consistent?</strong> Check if your UI looks the same across pages</li>
        <li><strong>Is it accessible?</strong> Test with screen readers and keyboard navigation</li>
        <li><strong>Do developers like it?</strong> Ask them if they enjoy using it</li>
        <li><strong>Are people contributing?</strong> Are teams adding components back to the system?</li>
      </ul>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistakes That Will Kill Your Design System</h2>
      <div className="bg-muted p-6 rounded-lg my-6">
        <ul className="space-y-3">
          <li>
            <strong>❌ Building everything at once:</strong> Start small, add what you actually need
          </li>
          <li>
            <strong>❌ Not asking developers:</strong> They&apos;re the ones using it—get their feedback
          </li>
          <li>
            <strong>❌ Making it too strict:</strong> Let people customize when they need to
          </li>
          <li>
            <strong>❌ No docs:</strong> Nobody will use components they don&apos;t understand
          </li>
          <li>
            <strong>❌ Forgetting accessibility:</strong> Build it in from the start
          </li>
          <li>
            <strong>❌ Not maintaining it:</strong> Design systems need constant care
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Start Small: What You Actually Need</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Don&apos;t try to build everything at once. Start with the basics and add more as you need it:
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-3">Week 1: Just the Basics</h3>
        <ul className="space-y-1 list-disc list-inside">
          <li>Colors, spacing, fonts (design tokens)</li>
          <li>Button with different styles</li>
          <li>Input, textarea, label components</li>
          <li>Write down how to use everything</li>
        </ul>

        <h3 className="text-lg font-semibold mb-3 mt-4">Month 1: Add More Stuff</h3>
        <ul className="space-y-1 list-disc list-inside">
          <li>Cards, modals, dropdowns</li>
          <li>Common forms (login, signup)</li>
          <li>Mobile-friendly utilities</li>
          <li>Test with screen readers</li>
        </ul>

        <h3 className="text-lg font-semibold mb-3 mt-4">Month 3: Get Fancy</h3>
        <ul className="space-y-1 list-disc list-inside">
          <li>Data tables, charts, complex stuff</li>
          <li>Page layouts</li>
          <li>Rules for adding new components</li>
          <li>Automated tests</li>
        </ul>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Bottom Line</h2>
      <div className="bg-muted p-6 rounded-lg my-6">
        <ul className="space-y-2 list-disc list-inside">
          <li>Start with colors and spacing—everything else builds on this</li>
          <li>Organize components in three types: basic, patterns, layouts</li>
          <li>Write docs—nobody will use components they don&apos;t understand</li>
          <li>Let people contribute but keep quality high</li>
          <li>Measure what matters and fix what&apos;s broken</li>
          <li>Start small, add what you actually need</li>
          <li>Accessibility and mobile are must-haves, not nice-to-haves</li>
        </ul>
      </div>

<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        A good design system is one of the best things you can do for your frontend. It makes everything faster, 
        more consistent, and easier to maintain. Spectrum UI gives you a solid starting point—use it as your foundation 
        and customize it to fit your brand.
      </p>
    </div>
  ),
}

export default blogPost

