import { BookmarkRepositoryBase } from "./BookmarkRepositoryBase";
import { bookList } from "../../books/bookList";

export default class LocalStorageBookmarkRepository extends BookmarkRepositoryBase {
    private readonly STORAGE_KEY = "BookmarkStorage";
    

    addBookmark(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark) {
        let store = this.add(storage, book, bookmark);
        this.save(store);
    }

    add(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark) {
        let index = this.getPackIndex(storage, book);

        if (index < 0) {

            if (storage === BookmarkRepositoryBase.nullBookmarkStoreGlobal) {
                storage = [];
            }

            let pack = BookmarkRepositoryBase.nullBookmarkStoreBook;
            pack.slug = book;
            pack.title = this.getBookTitleBySlug(book);
            pack.bookmarks = [];
            index = storage.length;
            storage[index] = pack;
            console.log(storage[index]);
        }

        storage[index].bookmarks.push(bookmark);

        return storage;
    }

    getPackByBookSlug(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug']) {
        let index = this.getPackIndex(storage, book);

        if (index < 0) {
            return [];
        }

        return storage[index].bookmarks;
    }

    hasBookmark(pack: bookmark[] | bookmarkStoreBook[], slug: string) {
        console.log(pack);
        if (typeof pack !== 'object') {
            return false;
        }

        for(var i = pack.length - 1; i >= 0; i--) {
            if(pack[i].slug === slug) {
                pack.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    

    deleteBookmark(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark['slug']) {
        let store = this.delete(storage, book, bookmark);
        this.save(store);
    }

    delete(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark['slug']) {
        let packIndex = this.getPackIndex(storage, book);
        let bookmarkIndex = this.getBookmarkIndex(storage[packIndex], bookmark);

        if (bookmarkIndex < 0) {
            return storage;
        }

        storage[packIndex].bookmarks.splice(bookmarkIndex, 1);

        return storage;
    }

    

    getBookmarksGlobalStorage(): bookmarkStoreGlobal {
        return BookmarkRepositoryBase.nullBookmarkStoreGlobal;
    }

    getBookmarkStorage(): bookmarkStoreGlobal {
        let storage = localStorage.getItem(this.STORAGE_KEY);

        if ( typeof storage === 'string' && storage.length > 0) {
            return JSON.parse(storage) as bookmarkStoreGlobal;
        }
        
        return BookmarkRepositoryBase.nullBookmarkStoreGlobal;
    }

    save(data) {
        localStorage.setItem(
            this.STORAGE_KEY,
            JSON.stringify(data)
        );
    }




    getPackIndex(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug']) {
        let index, len;
        for (index = 0, len = storage.length; index < len; ++index) {
            if (storage[index].slug === book) {
                return index;
            }
        }

        return -1;
    }

    getBookmarkIndex(pack: bookmarkStoreBook, slug: bookmark['slug']): number {
        let index, len;
        for (index = 0, len = pack.bookmarks.length; index < len; ++index) {
            if (pack.bookmarks[index].slug === slug) {
                return index;
            }
        }

        return -1;
    }

    getBookTitleBySlug(slug: bookShortForm['slug']) {
        let index, len;
        for (index = 0, len = bookList.length; index < len; ++index) {
            if (bookList[index].slug === slug) {
                return bookList[index].title;
            }
        }
    }

    // for svelte
    toggleBookmark(event) {
		let bm = event.currentTarget as HTMLElement

		if (bm.classList.contains('active')) {
            this.deleteBookmark(
                this.getBookmarkStorage(), 
                bm.getAttribute('book-slug'), 
                bm.getAttribute('bookmark-slug')
            );

            bm.classList.toggle("active");
            
			return;
		}

        let bookmark = {
            "slug"  : bm.getAttribute('bookmark-slug'),
            "title" : bm.getAttribute('bookmark-title'),
            "link"  : bm.getAttribute('bookmark-link')
        };
            
        this.addBookmark(
            this.getBookmarkStorage(), 
            bm.getAttribute('book-slug'), 
            bookmark
        );

        bm.classList.toggle("active");

	}

}