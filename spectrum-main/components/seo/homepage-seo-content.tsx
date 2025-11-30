import Link from "next/link";
import { ArrowRight, Check, Code2, Palette, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HomePageSEOContent() {
  return (
    <div className="space-y-16 py-12">
      {/* Main Value Proposition */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The Best React UI Component Library for Modern Web Development
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Build faster with 50+ beautifully designed, fully accessible React components.
          Perfect for Next.js applications, design systems, and production-ready projects.
        </p>
      </section>

      {/* Key Benefits */}
      <section className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="rounded-lg bg-primary/10 p-2 w-fit mb-2">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Lightning Fast Development</CardTitle>
            <CardDescription>
              Copy, paste, and customize components in seconds. No complex setup or configuration required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>50+ pre-built React components</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>TypeScript support out of the box</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Production-ready code</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="rounded-lg bg-primary/10 p-2 w-fit mb-2">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Fully Customizable Design System</CardTitle>
            <CardDescription>
              Built with Tailwind CSS. Customize every aspect to match your brand identity perfectly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Tailwind CSS integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Dark mode support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Theming system</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="rounded-lg bg-primary/10 p-2 w-fit mb-2">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Accessible by Default</CardTitle>
            <CardDescription>
              WCAG 2.1 compliant components with full keyboard navigation and screen reader support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>ARIA attributes included</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Keyboard navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Screen reader tested</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Comparison with Other Libraries */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Developers Choose Spectrum UI Over Other React UI Libraries
          </h2>
          <p className="text-muted-foreground">
            See how Spectrum UI compares to popular alternatives like Material UI, Chakra UI, and shadcn/ui
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center font-semibold">Spectrum UI</th>
                <th className="p-4 text-center font-semibold">Material UI</th>
                <th className="p-4 text-center font-semibold">Chakra UI</th>
                <th className="p-4 text-center font-semibold">shadcn/ui</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Copy & Paste</td>
                <td className="p-4 text-center text-green-500">✓</td>
                <td className="p-4 text-center text-muted-foreground">✗</td>
                <td className="p-4 text-center text-muted-foreground">✗</td>
                <td className="p-4 text-center text-green-500">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Tailwind CSS</td>
                <td className="p-4 text-center text-green-500">✓</td>
                <td className="p-4 text-center text-muted-foreground">✗</td>
                <td className="p-4 text-center text-muted-foreground">✗</td>
                <td className="p-4 text-center text-green-500">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">TypeScript</td>
                <td className="p-4 text-center text-green-500">✓</td>
                <td className="p-4 text-center text-green-500">✓</td>
                <td className="p-4 text-center text-green-500">✓</td>
                <td className="p-4 text-center text-green-500">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Bundle Size</td>
                <td className="p-4 text-center">Minimal</td>
                <td className="p-4 text-center">Large</td>
                <td className="p-4 text-center">Medium</td>
                <td className="p-4 text-center">Minimal</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Components</td>
                <td className="p-4 text-center">50+</td>
                <td className="p-4 text-center">50+</td>
                <td className="p-4 text-center">45+</td>
                <td className="p-4 text-center">40+</td>
              </tr>
              <tr>
                <td className="p-4">Free & Open Source</td>
                <td className="p-4 text-center text-green-500">✓</td>
                <td className="p-4 text-center text-green-500">✓</td>
                <td className="p-4 text-center text-green-500">✓</td>
                <td className="p-4 text-center text-green-500">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Perfect for Any React Project
          </h2>
          <p className="text-muted-foreground">
            Trusted by developers building dashboards, SaaS applications, e-commerce sites, and more
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Admin Dashboards",
              description: "Build beautiful admin panels with data tables, charts, and forms",
              components: ["Data Table", "Charts", "Forms", "Sidebar"],
            },
            {
              title: "SaaS Applications",
              description: "Create professional SaaS UIs with authentication and settings pages",
              components: ["Auth Forms", "Settings", "Modals", "Notifications"],
            },
            {
              title: "E-commerce Sites",
              description: "Design stunning product pages and shopping experiences",
              components: ["Product Cards", "Gallery", "Cart", "Checkout"],
            },
            {
              title: "Landing Pages",
              description: "Launch marketing sites with hero sections and CTAs",
              components: ["Hero", "Features", "Pricing", "Testimonials"],
            },
            {
              title: "Documentation Sites",
              description: "Document your APIs and products with beautiful layouts",
              components: ["Sidebar", "TOC", "Code Blocks", "Search"],
            },
            {
              title: "Portfolio Sites",
              description: "Showcase your work with elegant project galleries",
              components: ["Cards", "Gallery", "Animations", "Contact Forms"],
            },
          ].map((useCase) => (
            <Card key={useCase.title}>
              <CardHeader>
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {useCase.components.map((comp) => (
                    <span
                      key={comp}
                      className="text-xs bg-muted px-2 py-1 rounded"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold tracking-tight">
          Start Building Beautiful React UIs Today
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join thousands of developers using Spectrum UI to build modern web applications.
          Get started in minutes with our comprehensive documentation and examples.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs/installation"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Browse Components
          </Link>
        </div>
      </section>
    </div>
  );
}

