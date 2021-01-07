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
	import Book from "../../../components/Book.svelte";

	export let book: book;
	export let params;
</script>

<svelte:head>
	<title>{book.title}</title>
</svelte:head>

<Book book={book} dir={`books/reader/${params.slug}`} /> 

