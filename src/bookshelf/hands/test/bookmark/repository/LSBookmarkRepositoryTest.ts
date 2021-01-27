import BookmarkRepositoryBase from "../../../bookmark/repository/BookmarkRepositoryBase";
import LocalStorageBookmarkRepository from "../../../bookmark/repository/LocalStorageBookmarkRepository";

export default class LSBookmarkRepositoryTest extends LocalStorageBookmarkRepository {

    getBookmarksGlobalStorage(): bookmarkStoreGlobal {
        return BookmarkRepositoryBase.nullBookmarkStoreGlobal;
    }

    getBookmarkStorage(): bookmarkStoreGlobal {
        let stubTestBookBookmarks = [
            {
                "slug": "testName",
                "title": "testName",
                "link": "/books/reader/Отладочный-сборник#testName",
            },
            {
                "slug": "testName1",
                "title": "testName1",
                "link": "/books/reader/Отладочный-сборник#testName1",
            }
        ];

        let stubBookmarkStorage = BookmarkRepositoryBase.nullBookmarkStoreGlobal;
        stubBookmarkStorage[0].slug = "Отладочный-сборник";
        stubBookmarkStorage[0].title = "Отладочный сборник";
        stubBookmarkStorage[0].bookmarks = stubTestBookBookmarks;
        return stubBookmarkStorage;
    }

    
}