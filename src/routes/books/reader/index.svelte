<script context="module">
	export function preload() {
		return this.fetch(`reader.json`).then(r => r.json()).then(bookList => {
			return  { bookList };
		});
	}
</script>

<svelte:head>
	<title>Книги Николая Глота</title>

	<meta 
		name="keywords" 
		content="Николай Глот костромской сборник стихи поэзия автор Судиславль Кострома Зады Москва Ошурки 
				возвращение к солнцу фото Травкин статья стихотворения проиведения">
	<meta 
		name="description" 
		content="Николай Глот автор сборников стихотворений «Возвращение к Sолнцу», «Поклонение Роду». 
				Родом из деревни Ошурки.
				Издавался в Судиславле, Костроме, Москве">
</svelte:head>

