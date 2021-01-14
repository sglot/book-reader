<script context="module">
	export function preload() {
		return this.fetch(`books/bookmarks.json`).then(r => r.json()).then(packs => {
			return  { packs };
		});
	}
</script>

<script>

export let packs;
console.log(packs);
</script>

<style>
	.content h2 {
		margin-top: 8rem;
		padding: 2rem 1.6rem 4rem 0.2rem;
		border-top: var(--border-w) solid #6767785b; /* based on --second */
		color: var(--text);
		line-height: 1;
		font-size: var(--h3);
		letter-spacing: .05em;
		text-transform: uppercase;
		width: var(--secwidth);
	}
	.content section:first-of-type > h2 {
		margin-top: 0;
	}

	


	.content :global(h4) {
		margin: 2em 0 1em 0;
	}
	.content :global(.offset-anchor) {
		position: relative;
		display: block;
		top: calc(-1 * (var(--nav-h) + var(--top-offset) - 1rem));
		width: 0;
		height: 0;
	}
	.content :global(.anchor) {
		position: absolute;
		display: block;
		background: url(/icons/link.svg) 0 50% no-repeat;
		background-size: 1em 1em;
		width: 1.4em;
		height: 1em;
		left: -1.3em;
		opacity: 0;
		transition: opacity 0.2s;
		border: none !important; /* TODO get rid of linkify */
	}
	.content :global(h2 > .anchor),
	.content :global(h3 > .anchor) {
		top: 0.75em;
	}
	@media (min-width: 768px) {
		.content :global(h2):hover :global(.anchor),
		.content :global(h3):hover :global(.anchor),
		.content :global(h4):hover :global(.anchor),
		.content :global(h5):hover :global(.anchor),
		.content :global(h6):hover :global(.anchor) {
			opacity: 1;
		}
		/* .content :global(h5) :global(.anchor),
		.content :global(h6) :global(.anchor) {
			top: 0.25em;
		} */
	}
</style>

<svelte:head>
	<title>Закладки</title>
</svelte:head>

<div  class="content listify theme--book__first">
	{#each packs as pack}
		<section data-id={pack.slug}>
			<h2>h2
				<span class="offset-anchor" id={pack.slug}></span>
				<!-- svelte-ignore a11y-missing-content -->
				<a href="#{pack.slug}" class="anchor" aria-hidden>aaa</a>

			</h2>

			{#each pack.bookmarks as bookmark}
				<section data-id={bookmark.slug}>
					<h2>hh22
						<span class="offset-anchor" id={bookmark.slug}></span>
						<!-- svelte-ignore a11y-missing-content -->
						<a href="{bookmark.link}" class="anchor" aria-hidden>{bookmark.slug}aaa222</a>

					</h2>
				</section>
			{/each}
			
		</section>
	{/each}
</div>
