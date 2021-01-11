export abstract class BookmarkRepositoryBase {
    abstract getBookmarksGlobalStorage(): bookmarkStoreGlobal;

    
    public static readonly nullBookmark: bookmark = {
        "slug":             "",
        "link":             "",
    };
    
    public static readonly nullBookmarkStoreBook: bookmarkStoreBook = {
        "slug":             "",
        "bookmarks":        [BookmarkRepositoryBase.nullBookmark],
    };

    public static readonly nullBookmarkStoreGlobal: bookmarkStoreGlobal = [
        BookmarkRepositoryBase.nullBookmarkStoreBook
    ];
    

    
    
}