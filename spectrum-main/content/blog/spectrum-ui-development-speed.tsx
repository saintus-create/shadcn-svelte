import CodeBlock from '@/components/blog-code';

const blogPost = {
  title: 'How Spectrum UI Accelerates Development Speed and Design Consistency',
  excerpt:
    'Ever feel like you spend too much time building the same buttons and forms over and over? Spectrum UI helps you build faster without sacrificing quality. Here\'s how it works.',
  author: {
    name: 'Arihant Jain',
    role: 'Engineering',
    avatar: '/arihant.jpeg',
  },
  date: 'Oct 25, 2025',
  readTime: '6 min read',
  icon: '⚡',
  category: 'Engineering',
  content: (
    <div className="space-y-6">
      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">
        Why Speed Actually Matters
      </h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Let&apos;s be honest - nobody wants to spend hours building a button that looks exactly like the one they built last week. 
        But here&apos;s the thing: you need to ship fast AND keep everything looking consistent. 
        Most teams end up choosing one or the other. Spectrum UI lets you have both.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">
        Why Component Libraries Are Game-Changers
      </h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Think about it - how many times have you built a button? Or a form? Or a modal? 
        Spectrum UI gives you all these components ready to go. No more starting from scratch every time. 
        Plus, everything looks consistent across your whole app because you&apos;re using the same building blocks.
      </p>

      <div className="border border-dashed border-neutral-200 dark:border-neutral-800 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-3">What This Actually Means</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">
            Build components 70% faster (seriously, it&apos;s that much)
          </li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">
            No more &quot;why does this button look different?&quot; conversations
          </li>
          <li>Ship features 3x faster because you&apos;re not rebuilding everything</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">
            Accessibility just works (no more forgetting about screen readers)
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">
        Built on Solid Foundations
      </h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Spectrum UI uses shadcn/ui and Radix UI under the hood. This means you get all the good stuff:
      </p>
      <ul className="space-y-2 list-disc list-inside ml-4">
        <li>
          <strong>You own the code:</strong> Copy, paste, and change whatever you want
        </li>
        <li>
          <strong>Accessibility built-in:</strong> Works with screen readers from day one
        </li>
        <li>
          <strong>TypeScript ready:</strong> Catch bugs before they happen
        </li>
        <li>
          <strong>Tailwind CSS:</strong> Style things the easy way
        </li>
      </ul>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">
        Copy, Paste, Make It Yours
      </h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        No more dealing with npm installs and version conflicts. Just copy the code you need and paste it into your project. 
        You own it completely, so you can change whatever you want:
      </p>

      <CodeBlock
        filename="CustomButton.tsx"
        language="tsx"
        code={`// Instead of this:
import { Button } from 'some-library'

// You get full control:
import { Button } from '@/components/ui/button'

// And you can customize without limitations
export function CustomButton() {
  return (
    <Button 
      className="custom-gradient hover:scale-105" 
      onClick={handleClick}
    >
      Your Custom Button
    </Button>
  )
}`}
      />

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">
        Keeping Things Consistent (Even With a Big Team)
      </h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Ever worked on a team where every developer builds buttons differently? It&apos;s a nightmare. 
        Spectrum UI fixes this by giving everyone the same components to work with. 
        Same buttons, same spacing, same colors - everywhere.
      </p>

      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        This isn&apos;t just about looking pretty. When your app feels consistent, users know what to expect. 
        They don&apos;t have to relearn how to use your interface on every page.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">
        Real Example: Building a Dashboard
      </h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Say you need to build a dashboard with cards, tables, and forms. Without components, this takes forever. 
        With Spectrum UI, you&apos;re done in minutes:
      </p>

      <CodeBlock
        filename="Dashboard.tsx"
        language={'tsx'}
        code={`import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'
import { Form } from '@/components/ui/form'

export function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$45,231.89</p>
        </CardContent>
      </Card>
      {/* More cards... */}
    </div>
  )
}`}
      />

      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        That&apos;s it. You just built a dashboard that looks professional and works on mobile. 
        No hours of CSS fighting or component building from scratch.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] ">Bottom Line</h2>
      <div className="border border-dashed border-neutral-200 dark:border-neutral-800 p-6 rounded-lg my-6">
        <ul className="space-y-2 list-disc list-inside">
          <li>Build faster without cutting corners</li>
          <li>Uses solid tech (Radix UI + Tailwind CSS)</li>
          <li>You own the code - no vendor lock-in</li>
          <li>Everything looks consistent, users are happy</li>
          <li>Works for solo developers and big teams</li>
        </ul>
      </div>

      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        The best code is the code you don&apos;t have to write. Spectrum UI handles the boring stuff 
        so you can focus on what makes your app special.
      </p>
    </div>
  ),
};

export default blogPost;
