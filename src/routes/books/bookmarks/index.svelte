<script lang="ts">
	import { onMount } from "svelte";
import { BookmarkRepositoryBase } from "../../../bookshelf/hands/repository/BookmarkRepositoryBase";

	import LocalStorageBookmarkRepository from "../../../bookshelf/hands/repository/LocalStorageBookmarkRepository";
	let bookmarks = new LocalStorageBookmarkRepository();

	let storage: bookmarkStoreGlobal = null;
	
	onMount(() => {
		storage = bookmarks.getBookmarkStorage();
		if (storage === BookmarkRepositoryBase.nullBookmarkStoreGlobal) {
                storage = [];
        }
		console.log(storage);
	});
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
	<title>Закладки</title>
</svelte:head>

<div class="content listify books">
	<h2>Закладки</h2>

	{#if storage && storage.length > 0}
		{#each storage as pack}
			<section data-id={pack.slug}>
				<h2>
					<span class="offset-anchor" id={pack.slug} />
					<a href="#{pack.slug}" class="anchor" aria-hidden>{pack.title}</a>
				</h2>

				{#each pack.bookmarks as bookmark}
					<section data-id={bookmark.slug}>
						<h5>
							<span class="offset-anchor" id={bookmark.slug} />
							<a href={bookmark.link} 
							class="anchor" 
							aria-hidden
								>{bookmark.title}</a
							>
						</h5>
					</section>
				{/each}
			</section>
		{/each}
	{:else}
			<p>Ни одной</p>
	{/if}
</div>

