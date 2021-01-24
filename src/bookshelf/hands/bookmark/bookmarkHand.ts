import  { BookmarkRepositoryBase } from "./repository/BookmarkRepositoryBase";

export default class BookmarkHand {
    constructor(
        private bookmarks: BookmarkRepositoryBase
    ) {

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