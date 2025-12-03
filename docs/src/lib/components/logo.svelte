<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, ...restProps }: HTMLAttributes<HTMLImageElement> = $props();
</script>

<img src="/logo.png" alt="Logo" class={className} {...restProps} />
