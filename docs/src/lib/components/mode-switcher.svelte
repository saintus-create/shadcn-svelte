<script lang="ts">
	import Button from "$lib/registry/ui/button/button.svelte";
	import { toggleMode } from "mode-watcher";
</script>

<Button
	variant="ghost"
	size="icon"
	class="group/toggle extend-touch-target size-8"
	onclick={toggleMode}
	title="Toggle theme"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		viewBox="0 0 256 256"
		fill="currentColor"
		class="size-4.5"
	>
		<path
			d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192V40a88,88,0,0,1,0,176Z"
		/>
	</svg>
	<span class="sr-only">Toggle theme</span>
</Button>
