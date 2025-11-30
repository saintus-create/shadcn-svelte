import CodeBlock from "@/components/blog-code"

const blogPost = {
  title: "UI Mistakes That Drive Users Away (And How to Fix Them)",
  excerpt:
    "These common UI mistakes are everywhere, and they're killing your user experience. Here's how to spot them and fix them before your users bounce.",
  author: {
    name: "Arihant Jain",
    role: "Engineering",
    avatar: "/arihant.jpeg",
  },
  date: "Oct 22, 2025",
  readTime: "7 min read",
  icon: "🎯",
  category: "Engineering",
  content: (
    <div className="space-y-6">
      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Why These Mistakes Actually Matter</h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        A pretty interface is useless if users can&apos;t figure out how to use it. These small mistakes add up to big problems—frustrated users, 
        abandoned shopping carts, and people choosing your competitors instead. The good news? Most of these are easy to fix once you know what to look for.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistake #1: Terrible Loading Screens</h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        <strong>What&apos;s wrong:</strong> Users see a blank screen or spinning wheel with no idea what&apos;s happening. 
        Is the app broken? Is it loading? How long do they wait?
      </p>

      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg my-4 border border-red-200 dark:border-red-800">
        <p className="font-semibold mb-2">❌ Bad Example:</p>
        <CodeBlock
          filename="UserList.tsx"
          language="tsx"
          code={`function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  if (loading) return <div>Loading...</div>
  
  return <div>{/* render users */}</div>
}`}
        />
      </div>

      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg my-4 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">✅ Better Approach:</p>
        <CodeBlock
          filename="UserList-fixed.tsx"
          language="tsx"
          code={`function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>
    )
  }
  
  return <div>{/* render users */}</div>
}

// Shows content structure while loading - users understand what's happening`}
        />
      </div>

      <p className="text-base font-normal text-[#ededed] mt-4">
        <strong>How to fix it:</strong> Use skeleton screens that show the shape of what&apos;s coming. 
        This keeps users engaged and sets expectations. Spectrum UI has skeleton components ready to go.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistake #2: Buttons That Don&apos;t Talk Back</h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        <strong>What&apos;s wrong:</strong> Users click a button and... nothing. Did it work? Should they click again? 
        This confusion leads to people clicking multiple times and getting frustrated.
      </p>

      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg my-4 border border-red-200 dark:border-red-800">
        <p className="font-semibold mb-2">❌ Bad Example:</p>
        <CodeBlock
          filename="SubmitButton.tsx"
          language="tsx"
          code={`<Button onClick={handleSubmit}>
  Submit Form
</Button>

// No indication the action is processing`}
        />
      </div>

      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg my-4 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">✅ Better Approach:</p>
        <CodeBlock
          filename="SubmitButton-fixed.tsx"
          language="tsx"
          code={`const [isSubmitting, setIsSubmitting] = useState(false)

<Button onClick={handleSubmit} disabled={isSubmitting}>
  {isSubmitting ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Submitting...
    </>
  ) : (
    "Submit Form"
  )}
</Button>

// Clear visual feedback during the action`}
        />
      </div>

      <p className="text-base font-normal text-[#ededed] mt-4">
        <strong>How to fix it:</strong> Always show users what&apos;s happening. Use loading spinners, disable buttons while processing, 
        and show success or error messages. Every click should have a visible response.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistake #3: Useless Error Messages</h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        <strong>What&apos;s wrong:</strong> Error messages like &quot;Something went wrong&quot; are useless. 
        Users have no idea what happened or how to fix it. This leads to support tickets and people giving up.
      </p>

      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg my-4 border border-red-200 dark:border-red-800">
        <p className="font-semibold mb-2">❌ Bad Example:</p>
        <CodeBlock
          filename="error-handling.tsx"
          language="tsx"
          code={`catch (error) {
  toast.error("An error occurred")
}

// Users have no idea what went wrong or how to fix it`}
        />
      </div>

      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg my-4 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">✅ Better Approach:</p>
        <CodeBlock
          filename="error-handling-fixed.tsx"
          language="tsx"
          code={`catch (error) {
  if (error.code === "EMAIL_EXISTS") {
    toast.error("This email is already registered. Try logging in instead.")
  } else if (error.code === "WEAK_PASSWORD") {
    toast.error("Password must be at least 8 characters with 1 number and 1 special character.")
  } else {
    toast.error("Unable to create account. Please try again or contact support if this persists.")
  }
}

// Specific, actionable error messages`}
        />
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistake #4: Forms That Suck</h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Forms are where you win or lose users. These mistakes will kill your conversion rates:
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <ul className="space-y-3">
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">
            <strong>Labels that don&apos;t work:</strong> Screen readers can&apos;t tell what fields are for, and clicking labels doesn&apos;t work
          </li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">
            <strong>Required fields are unclear:</strong> Users don&apos;t know what they have to fill out
          </li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">
            <strong>Bad validation timing:</strong> Showing errors too early or too late
          </li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">
            <strong>Asking for too much:</strong> Every extra field loses you users
          </li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg my-4 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">✅ Good Form Example:</p>
        <CodeBlock
          filename="accessible-form.tsx"
          language="tsx"
          code={`<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">
      Email <span className="text-destructive">*</span>
    </Label>
    <Input
      id="email"
      type="email"
      placeholder="you@example.com"
      required
      aria-describedby="email-error"
    />
    {errors.email && (
      <p id="email-error" className="text-sm text-destructive">
        {errors.email}
      </p>
    )}
  </div>
  <Button type="submit">Sign Up</Button>
</form>

// Clear labels, visible required fields, accessible error messages`}
        />
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistake #5: Forgetting About Phones</h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        <strong>What&apos;s wrong:</strong> Over 60% of people use phones to browse the web, but many apps are built for desktop first. 
        This creates terrible mobile experiences:
      </p>

      <ul className="space-y-2 list-disc list-inside ml-4 my-4">
        <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Buttons too small to tap easily</li>
        <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Text so small you need to zoom in</li>
        <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Pages that scroll sideways</li>
        <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Popups that don&apos;t fit on screen</li>
        <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Form inputs you can barely see</li>
      </ul>

      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg my-4 border border-green-200 dark:border-green-800">
        <p className="font-semibold mb-2">✅ Mobile-Friendly Approach:</p>
        <CodeBlock
          filename="mobile-responsive.tsx"
          language="tsx"
          code={`// Use responsive classes from the start
<Button className="w-full md:w-auto">
  Click Me
</Button>

// Ensure touch targets are large enough
<button className="min-h-[44px] min-w-[44px] p-4">
  Icon
</button>

// Use responsive dialog/drawer patterns
import { useMediaQuery } from "@/hooks/use-media-query"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Drawer, DrawerContent } from "@/components/ui/drawer"

const isDesktop = useMediaQuery("(min-width: 768px)")

{isDesktop ? (
  <Dialog>
    <DialogContent>{content}</DialogContent>
  </Dialog>
) : (
  <Drawer>
    <DrawerContent>{content}</DrawerContent>
  </Drawer>
)}`}
        />
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistake #6: Ignoring Accessibility</h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Accessibility isn&apos;t optional—it&apos;s required by law and makes your app better for everyone. 
        Here are the common mistakes:
      </p>

      <div className="bg-muted p-6 rounded-lg my-6">
        <ul className="space-y-2 list-disc list-inside">
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Images without descriptions</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Text that&apos;s hard to read (bad color contrast)</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Can&apos;t navigate with keyboard</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Icon buttons with no labels</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">No visual focus indicators</li>
        </ul>
      </div>

      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        <strong>How to fix it:</strong> Use Spectrum UI components—they&apos;re built with accessibility in mind. 
        But always test with keyboard navigation and screen readers to make sure everything works.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Mistake #7: Everything Looks Different</h2>
      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        <strong>What&apos;s wrong:</strong> Buttons are blue on one page, green on another. Spacing is different everywhere. 
        Users have to figure out your interface all over again on every page.
      </p>

      <p className="text-base font-normal text-[#ededed] mt-4">
        <strong>How to fix it:</strong> Use a design system like Spectrum UI. Pick your colors, spacing, and fonts once, 
        then use them everywhere. Give your whole team the same components to work with.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Easy Fixes You Can Do Today</h2>
      <div className="bg-muted p-6 rounded-lg my-6">
        <ol className="space-y-3 list-decimal list-inside">
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] "><strong>Add skeleton screens:</strong> Show loading states everywhere</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] "><strong>Make buttons talk back:</strong> Every click needs visible feedback</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] "><strong>Write helpful error messages:</strong> Tell users exactly what went wrong</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] "><strong>Test on real phones:</strong> Not just browser DevTools</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] "><strong>Use a design system:</strong> Consistency makes everything look professional</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] "><strong>Test with keyboard only:</strong> Can you use your app without a mouse?</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] "><strong>Simplify forms:</strong> Only ask for what you really need</li>
        </ol>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-4 dark:text-[#ededed] text-[#0A0A0A]">Bottom Line</h2>
      <div className="border  p-6 rounded-lg my-6">
        <ul className="space-y-2 list-disc list-inside">
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Show loading states with skeleton screens</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Give feedback for every user action</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Write helpful, specific error messages</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Build for mobile first, then desktop</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Accessibility helps everyone, not just disabled users</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Consistent design builds trust</li>
          <li className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A] ">Use proven component libraries to avoid these mistakes</li>
        </ul>
      </div>

      <p className="text-base font-normal dark:text-[#ededed] text-[#0A0A0A]">
        Most UI mistakes happen because developers don&apos;t think like users. Test your app with real people, 
        on real devices, doing real tasks. The problems you find (and fix) will directly improve your conversion rates 
        and make users happier.
      </p>
    </div>
  ),
}

export default blogPost

