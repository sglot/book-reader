<script>
	import { getContext } from "svelte";
	export let segment = null;
	export let external = null;
	export let title = null;
	const current = getContext("nav");
	const navitem = getContext("navitem");
</script>

{#if external}
	<li>
		<a href={external} {title}><slot /></a>
	</li>
{:else}
	<li class:active={$navitem === segment || decodeURI($navitem) === segment}>
		<a rel="prefetch" href={segment} {title}><slot /> </a>
	</li>
{/if}
