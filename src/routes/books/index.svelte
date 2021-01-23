<script context="module" >
	export function preload() {
		return this.fetch(`books.json`)
			.then((r) => r.json())
			.then((bookList) => {
				return {bookList} ;
			});
	}
</script>

<script lang="typescript">
	export let bookList: bookList;
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
	<title>Книги со стихами. Никлай Глот</title>

	<meta 
		name="keywords" 
		content="Николай Глот автор произведений сборник сборники костромской поэт стихи поэзия стихотворение стихотворения проза Судиславль Кострома Зады Москва Ошурки 
				возвращение к солнцу фото Травкин статья">
	<meta 
		name="description" 
		content="Николай Глот автор сборников стихотворений «Возвращение к Sолнцу», «Поклонение Роду». 
				Родом из деревни Ошурки.
				Издавался в Судиславле, Костроме, Москве">
</svelte:head>



<div class="content listify books">
	<h2>Книги со стихами</h2>

	<p>
		На сайте представлены две книги, которые Николай Петрович издал в
		печатном виде.
	</p>
	<p>
		Тексты перенесены на сайт в соответствии с задумкой
		автора, его авторским расположением строк и строф, порядком произведений
		и пунктуацией.
	</p>

	<p>
		Приятного чтения.
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
		{/each}
	</ul>
</div>
