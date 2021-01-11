import { Configurator } from "./configurator";
import { BookmarkRepositoryBase } from "./repository/BookmarkRepositoryBase";
import type { BookRepositoryBase } from "./repository/BookRepositoryBase";

export default class Hand {
    constructor(
        private books: BookRepositoryBase,
        private bookmarks: BookmarkRepositoryBase
    ) {

    }
    
    getBookById(id: number) {
        let book = this.books.getBookById(id);
        book.sections = this.books.getSections(book);
        return book;
    }

    getBook(slug: string) {
        let book = this.books.getBookBySlug(slug);
        book.sections = this.books.getSections(book);
        return book;
    }

    getBookList() {
        return this.books.getBookList();
    }

    getBookmarksGlobalStorage() {
        return BookmarkRepositoryBase.nullBookmarkStoreGlobal;
    }

    addBookmark(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark['slug']) {

    }

    deleteBookmark(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug'], bookmark: bookmark['slug']) {

    }
}