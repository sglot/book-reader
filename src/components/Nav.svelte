<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let segment;
	export let page;
	export let home = 'Главная';
	export let home_title = 'Главная страница';
	
	const current = writable(null);
	const currentItem = writable(null);
	setContext('nav', current);
	setContext('navitem', currentItem);
	
	let open = false;
	let visible = true;
	// hide nav whenever we navigate
	page.subscribe(() => {
		open = false;
	});

	function intercept_touchstart(event) {
		if (!open) {
			event.preventDefault();
			event.stopPropagation();
			open = true;
		}
	}
	// Prevents navbar to show/hide when clicking in docs sidebar
	let hash_changed = false;
	function handle_hashchange() {
		hash_changed = true;
	}

	let last_scroll = 0;
	function handle_scroll() {
		const scroll = window.pageYOffset;
		if (!hash_changed) {
			visible = (scroll < 50 || scroll < last_scroll);
		}
		last_scroll = scroll;
		hash_changed = false;
	}

	$: $current = segment;
	$: $currentItem = $page.path;

</script>

<!-- <style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		min-height: 7.6vh;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style> -->




<style>
	header {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;
		height: var(--nav-h);
		padding: 0 var(--side-nav);
		margin: 0 auto;
		background-color: white;
		box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5);
		font-family: var(--font);
		z-index: 100;
		user-select: none;
		transform: translate(0,calc(-100% - 1rem));
		transition: transform 0.2s;
	}
	header.visible {
		transform: none;
	}
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: var(--nav-h);
		padding: 0 var(--side-nav) 0 var(--side-nav);
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: transparent;
		transform: none;
		transition: none;
		box-shadow: none;
	}
	.primary {
		list-style: none;
		font-family: var(--font);
		margin: 0;
		line-height: 1;
	}
	ul :global(li) {
		display: block;
		display: none;
	}
	ul :global(li).active {
		display: block;
	}
	ul {
		position: relative;
		padding: 0 3rem 0 0;
		background: url(/icons/chevron.svg) calc(100% - 1em) 0.05em no-repeat;
		background-size: 1em 1em;
	}
	ul::after {
		/* prevent clicks from registering if nav is closed */
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
	ul.open {
		padding: 0 0 1em 0;
		background: white;
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		border-radius: 0 0 var(--border-r) var(--border-r);
		align-self: start;
		position: absolute;
		right: var(--side-nav);
	}
	ul.open :global(li) {
		display: block;
		text-align: right
	}
	ul.open::after {
		display: none;
	}
	ul :global(li) :global(a) {
		font-size: var(--h5);
		padding: 0 .8rem;
		border: none;
		color: inherit;
	}
	ul.open :global(li) :global(a) {
		padding: 1.5rem 3.7rem 1.5rem 4rem;
		display: block;
	}
	ul.open :global(li):first-child :global(a) {
		padding-top: 2.3rem;
	}
	.primary :global(svg) {
		width: 2rem;
		height: 2rem;
	}

	.home {
		position: relative;
		/* top: -.1rem;
		width: 18rem;
		height: 4.2rem;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		background: 0 50% no-repeat;
		background-size: auto 100%;
		text-indent: -9999px; */
		font-size: var(--h5);
		font-weight: 500;
		border-left: 0.15em solid var(--home-border);
		padding-left: 0.5em;
	}

	ul :global(li).active :global(a) {
		color: var(--prime)
	}
	.modal-background {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: rgba(255, 255, 255, 0.9);
	}
	a {
		color: inherit;
		border-bottom: none;
		transition: none;
	}
	ul :global(li):not(.active) :global(a):hover {
		color: var(--flash);
	}

	@media (min-width: 840px) {
		ul :global(li).active :global(a) {
			color: var(--prime)
		}
	
		ul {
			padding: 0;
			background: none;
		}
		ul.open {
			padding: 0;
			background: white;
			border: none;
			align-self: initial;
		}
		ul.open :global(li) {
			display: inline;
			text-align: left;
		}
		ul.open :global(li) :global(a) {
			font-size: var(--h5);
			padding: 0 .8rem;
			display: inline;
		}
		ul::after {
			display: none;
		}
		ul :global(li) {
			display: inline !important;
		}
		.hide-if-desktop {
			display: none !important;
		}
	}

	@media (max-width: 320px) {
		ul :global(li) :global(a) {
			font-size: 1em !important;
		}
	}
</style>

<svelte:window on:hashchange={handle_hashchange} on:scroll={handle_scroll} />


<!-- <nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Главная</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Об авторе</a></li>

		for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
		<li><a rel=prefetch aria-current="{segment === 'books' ? 'page' : undefined}" href="books">Книги</a></li>
	</ul>
</nav> -->


<header class:visible="{visible || open}">
	<nav>
		<a
			rel="prefetch"
			href="."
			class="home"
			title="{home_title}"
		>Николай Глот</a>

		{#if open}
			<div class="modal-background hide-if-desktop" on:click="{() => open = false}"></div>
		{/if}

		<ul
			class="primary"
			class:open
			on:touchstart|capture={intercept_touchstart}
			on:mouseenter="{() => open = true}"
			on:mouseleave="{() => open = false}"
		>
			<li class="hide-if-desktop" class:active="{!segment}">
				<a rel="prefetch" href=".">
					{home}
				</a>
			</li>
			<slot></slot>
		</ul>
	</nav>
</header>