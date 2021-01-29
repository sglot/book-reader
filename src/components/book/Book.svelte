<script lang="ts">
	import { onMount } from 'svelte';
	import TableOfContents from './TableOfContents.svelte'; // TODO rename
	import Composition from './Composition.svelte'; // TODO rename
	import Icon from '../Icon.svelte';
	import LocalStorageBookmarkRepository from '../../bookshelf/hands/bookmark/repository/LocalStorageBookmarkRepository';
	import LocalStorageBookmarkHand from '../../bookshelf/hands/bookmark/LocalStorageBookmarkHand';

	export let dir = 'docs';
	export let book: book;

	let active_section;
	let container;
	let aside;
	let show_contents = false;
	let bookmarks = new LocalStorageBookmarkHand(new LocalStorageBookmarkRepository);
	let bookmarkCurrentPack;

	export const getFragment = () => window.location.hash.slice(1);

	onMount(() => {

		bookmarkCurrentPack = bookmarks.getPackByBookSlug(bookmarks.getBookmarkStorage(), book.slug);

		const anchors = container.querySelectorAll('[id]:not([data-scrollignore])');
		const secBookmarks = container.querySelectorAll('small span');
		const endings = container.querySelectorAll('div.ending-composition');
		
		[].map.call(secBookmarks, bm => {
			if (bookmarks.hasBookmark(bookmarkCurrentPack, bm.getAttribute('bookmark-slug'))) {
				bm.classList.add('active');
			}
		})

		let temp = [].map.call(endings, ending => {
			setEndingToCenter(ending);
		})

		let positions;
		const onresize = () => {
			const { top } = container.getBoundingClientRect();
			positions = [].map.call(anchors, anchor => {
				return anchor.getBoundingClientRect().top - top;
			});
		}

		let last_id = getFragment();
		const onscroll = () => {
			const { top } = container.getBoundingClientRect();
			let i = anchors.length;
			while (i--) {
				if (positions[i] + top < 40) {
					const anchor = anchors[i];
					const { id } = anchor;
					if (id !== last_id) {
						active_section = id;
						last_id = id;
					}
					return;
				}
			}
		};

		window.addEventListener('scroll', onscroll, true);
		window.addEventListener('resize', onresize, true);

		// wait for fonts to load...
		const timeouts = [
			setTimeout(onresize, 1000),
			setTimeout(onscroll, 5000)
		];

		onresize();
		onscroll();

		return () => {
			window.removeEventListener('scroll', onscroll, true);
			window.removeEventListener('resize', onresize, true);
			timeouts.forEach(timeout => clearTimeout(timeout));
		};
	});

    function setEndingToCenter(ending: HTMLElement) {
        let composition = ending.parentElement;
		let maxLen = 0;
		composition.childNodes.forEach( (el, i, arr) => {
			// избегаем аннотаций и подписей, выбираем середину
			if (el.textContent.length > maxLen && (i <arr.length - 3 && i > 5)) {
				maxLen = el.textContent.length;
			}
		});
        ending.style.paddingLeft = maxLen / 2 - ending.textContent.length - 2  + "rem";
    }
</script>

<style>

	.theme--book__first {
		--secwidth: 95%;
		--bookmark-non-active: hsl(204, 100%, 50%);
		--border: 10px 0 0px 0px #ffffff, 11px 0 0px 0px #d2b4b4, 14px 0 0px 0px #ffffff, 16px 0 0px 0px #d2b4b4;
		--a-color: var(--prime); 
	}

	aside {
		position: fixed;
		background-color: white;
		left: 0.8rem;
		bottom: 0.8rem;
		width: 3.6rem;
		height: 3.6rem;
		overflow: hidden;
		border: 1px solid #eee;
		box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
		transition: width 0.2s, height 0.2s;
	}
	aside button {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 3.4rem;
		height: 3.4rem;
	}
	aside.open {
		width: calc(100vw - 3rem);
		height: calc(100vh - var(--nav-h));
	}
	aside.open::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100% - 2rem);
		height: 2em;
		background: linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,1) 100%);
		pointer-events: none;
		z-index: 2;
	}
	aside::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 1.9em;
		width: calc(100% - 2rem);
		height: 2em;
		background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,1) 100%);
		pointer-events: none;
	}
	.sidebar {
		position: absolute;
		font-family: var(--font);
		overflow-y: auto;
		width: 100%;
		height: 100%;
		padding: 4em 1.6rem 2em 3.2rem;
		bottom: 2.2em;
	}
	.content {
		width: 100%;
		margin: 0;
		padding: var(--top-offset) var(--side-nav);
		tab-size: 2;
		-moz-tab-size: 2;
	}
	@media (min-width: 832px) { /* can't use vars in @media :( */
		aside {
			display: block;
			width: var(--sidebar-w);
			height: 100vh;
			top: 0;
			left: 0;
			overflow: hidden;
			box-shadow: none;
			border: none;
			overflow: hidden;
			background-color: var(--second);
			color: white;
		}
		aside.open::before {
			display: none;
		}
		aside::after {
			content: '';
			bottom: 0;
			height: var(--top-offset);
			background: linear-gradient(to bottom, rgba(103,103,120,0) 0%, rgba(103,103,120,0.7) 50%, rgba(103,103,120,1) 100%);
		}
		aside button {
			display: none;
		}
		.sidebar {
			padding: var(--top-offset) 0 6.4rem 3.2rem;
			font-family: var(--font);
			overflow-y: auto;
			height: 100%;
			bottom: auto;
			width: 100%;
		}
		.content {
			padding-left: calc(var(--sidebar-w) + var(--side-nav));
		}
		.content :global(.side-by-side) {
			display: grid;
			grid-template-columns: calc(50% - 0.5em) calc(50% - 0.5em);
			grid-gap: 1em;
		}
		.content :global(.side-by-side) :global(.code) {
			padding: 1em 0;
		}
	}

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

		section {
			box-shadow: var(--border);
		}
	}

	.content :global(h3):first-of-type {
		border: none;
		margin: 0;
	}

	.content :global(h4 > em) {
		opacity: 0.7;
	}
	.content :global(h4 > .anchor) {
		top: 0.05em;
	}
	.content :global(h5) {
		font-size: 2.4rem;
		margin: 5em 0 0.5em 0;
	}

	.content :global(.icon) {
		width: 2rem;
		height: 2rem;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
	}

	section > :global(p) {
		/* max-width: var(--linemax); */
		text-indent: 2em;
		text-align: justify;
		width: var(--secwidth);
		margin: 1 auto;
		
	}
	
	/* section :global(p) {
		margin: 1em 0;
	} */

	section:last-of-type {
		margin-bottom: 50vh;
	}

	
	/* no linkify on these */
	/* small a        { all: unset }
	small a:before { all: unset }
	section :global(blockquote) {
		color: hsl(204, 47%, 56%);
		border: 2px solid var(--flash);
	} */
	section :global(blockquote) :global(code) {
		background: hsl(204, 100%, 95%) !important;
		color: hsl(204, 100%, 50%);
	}

	:global(.signature) {
		text-align: right;
		margin-bottom: 2em auto;
		font-style: italic;
		width: var(--secwidth);
	}

	small {
		font-size: var(--h5);
		float: right;
		pointer-events: all;
		color: var(--bookmark-non-active);
		cursor: pointer;
	}

	

    /* small span        { all: unset }
	small span:before { all: unset } */
	/* section :global(blockquote) {
		color: hsl(204, 100%, 50%);
		border: 2px solid var(--flash);
	} */

	small :global(.active) {
		color: var(--prime);
	}

	@media(max-width: 780px) {
		.content h2, section > :global(p), :global(.signature) {
			width: 100%;
		}
	}

	@media(max-width: 590px) {

		.content :global(h5) {
			font-size: 1.8rem;
		}
		
		.content h2 {
			font-size: 2rem;
		}
		
		section {
			font-size: 14px;
		}
	}

	@media(max-width: 480px) {

		.content :global(h5) {
			font-size: 1.8rem;
		}
		
		/* section {
			font-size: 14px;
			max-width: 20em;
		} */

		/* section :global(.signature) {
			max-width: 25em;
		} */
	}

	@media(max-width: 440px) {

		.content :global(h5) {
			font-size: 1.4rem;
		}

		.content h2 {
			font-size: 1.6rem;
		}

		section {
			font-size: 12px;
			/* max-width: 20em; */
		}

		/* section :global(.signature) {
			max-width: 20em;
		} */
	}

	@media(max-width: 320px) {
		.content :global(h5) {
			font-size: 1.2rem;
			/* max-width: 20em; */
		}

		.content h2 {
			font-size: 1.4rem;
		}

		section {
			font-size: 11px;
			/* max-width: 20em; */
		}
	}
</style>

<div bind:this={container} class="content listify theme--book__first">
	{#each book.sections as section}
		<section data-id={section.slug}>
			<h2>
				<span class="offset-anchor" id={section.slug}></span>
				<!-- svelte-ignore a11y-missing-content -->
				<a href="{dir}#{section.slug}" class="anchor" aria-hidden></a>

				{#if !section.format || !section.format.includes('no-title') }
					
					{@html section.title}
				{/if}

				<small>
					<span
						
						title				=	"Закладка" 
						book-slug			=	"{book.slug}"
						bookmark-slug		=	"{section.slug}"
						bookmark-title		=	"{section.title}"
						bookmark-link		=	{`/books/reader/${book.slug}#${section.slug}`}
						on:click 			=	{event => bookmarks.toggleBookmark(event)}
					>
						<Icon name='bookmark' />
					</span>
				</small>
			</h2>

			{#if section.html != ""}
				{@html section.html}
				
				{#if section.signature }
					<div class="signature">
						{@html section.signature}
					</div>
				{/if}
			{/if}

			{#each section.compositions as composition}
				<Composition {dir} {composition} {book} {bookmarks}/>
			{/each}
		</section>
	{/each}
</div>

<aside bind:this={aside} class="sidebar-container" class:open={show_contents}>
	<div class="sidebar" on:click="{() => show_contents = false}"> <!-- scroll container -->
		<TableOfContents sections={book.sections} active_section="{active_section}" {show_contents} {dir} />
	</div>

	<button on:click="{() => show_contents = !show_contents}">
		<Icon name="{show_contents? 'close' : 'menu'}"/>
	</button>
</aside>