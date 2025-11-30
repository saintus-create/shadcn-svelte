/**
 * SEO-optimized metadata for all components
 * This file contains structured information for better search rankings
 */

export interface ComponentMetadata {
  name: string;
  description: string;
  category: string;
  keywords: string[];
  features: string[];
  useCases: string[];
  advantages: string[];
  faqs: Array<{ question: string; answer: string }>;
  comparison?: Array<{ feature: string; spectrum: string | boolean; others?: string | boolean }>;
  relatedComponents?: string[];
}

export const componentMetadata: Record<string, ComponentMetadata> = {
  accordion: {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings that reveal content sections. Perfect for FAQs and collapsible content in React applications.",
    category: "Disclosure",
    keywords: [
      "accordion component",
      "collapsible content",
      "expandable panels",
      "FAQ component",
      "React accordion",
      "accessible accordion",
      "Tailwind accordion",
    ],
    features: [
      "Fully accessible with keyboard navigation",
      "Single or multiple item expansion",
      "Smooth animations with Framer Motion",
      "Customizable styling with Tailwind CSS",
      "Built on Radix UI primitives",
      "TypeScript support out of the box",
    ],
    useCases: [
      "Building FAQ sections for documentation or support pages",
      "Creating collapsible navigation menus",
      "Organizing complex information in a compact format",
      "Building settings panels with expandable sections",
      "Displaying product specifications or details",
    ],
    advantages: [
      "Reduces page clutter by hiding secondary content",
      "Improves user experience with smooth animations",
      "WCAG 2.1 compliant for accessibility",
      "Mobile-friendly and responsive",
      "Easy to integrate with existing React projects",
      "Minimal bundle size impact",
    ],
    faqs: [
      {
        question: "How do I control which accordion item is open by default?",
        answer: "Use the defaultValue prop to specify which item should be open initially. For controlled components, use the value and onValueChange props.",
      },
      {
        question: "Can multiple accordion items be open at the same time?",
        answer: "Yes! Set the type prop to 'multiple' to allow multiple items to be expanded simultaneously. The default 'single' type only allows one item to be open at a time.",
      },
      {
        question: "Is the Accordion component accessible?",
        answer: "Absolutely. Our Accordion is built on Radix UI primitives and follows WAI-ARIA design patterns, ensuring full keyboard navigation and screen reader support.",
      },
      {
        question: "How do I customize the accordion styling?",
        answer: "The Accordion uses Tailwind CSS classes and can be fully customized. You can pass className props to any part of the component or modify the base component in your project.",
      },
    ],
    comparison: [
      { feature: "Accessibility", spectrum: true, others: "Varies" },
      { feature: "TypeScript Support", spectrum: true, others: true },
      { feature: "Keyboard Navigation", spectrum: true, others: "Limited" },
      { feature: "Animation Support", spectrum: true, others: "Optional" },
      { feature: "Copy & Paste", spectrum: true, others: false },
      { feature: "Customization", spectrum: "Full", others: "Limited" },
    ],
    relatedComponents: ["card", "tabs", "collapsible", "responsive-modal"],
  },

  button: {
    name: "Button",
    description: "A collection of beautifully designed, accessible button components for React. Includes variants for different use cases and styles.",
    category: "Input",
    keywords: [
      "button component",
      "React button",
      "UI button",
      "interactive button",
      "custom button",
      "button variants",
      "accessible button",
    ],
    features: [
      "Multiple variants (default, destructive, outline, ghost, link)",
      "Different sizes (sm, default, lg, icon)",
      "Loading states with spinners",
      "Icon support with proper spacing",
      "Fully accessible and keyboard navigable",
      "Ripple effects and animations",
    ],
    useCases: [
      "Form submissions and user actions",
      "Call-to-action buttons on landing pages",
      "Navigation and routing",
      "Triggering modal dialogs or overlays",
      "Data table actions and toolbar buttons",
    ],
    advantages: [
      "Consistent button styles across your application",
      "Built-in loading and disabled states",
      "Optimized for performance with minimal re-renders",
      "Supports both client and server components",
      "Works seamlessly with Next.js Link component",
    ],
    faqs: [
      {
        question: "How do I add a loading state to a button?",
        answer: "Use the Loading Button component variant which includes a built-in spinner and disabled state during async operations.",
      },
      {
        question: "Can I use buttons with Next.js navigation?",
        answer: "Yes! Use the asChild prop with a Next.js Link component to create button-styled navigation links that preserve Next.js routing benefits.",
      },
      {
        question: "What's the difference between ghost and link variants?",
        answer: "Ghost buttons have a subtle hover state with background, while link buttons look like text links with underline on hover. Use ghost for subtle actions and link for inline navigation.",
      },
    ],
    comparison: [
      { feature: "Variants", spectrum: "6+", others: "3-4" },
      { feature: "Loading State", spectrum: true, others: "Manual" },
      { feature: "Icon Support", spectrum: true, others: "Limited" },
      { feature: "Accessibility", spectrum: true, others: true },
      { feature: "Size Options", spectrum: "4", others: "2-3" },
    ],
    relatedComponents: ["loading-button", "input", "card", "modal"],
  },

  card: {
    name: "Card",
    description: "Versatile card component for displaying content in a contained, elevated format. Perfect for dashboards, product listings, and content layouts.",
    category: "Display",
    keywords: [
      "card component",
      "React card",
      "content container",
      "card layout",
      "UI card",
      "product card",
      "dashboard card",
    ],
    features: [
      "Header, content, and footer sections",
      "Customizable elevation and borders",
      "Hover effects and interactions",
      "Image support with optimized loading",
      "Flexible layout options",
      "Dark mode support",
    ],
    useCases: [
      "Displaying products in e-commerce applications",
      "Creating dashboard widgets and metrics",
      "Blog post previews and article cards",
      "User profile cards and team member displays",
      "Feature highlights and testimonials",
    ],
    advantages: [
      "Consistent card styling across your application",
      "Responsive by default with mobile-first approach",
      "Easy to compose with other components",
      "Optimized for performance with lazy loading",
      "Supports complex layouts without extra divs",
    ],
    faqs: [
      {
        question: "How do I make a card clickable?",
        answer: "Wrap the entire Card component in a Link or button, or use the asChild pattern to make the card itself clickable while maintaining accessibility.",
      },
      {
        question: "Can I nest cards inside other cards?",
        answer: "Yes, but consider the visual hierarchy. Nested cards should have different elevation levels or border styles to maintain clear visual separation.",
      },
      {
        question: "How do I add images to cards?",
        answer: "Use the Next.js Image component inside CardContent for optimized image loading. Our card component automatically handles image sizing and aspect ratios.",
      },
    ],
    comparison: [
      { feature: "Composability", spectrum: true, others: "Limited" },
      { feature: "Image Optimization", spectrum: true, others: false },
      { feature: "Dark Mode", spectrum: true, others: "Manual" },
      { feature: "Variants", spectrum: "Multiple", others: "1-2" },
      { feature: "Accessibility", spectrum: true, others: true },
    ],
    relatedComponents: ["button", "badge", "avatar", "skeleton"],
  },

  alert: {
    name: "Alert",
    description: "Display important messages, notifications, and feedback to users with customizable alert components.",
    category: "Feedback",
    keywords: [
      "alert component",
      "notification",
      "message component",
      "React alert",
      "warning alert",
      "error alert",
    ],
    features: [
      "Multiple variants (default, destructive, success, warning)",
      "Icon support for visual context",
      "Dismissible alerts with close button",
      "Title and description sections",
      "Customizable colors and styles",
      "Accessible with ARIA attributes",
    ],
    useCases: [
      "Form validation messages",
      "System notifications and updates",
      "Error and success feedback",
      "Important announcements",
      "Warning messages before critical actions",
    ],
    advantages: [
      "Clear visual hierarchy for different alert types",
      "Accessible to screen readers",
      "Customizable with Tailwind CSS",
      "Lightweight and performant",
    ],
    faqs: [
      {
        question: "What's the difference between Alert and Toast?",
        answer: "Alerts are static components that appear inline with content, while Toasts are temporary notifications that appear as overlays and auto-dismiss.",
      },
      {
        question: "How do I make an alert dismissible?",
        answer: "Add a close button inside the Alert component and handle the dismiss logic in your component state.",
      },
    ],
    comparison: [
      { feature: "Variants", spectrum: "4+", others: "2-3" },
      { feature: "Icons", spectrum: true, others: "Manual" },
      { feature: "Accessibility", spectrum: true, others: "Varies" },
    ],
    relatedComponents: ["toast", "badge", "skeleton"],
  },

  modal: {
    name: "Modal",
    description: "Responsive modal dialog component for React. Display content in an overlay with focus management and accessibility built-in.",
    category: "Overlay",
    keywords: [
      "modal component",
      "dialog",
      "popup",
      "React modal",
      "dialog component",
      "overlay",
    ],
    features: [
      "Focus trap and keyboard navigation",
      "Backdrop click to close",
      "Smooth animations",
      "Responsive across all devices",
      "Portal rendering for proper stacking",
      "Accessible with ARIA attributes",
    ],
    useCases: [
      "User confirmations and alerts",
      "Forms and data input",
      "Image galleries and lightboxes",
      "Video players and media content",
      "Multi-step workflows",
    ],
    advantages: [
      "Fully accessible with focus management",
      "Prevents scroll when open",
      "Customizable sizes and positions",
      "Works with server and client components",
    ],
    faqs: [
      {
        question: "How do I prevent modal close on backdrop click?",
        answer: "Set the onInteractOutside prop to prevent default behavior for critical actions that require explicit confirmation.",
      },
      {
        question: "Can I nest modals?",
        answer: "While technically possible, we recommend against nesting modals for better UX. Consider using a multi-step wizard instead.",
      },
    ],
    comparison: [
      { feature: "Focus Management", spectrum: true, others: "Manual" },
      { feature: "Responsive", spectrum: true, others: "Limited" },
      { feature: "Animations", spectrum: true, others: "Optional" },
      { feature: "Accessibility", spectrum: true, others: "Varies" },
    ],
    relatedComponents: ["drawer", "popover", "alert"],
  },

  navbar: {
    name: "Navbar",
    description: "Responsive navigation bar component with mobile menu, dropdown support, and smooth animations.",
    category: "Navigation",
    keywords: [
      "navbar component",
      "navigation bar",
      "header",
      "menu",
      "React navbar",
      "responsive navigation",
    ],
    features: [
      "Responsive mobile menu",
      "Dropdown navigation support",
      "Sticky and fixed positioning",
      "Search integration",
      "Theme toggle support",
      "Logo and branding area",
    ],
    useCases: [
      "Main site navigation",
      "Dashboard headers",
      "App navigation bars",
      "Admin panel navigation",
      "Marketing site headers",
    ],
    advantages: [
      "Mobile-first responsive design",
      "SEO-friendly navigation structure",
      "Smooth animations and transitions",
      "Keyboard accessible navigation",
    ],
    faqs: [
      {
        question: "How do I make the navbar sticky?",
        answer: "Add the sticky top-0 z-50 classes to the navbar container for a sticky header that stays at the top during scroll.",
      },
      {
        question: "Can I add a search bar to the navbar?",
        answer: "Yes! The navbar is composable and you can add any component including search inputs in the designated areas.",
      },
    ],
    comparison: [
      { feature: "Mobile Menu", spectrum: true, others: "Manual" },
      { feature: "Dropdowns", spectrum: true, others: "Limited" },
      { feature: "Responsive", spectrum: true, others: true },
    ],
    relatedComponents: ["sidebar", "breadcrumb", "dropdown"],
  },

  // Add more components as needed...
};

// Helper function to get metadata
export function getComponentMetadata(componentName: string): ComponentMetadata | undefined {
  const key = componentName.toLowerCase().replace(/\s+/g, "-");
  return componentMetadata[key];
}

// Get all component names for sitemap generation
export function getAllComponentNames(): string[] {
  return Object.keys(componentMetadata);
}

