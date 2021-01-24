import BookmarkHandBase from "./bookmarkHandBase";
import type BookmarkRepositoryBase from "./repository/BookmarkRepositoryBase";

export default class LocalStorageBookmarkHand extends BookmarkHandBase {

    constructor(
        private bookmarks: BookmarkRepositoryBase
    ) {
        super();
    }

    getPackByBookSlug(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug']) {
        let index = this.bookmarks.getPackIndex(storage, book);

        if (index < 0) {
            return [];
        }

        return storage[index].bookmarks;
    }

    hasBookmark(pack: bookmark[] | bookmarkStoreBook[], slug: string) {
        if (typeof pack !== 'object') {
            return false;
        }

        for (var i = pack.length - 1; i >= 0; i--) {
            if (pack[i].slug === slug) {
                pack.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    // for svelte
    toggleBookmark(event) {
        let bm = event.currentTarget as HTMLElement

        if (bm.classList.contains('active')) {
            this.bookmarks.deleteBookmark(
                this.bookmarks.getBookmarkStorage(),
                bm.getAttribute('book-slug'),
                bm.getAttribute('bookmark-slug')
            );

            bm.classList.toggle("active");

            return;
        }

        let bookmark = {
            "slug": bm.getAttribute('bookmark-slug'),
            "title": bm.getAttribute('bookmark-title'),
            "link": bm.getAttribute('bookmark-link')
        };

        this.bookmarks.addBookmark(
            this.bookmarks.getBookmarkStorage(),
            bm.getAttribute('book-slug'),
            bookmark
        );

        bm.classList.toggle("active");

    }

    getBookmarkStorage(): bookmarkStoreGlobal { 
       return this.bookmarks.getBookmarkStorage();
    }

}