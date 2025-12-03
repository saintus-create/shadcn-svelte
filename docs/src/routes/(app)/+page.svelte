<svelte:options runes />

<script lang="ts">
	import Metadata from "$lib/components/metadata.svelte";

	const title = "Documents";
	const description = "A modern documentation platform.";
</script>

<Metadata {title} {description} />

<div class="flex min-h-[calc(100vh-var(--header-height))] flex-col">
	<!-- Hero Section -->
	<section class="flex flex-1 items-center justify-center px-6">
		<div class="container mx-auto max-w-4xl">
			<div class="flex flex-col items-center text-center">
				<!-- Main Heading -->
				<h1
					class="font-apple-display text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[0.95] tracking-[-0.03em]"
				>
					Documentation
				</h1>
			</div>
		</div>
	</section>
</div>
