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

    getAllBookmarks() {
        return BookmarkRepositoryBase.nullBookmarkStoreGlobal;
    }

    addBookmark(book: bookmarkStoreBook['slug'], slug: bookmark['slug'], link: string) {
        let bookmark = {
            "slug": slug,
            "link": link
        };
        this.bookmarks.addBookmark(this.bookmarks.getBookmarksGlobalStorage(), book, bookmark);
    }

    deleteBookmark(book: bookmarkStoreBook['slug'], bookmark: bookmark['slug']) {

    }
}