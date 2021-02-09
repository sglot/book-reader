<script>
	import { afterUpdate, beforeUpdate } from "svelte";
	import Icon from "../Icon.svelte";
	export let sections = [];
	export let active_section = null;
	export let show_contents;
	export let prevent_sidebar_scroll = false;
	export let dir;
	let ul;

	const min = 200;
	let params;

	afterUpdate(() => {
		if (show_contents && window.innerWidth < 832) {
			setTimeout(() => {
				mobileScroll();
			}, 500);
		} else {
			desktopScroll();
		}
	});

	const mobileScroll = () => {
		if (!(params = getActiveParams())) {
			return;
		}

		const { top, max } = params;
		// общая прокрутка при скролле
		if (top < min) {
			ul.parentNode.scrollBy({
				top: top - min,
				left: 0,
				behavior: "smooth",
			});

			return;
		}

		// прокрутка с начала страницы на стих в середине
		if (top > max) {
			ul.parentNode.scrollBy({
				top: top - max,
				left: 0,
				behavior: "smooth",
			});
		}
	};

	const getActiveParams = () => {
		const active = ul.querySelector(".active");
		if (!active) {
			return false;
		}

		const { top, bottom } = active.getBoundingClientRect();
		const max = window.innerHeight - min;

		return { top, bottom, max };
	};

	const desktopScroll = () => {
		if (!(params = getActiveParams())) {
			return;
		}

		const { top, bottom, max } = params;

		if (top > max) {
			ul.parentNode.scrollBy({
				top: top - max,
				left: 0,
				behavior: "smooth",
			});
		} else if (bottom < min) {
			ul.parentNode.scrollBy({
				top: bottom - min,
				left: 0,
				behavior: "smooth",
			});
		}
	};
</script>

<ul
	bind:this={ul}
	class="reference-toc"
	on:mouseenter={() => (prevent_sidebar_scroll = true)}
	on:mouseleave={() => (prevent_sidebar_scroll = false)}
>
	{#each sections as section}
		<li>
			<a
				class="section"
				class:active={section.slug === active_section}
				href="{dir}#{section.slug}"
			>
				{@html section.title}

				{#if section.slug === active_section}
					<div class="icon-container">
						<Icon name="arrow-right" />
					</div>
				{/if}
			</a>

			{#each section.compositions as subsection, j}
				<!-- see <script> below: on:click='scrollTo(event, subsection.slug)' -->
				<a
					class="subsection"
					class:active={subsection.slug == active_section}
					href="{dir}#{subsection.slug}"
					data-level={subsection.level}
				>
					{@html subsection.title}

					<div class="icon-container">
						{#if subsection.slug == active_section}<Icon
								name="arrow-right"
							/>{/if}
						<span>{j + 1}</span>
					</div>
				</a>
			{/each}
		</li>
	{/each}
</ul>

<style>
	ul {
		margin: 0 0 6em 0;
	}

	.reference-toc li {
		display: block;
		line-height: 1.2;
		margin: 0 0 4rem 0;
	}
	a {
		position: relative;
		transition: color 0.2s;
		border-bottom: none;
		padding: 0;
		color: var(--second);
	}
	.section {
		display: block;
		padding: 0 0 0.8rem 0;
		font-size: var(--h6);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
	}
	.subsection {
		display: block;
		font-size: 1.6rem;
		font-family: var(--font);
		padding: 0 0 0.6em 0;
	}
	span {
		color: rgb(172, 172, 172);
	}
	.section:hover,
	.subsection:hover,
	.active,
	.active > :global(span) {
		color: var(--prime);
	}
	.subsection[data-level="4"] {
		padding-left: 1.2rem;
	}
	.icon-container {
		position: absolute;
		top: -0.2rem;
		right: 2.4rem;
	}
	@media (min-width: 832px) {
		a {
			color: var(--sidebar-text);
		}
		a:hover,
		.section:hover,
		.subsection:hover,
		.active {
			color: white;
		}
	}

	@media (max-width: 420px) {
		.subsection {
			font-size: 1.3rem;
		}
		.section {
			font-size: 1.3rem;
		}
	}
</style>
