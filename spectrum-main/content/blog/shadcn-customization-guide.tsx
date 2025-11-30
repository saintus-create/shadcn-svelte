import CodeBlock from '@/components/blog-code';

const blogPost = {
  title: "How to Make Shadcn UI Components Actually Yours",
  excerpt:
    "Shadcn UI gives you great components out of the box, but the magic happens when you customize them. Here's how to make them fit your design without breaking everything.",
  author: {
    name: "Arihant Jain",
    role: "Engineering",
    avatar: "/arihant.jpeg",
  },
  date: "Oct 24, 2025",
  readTime: "7 min read",
  icon: "🎨",
  category: "Engineering",
  content: (
    <div className="space-y-6">
      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">What Makes Shadcn Different</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Shadcn UI isn&apos;t like other component libraries. Instead of installing packages, you copy and paste code into your project. 
        This means you own everything and can change whatever you want. But you need to know how to customize without messing things up.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">How Shadcn Components Work</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        All shadcn components follow the same pattern. They use Radix UI for the functionality (like keyboard navigation) and 
        Tailwind CSS for styling. Once you understand this, customizing becomes much easier:
      </p>

      <CodeBlock
        filename="Component.tsx"
        language="tsx"
        code={`// Typical shadcn component structure
import * as React from "react"
import * as RadixPrimitive from "@radix-ui/react-primitive"
import { cn } from "@/lib/utils"

const Component = React.forwardRef<
  React.ElementRef<typeof RadixPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadixPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadixPrimitive.Root
    ref={ref}
    className={cn("default-styles", className)}
    {...props}
  />
))
Component.displayName = "Component"

export { Component }`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Method 1: Change Colors with CSS Variables</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        The easiest way to customize shadcn is through CSS variables. All the colors are defined as variables, 
        so you can change your entire theme by updating a few values:
      </p>

      <CodeBlock
        filename="globals.css"
        language="css"
        code={`/* In your globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    /* ... more variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark mode variants */
  }
}`}
      />

<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Change these variables and your entire app gets a new look. No need to hunt down every component.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Method 2: Create Different Button Styles</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Want different button styles? Use <code>class-variance-authority</code> (CVA). This is how shadcn 
        creates variants like &quot;default&quot;, &quot;destructive&quot;, and &quot;outline&quot; buttons:
      </p>

      <CodeBlock
        filename="button-variants.tsx"
        language="tsx"
        code={`import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Now you can use variants easily
<Button variant="destructive" size="lg">Delete</Button>`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Method 3: Add Features Without Breaking Things</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Don&apos;t mess with the original components. Instead, create new components that use the originals and add your own features:
      </p>

      <CodeBlock
        filename="custom-button.tsx"
        language="tsx"
        code={`// components/custom-button.tsx
import { Button, ButtonProps } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean
  loadingText?: string
}

export function LoadingButton({ 
  isLoading, 
  loadingText, 
  children, 
  ...props 
}: LoadingButtonProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  )
}

// Usage
<LoadingButton isLoading={submitting} loadingText="Saving...">
  Save Changes
</LoadingButton>`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Method 4: Combine Components to Build Bigger Things</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Sometimes you need something more complex than a single component. Combine multiple shadcn components to build forms, cards, and other complex UI:
      </p>

      <CodeBlock
        filename="settings-card.tsx"
        language="tsx"
        code={`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SettingsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" />
        </div>
        <Button className="w-full">Save Changes</Button>
      </CardContent>
    </Card>
  )
}`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Pro Tips That Actually Help</h2>
      <div className="bg-muted p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-3">Things That Will Save You Time</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Use cn() for merging classes:</strong> Don&apos;t manually combine Tailwind classes</li>
          <li><strong>Don&apos;t break accessibility:</strong> Keep ARIA attributes and keyboard navigation</li>
          <li><strong>Test both themes:</strong> Make sure your changes work in light AND dark mode</li>
          <li><strong>Keep track of your changes:</strong> Document what you&apos;ve customized</li>
          <li><strong>Don&apos;t repeat yourself:</strong> Create shared utilities for common customizations</li>
        </ul>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistakes That Will Bite You Later</h2>
<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        <strong>1. Don&apos;t hardcode colors:</strong> Use CSS variables so you can change themes easily
      </p>
      <CodeBlock
        filename="color-usage.tsx"
        language="tsx"
        code={`// ❌ Bad
<Button className="bg-blue-500">Click me</Button>

// ✅ Good
<Button className="bg-primary">Click me</Button>`}
      />

<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        <strong>2. Test on mobile:</strong> Your customizations need to work on phones too
      </p>

<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        <strong>3. Don&apos;t fight the defaults:</strong> If you&apos;re overriding everything, maybe you need a different component
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Bottom Line</h2>
      <div className="bg-muted p-6 rounded-lg my-6">
        <ul className="space-y-2 list-disc list-inside">
          <li>Change colors with CSS variables</li>
          <li>Create button variants with CVA</li>
          <li>Build new components instead of changing originals</li>
          <li>Combine components to make complex UI</li>
          <li>Keep accessibility and mobile in mind</li>
          <li>Write down what you&apos;ve changed</li>
        </ul>
      </div>

<p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        The best part about shadcn UI is you&apos;re not stuck with their design choices. 
        Use these techniques to make components that match your brand while keeping all the good stuff shadcn gives you.
      </p>
    </div>
  ),
}

export default blogPost

