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

	<meta 
		name="keywords" 
		content="сборник стихов Николай Глот костромской поэт стихи поэзия стихотворение стихотворения проза автор Судиславль Кострома Зады Москва Ошурки 
				возвращение к солнцу поклонение роду статья статьи">
	<meta 
		name="description" 
		content="Николай Глот автор сборников стихотворений «Возвращение к Sолнцу», «Поклонение Роду». 
				Родом из деревни Ошурки.
				Издавался в Судиславле, Костроме, Москве">
</svelte:head>

<Book {book} dir={`books/reader/${params.slug}`} />
