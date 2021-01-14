export abstract class BookmarkRepositoryBase {
    abstract getBookmarksGlobalStorage(): bookmarkStoreGlobal;

    abstract addBookmark(
        storage: bookmarkStoreGlobal,
        book: bookmarkStoreBook['slug'],
        bookmark: bookmark
    );

    abstract deleteBookmark(
        storage: bookmarkStoreGlobal,
        book: bookmarkStoreBook['slug'],
        bookmark: bookmark['slug']
    );


    public static readonly nullBookmark: bookmark = {
        "slug": "",
        "link": "",
    };

    public static readonly nullBookmarkStoreBook: bookmarkStoreBook = {
        "slug": "",
        "bookmarks": [BookmarkRepositoryBase.nullBookmark],
    };

    public static readonly nullBookmarkStoreGlobal: bookmarkStoreGlobal = [
        BookmarkRepositoryBase.nullBookmarkStoreBook
    ];




}