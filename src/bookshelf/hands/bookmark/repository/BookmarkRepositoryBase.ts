export abstract class BookmarkRepositoryBase {

    abstract getPackByBookSlug(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug']): bookmark[];
    abstract hasBookmark(pack: bookmark[] | bookmarkStoreBook[], slug: string): boolean;
    abstract toggleBookmark(event: MouseEvent & {
        currentTarget: EventTarget & HTMLSpanElement;
    }): void;

    abstract getBookmarksGlobalStorage(): bookmarkStoreGlobal;
    abstract getBookmarkStorage(): bookmarkStoreGlobal;

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
        "title": "",
        "link": "",
    };

    public static readonly nullBookmarkStoreBook: bookmarkStoreBook = {
        "slug": "",
        "title": "",
        "bookmarks": [BookmarkRepositoryBase.nullBookmark],
    };

    public static readonly nullBookmarkStoreGlobal: bookmarkStoreGlobal = [
        BookmarkRepositoryBase.nullBookmarkStoreBook
    ];
    
}