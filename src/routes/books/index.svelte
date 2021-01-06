<script context="module">
	export function preload() {
		return this.fetch(`books.json`)
			.then((r) => r.json())
			.then((bookList) => {
				return { bookList };
			});
	}
</script>

<script>
	export let bookList;
</script>

<style>

	.content {
		width: 100%;
		margin: 0;
		padding: var(--top-offset) var(--side-nav);
		tab-size: 2;
		-moz-tab-size: 2;
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
	}

	.books {
		grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    min-height: calc(100vh - var(--nav-h));
    padding: var(--top-offset) var(--side-nav) 6rem var(--side-nav);
    max-width: var(--main-width);
    margin: 0 auto;
	}
</style>

<svelte:head>
	<title>Книги</title>
</svelte:head>

<div class="content listify books">
	<h2 pa>Книги со стихами</h2>

	<p>
		На сайте представлены две книги, которые Николай Петрович издал в
		печатном виде.
	</p>
	<p>
		Тексты перенесены на сайт в книжном формате в соответствии с задумкой
		автора, его авторским расположением строк и строф, порядком произведений
		и пунктуацией.
	</p>

	<ul style="margin 0 0 0 2em; font-weight: 300;">
		{#each bookList as book}
			<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
			<li>
				<a
					rel="prefetch"
					href="books/reader/{book.slug}">{book.title}</a>
			</li>
			<!-- <li><p>{book.title}</p></li> -->
		{/each}
	</ul>
</div>
