import { BookmarkRepositoryBase } from "./BookmarkRepositoryBase";

export class LocalStorageBookmarkRepository extends BookmarkRepositoryBase {
    private readonly STORAGE_KEY = "BookmarkStorage";

    addBookmark(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark) {
        let store = this.add(storage, book, bookmark);
        this.save(store);
    }

    deleteBookmark(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark['slug']) {
        let store = this.delete(storage, book, bookmark);
        this.save(store);
    }


    

    getBookmarksGlobalStorage(): bookmarkStoreGlobal {
        return BookmarkRepositoryBase.nullBookmarkStoreGlobal;
    }

    getBookmarkStorage(): bookmarkStoreGlobal {
        let storage = localStorage.getItem(this.STORAGE_KEY);
        if (storage.length > 0) {
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


    add(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark) {
        let index = this.getPackIndex(storage, book);

        if (index < 0) {
            let bookmarks = BookmarkRepositoryBase.nullBookmarkStoreBook;
            bookmarks.slug = book;
            bookmarks.bookmarks = [];
            index = 0;
        }

        storage[index].bookmarks.push(bookmark);

        return storage;
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

    delete(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark['slug']) {
        let packIndex = this.getPackIndex(storage, book);
        let bookmarkIndex = this.getBookmarkIndex(storage[packIndex], bookmark);

        if (bookmarkIndex < 0) {
            return storage;
        }

        storage[packIndex].bookmarks.splice(bookmarkIndex, 1);

        return storage;
    }

}