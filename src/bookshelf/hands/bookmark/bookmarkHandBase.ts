export default abstract class BookmarkHandBase {
    abstract getBookmarkStorage(): bookmarkStoreGlobal;

    abstract getPackByBookSlug(storage: bookmarkStoreGlobal, book: bookmarkStoreBook['slug']): bookmark[];

    abstract hasBookmark(pack: bookmark[] | bookmarkStoreBook[], slug: string): boolean;

    abstract toggleBookmark(event: MouseEvent
        & {
            currentTarget: EventTarget & HTMLSpanElement;
        }
    ): void;


}