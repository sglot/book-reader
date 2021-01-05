<script context="module">
	export function preload() {
		return this.fetch(`reader.json`).then(r => r.json()).then(bookList => {
			return  { bookList };
		});
	}
</script>

<script>

// export let bookList;
</script>

<style>
	
</style>

<svelte:head>
	<title>Книги</title>
</svelte:head>

