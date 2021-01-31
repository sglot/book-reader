<script context="module">
	export function preload(page) {
		return this.fetch(`books.json`)
			.then((r) => r.json())
			.then((bookList) => {
				return { bookList: bookList };
			});
	}
</script>

<script lang="ts">
	import { stores } from "@sapper/app";
	import Nav from "../components/Nav.svelte";
	import NavItem from "../components/NavItem.svelte";
	import Icons from "../components/Icons.svelte";
	import { afterUpdate } from "svelte";

	export let segment;
	const { page } = stores();
	export let bookList: bookList;

	afterUpdate(async () => {
		showFooter();
	});

	function showFooter() {
		let footerMain = document.getElementById("footer-main");
		footerMain.style.display = $page.path.includes("books/reader")
			? "none"
			: "flex";
	}
</script>

<Icons />

<Nav {segment} {page} >
	<NavItem segment="/books">Книги</NavItem>
	<NavItem segment="/books/bookmarks">Закладки</NavItem>

	{#each bookList as book}
		<NavItem segment="/books/reader/{book.slug}">«{book.title}»</NavItem>
	{/each}
</Nav>

<main>
	<slot />
</main>

<footer id="footer-main">
	<div class="footer-col">
		<div>&copy; Н.П. Глот 2021</div>
		<div>nglot@gmail.com</div>
	</div>

	<div class="footer-col">
		{#each bookList as book}
			<div>
				<a rel="prefetch" href="books/reader/{book.slug}"
					>«{book.title}»</a
				>
			</div>
		{/each}
	</div>

	<div class="footer-col">
		<div>Кострома</div>
		<div>Судиславль</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 0.8em;
		min-height: 10vh;
		border-top: 1px solid #bdbdbd;
		padding: 1em 0;
	}

	.footer-col {
		display: flex;
		flex-flow: column;
		padding: 1em;
	}

	@media (max-width: 320px) { 
		footer {
			flex-flow: column;
		}
	}
</style>
