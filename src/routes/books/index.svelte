<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return  { posts };
		});
	}
</script>

<script>
	import { Configurator } from '../../bookshelf/hands/configurator';

	let configurator = new Configurator();
	let bookRepository = configurator.getBookRepository();
	let bookList = bookRepository.getBookList();

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
		<li><a rel="prefetch" href="books/{book.name}">{book.name}</a></li>
		<!-- <li><p>{book.name}</p></li> -->
	{/each}
</ul>

