<script lang="ts">
	import * as NavigationMenu from "$lib/registry/ui/navigation-menu/index.js";
	import { cn } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";
	import { page } from "$app/state";
	import type { NavItem } from "$lib/navigation.js";

	let {
		items,
		class: className,
		...restProps
	}: {
		items: NavItem[];
		class?: string;
	} & HTMLAttributes<HTMLElement> = $props();

	const components: { title: string; href: string; description: string }[] = [
		{
			title: "Alert Dialog",
			href: "/docs/components/alert-dialog",
			description:
				"A modal dialog that interrupts the user with important content and expects a response.",
		},
		{
			title: "Hover Card",
			href: "/docs/components/hover-card",
			description:
				"For sighted users to preview content available behind a link.",
		},
		{
			title: "Progress",
			href: "/docs/components/progress",
			description:
				"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
		},
		{
			title: "Scroll-area",
			href: "/docs/components/scroll-area",
			description: "Visually or semantically separates content.",
		},
		{
			title: "Tabs",
			href: "/docs/components/tabs",
			description:
				"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
		},
		{
			title: "Tooltip",
			href: "/docs/components/tooltip",
			description:
				"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		},
	];
</script>

<NavigationMenu.Root class={className} {...restProps}>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Getting Started</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
					<li class="row-span-3">
						<NavigationMenu.Link href="/" class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
							<div class="mb-2 mt-4 text-lg font-medium">
								shadcn-svelte
							</div>
							<p class="text-sm leading-tight text-muted-foreground">
								Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
							</p>
						</NavigationMenu.Link>
					</li>
					<li>
						<NavigationMenu.Link href="/docs" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
							<div class="text-sm font-medium leading-none">Introduction</div>
							<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
								Re-usable components built using Radix UI and Tailwind CSS.
							</p>
						</NavigationMenu.Link>
					</li>
					<li>
						<NavigationMenu.Link href="/docs/installation" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
							<div class="text-sm font-medium leading-none">Installation</div>
							<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
								How to install dependencies and structure your app.
							</p>
						</NavigationMenu.Link>
					</li>
					<li>
						<NavigationMenu.Link href="/docs/critical-theory" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
							<div class="text-sm font-medium leading-none">Critical Theory</div>
							<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
								A comprehensive guide to Critical Theory, its thinkers, concepts, and applications.
							</p>
						</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
					{#each components as component}
						<li>
							<NavigationMenu.Link href={component.href} class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
								<div class="text-sm font-medium leading-none">{component.title}</div>
								<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
									{component.description}
								</p>
							</NavigationMenu.Link>
						</li>
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="/docs" class={cn(
				"group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
			)}>
				Documentation
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
