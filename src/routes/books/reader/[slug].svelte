<script lang="ts" context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`books/reader/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { book: data, params: params };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script lang="ts">
	import { onMount } from "svelte";
	import Book from "../../../components/book/Book.svelte";

	export let book: book;
	export let params;

	onMount(() => {
		setTimeout(() => {
			let el = document.getElementById(decodeURI(window.location.hash.slice(1)));
			el.scrollIntoView();
		}, 5);
	});
</script>

<svelte:head>
	<title>{book.title}</title>
</svelte:head>

<Book {book} dir={`books/reader/${params.slug}`} />
