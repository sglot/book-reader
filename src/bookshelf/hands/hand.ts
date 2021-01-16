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

    getBookmarkStorage() {
        return this.bookmarks.getBookmarkStorage();
    }

    addBookmark(book: bookmarkStoreBook['slug'], slug: bookmark['slug'], link: string, title: string) {
        let bookmark = {
            "slug": slug,
            "title": title,
            "link": link
        };
        this.bookmarks.addBookmark(this.bookmarks.getBookmarksGlobalStorage(), book, bookmark);
    }

    deleteBookmark(book: bookmarkStoreBook['slug'], bookmark: bookmark['slug']) {

    }
}