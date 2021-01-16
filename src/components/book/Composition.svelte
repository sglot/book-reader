<script lang="ts">

import type LocalStorageBookmarkRepository from '../../bookshelf/hands/repository/LocalStorageBookmarkRepository';


    import Icon from '../Icon.svelte';
	export let dir = 'docs';
    export let composition: composition;
    export let book: book;
    export let bookmarks: LocalStorageBookmarkRepository;
    
</script>

<style>
    
    h5 {
		margin-top: 8rem;
		padding: 2rem 1.6rem 4rem 0.2rem;
		border-top: var(--border-w) solid #6767785b; /* based on --second */
		color: var(--text);
		line-height: 1;
		font-size: var(--h3);
		letter-spacing: .05em;
		text-transform: uppercase;
	}
	
    section:first-of-type > h5 {
		margin-top: 0;
    }


    small {
		font-size: var(--h5);
		float: right;
		pointer-events: all;
		color: var(--activebookmark);
		cursor: pointer;
	}

    small :global(.active) {
		color: var(--prime);
	}

    /* small span        { all: unset }
	small span:before { all: unset }
	section :global(blockquote) {
		color: hsl(204, 100%, 50%);
		border: 2px solid var(--flash);
	} */

	.annotation {
		text-align: right;
		margin-bottom: 2em;
		font-style: italic;
	}

    section > :global(p) {
		max-width: 100%;
	}
    section {
        max-width: 30em;
        margin: 0 auto;
    }

    .ending-composition {
        text-align: left;
        padding-left: 6.5em;
        padding-top: 1em;
    }
</style>

<section data-id={composition.slug}>
    <h5>
        <span class="offset-anchor" id={composition.slug}></span>
        <!-- svelte-ignore a11y-missing-content -->
        <a href="{dir}#{composition.slug}" class="anchor" aria-hidden></a>

        {@html composition.title}
        
        <small>
            <span
                
                title				=	"Закладка" 
                book-slug			=	"{book.slug}"
                bookmark-slug		=	"{composition.slug}"
                bookmark-title		=	"{composition.title}"
                bookmark-link		=	{`/book/reader/${book.slug}/#${composition.slug}`}
                on:click 			=	{event => bookmarks.toggleBookmark(event)}
            >
                <Icon name='bookmark' />
            </span>
        </small>
    </h5>

    {#if composition.annotation != ""}
        <div class="annotation">
            {@html composition.annotation}
        </div>
    {/if}

    {@html composition.html}

    <div class="ending-composition">* * *</div>

</section>