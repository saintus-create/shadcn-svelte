<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { ...restProps }: SVGAttributes<SVGElement> = $props();
</script>

<svg
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="size-4.5"
	{...restProps}
>
	<circle cx="12" cy="12" r="10" />
	<line x1="2" y1="12" x2="22" y2="12" />
	<path d="M12 2a15 15 0 0 1 0 20" />
</svg>
