<script context="module">
	export function preload() {
		return this.fetch(`books.json`).then(r => r.json()).then(bookList => {
			return  { bookList };
		});
	}
</script>

<script>

export let bookList;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Книги</title>
</svelte:head>

<h1>Книги со стихами</h1>

<ul>
	{#each bookList as book}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="books/reader/{book.slug}">{book.title}</a></li>
		<!-- <li><p>{book.title}</p></li> -->
	{/each}
</ul>

