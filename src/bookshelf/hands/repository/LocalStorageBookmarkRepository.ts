import { BookmarkRepositoryBase } from "./BookmarkRepositoryBase";

export class LocalStorageBookmarkRepository extends BookmarkRepositoryBase {
    
    getBookmarksGlobalStorage(): bookmarkStoreGlobal {
        return BookmarkRepositoryBase.nullBookmarkStoreGlobal;
    }

}