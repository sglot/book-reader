<script context="module">
	export function preload() {
		return this.fetch(`books/bookmarks.json`).then(r => r.json()).then(bookList => {
			return  { bookList };
		});
	}
</script>

<script>

export let bookList;
console.log(bookList);
</script>

<style>
	
</style>

<svelte:head>
	<title>Закладки</title>
</svelte:head>

ddd
