<script lang="ts">
    import type BookmarkHandBase from '../../bookshelf/hands/bookmark/bookmarkHandBase';
    import Icon from '../Icon.svelte';

	export let dir = 'docs';
    export let composition: composition;
    export let book: book;
    export let bookmarks: BookmarkHandBase;
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
		color: var(--bookmark-non-active);
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

    .annotation__container {
        display: flex;
        justify-content: flex-end;
    }

	.annotation {
		text-align: var(--annotation-align);
		margin-bottom: 2em;
		font-style: italic;
	}

    section > :global(p) {
		max-width: 100%;
	}
    section {
        max-width: 30em;
        margin: 0 auto;
        /* width: max-content; */
    }

    .ending-composition {
        padding-left: 44%;
        padding-top: 1em;
    }

    .ending-composition::before {
        content: var(--ending-content);
        color: var(--ending-color);
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
                bookmark-link		=	{`/books/reader/${book.slug}#${composition.slug}`}
                on:click 			=	{event => bookmarks.toggleBookmark(event)}
            >
                <Icon name='bookmark' />
            </span>
        </small>
    </h5>

    {#if composition.annotation != ""}
        <div class="annotation__container">
            <div class="annotation">
                {@html composition.annotation}
            </div>
        </div>
    {/if}

    {@html composition.html}

    {#if composition.signature }
        <div class="signature">
            {@html composition.signature}
        </div>
    {/if}
                
    <div class="ending-composition"></div>

</section>