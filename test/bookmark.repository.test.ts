import { Configurator } from "../src/bookshelf/hands/configurator";
import { BookmarkRepositoryBase } from "../src/bookshelf/hands/repository/BookmarkRepositoryBase";
import LocalStorageBookmarkRepository from "../src/bookshelf/hands/repository/LocalStorageBookmarkRepository";
var assert = require('assert');

describe('Bookmark repository', () => {
    let configurator = new Configurator();
    let repository = configurator.getTestBookmarkRepository();



    const TEST_BOOK_ID = 2;
    const TEST_BOOK_SLUG = "Отладочный-сборник";
    const TEST_COMPOSITION_ID = -1000000;
    const TEST_NATIVE_SECTION_INDEX = 0;
    const TEST_COMPOSITE_SECTION_INDEX = 1;
    // let testBookmarkStorage = repository.getBookById(TEST_BOOK_ID);

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

    let stubTestBookBookmarksAfterAdding = [
        {
            "slug": "testName",
            "title": "testName",
            "link": "/books/reader/Отладочный-сборник#testName",
        },
        {
            "slug": "testName1",
            "title": "testName1",
            "link": "/books/reader/Отладочный-сборник#testName1",
        },
        {
            "slug": "test",
            "title": "test",
            "link": "#testLink"
        }
    ];

    let stubBookmark = { "slug": "test", "title": "test", "link": "#testLink" };

    let stubBookmarkStorage = BookmarkRepositoryBase.nullBookmarkStoreGlobal;
    stubBookmarkStorage[0].slug = TEST_BOOK_SLUG;
    stubBookmarkStorage[0].title = "Отладочный сборник";
    stubBookmarkStorage[0].bookmarks = stubTestBookBookmarks;


    it('Get localstorage bookmark repository', () => {
        let SUT = repository;

        assert.equal(true, SUT instanceof LocalStorageBookmarkRepository);
    });

    it('Get all bookmarks of storage', () => {
        let SUT = repository.getBookmarkStorage();

        assert.equal(JSON.stringify(stubBookmarkStorage), JSON.stringify(SUT));
    });

    it('Add bookmark to book storage', () => {
        let stubEmpty = stubBookmarkStorage;
        stubEmpty[0].slug = TEST_BOOK_SLUG;
        stubEmpty[0].bookmarks = [stubBookmark];
        
        let SUT = repository.add(stubBookmarkStorage, TEST_BOOK_SLUG, stubBookmark);

        assert.equal(JSON.stringify(stubEmpty), JSON.stringify(SUT));
    });

    it('Delete bookmark', () => {
        let stubBookmarkStorage = BookmarkRepositoryBase.nullBookmarkStoreGlobal;
        stubBookmarkStorage[0].slug = TEST_BOOK_SLUG;
        stubBookmarkStorage[0].bookmarks = stubTestBookBookmarksAfterAdding;
        

        let SUT = repository.delete(stubBookmarkStorage, TEST_BOOK_SLUG, "test");

        stubBookmarkStorage[0].bookmarks = stubTestBookBookmarks;

        assert.equal(JSON.stringify(stubBookmarkStorage), JSON.stringify(SUT));
    });

    it('Get pack index of unexist pack', () => {
        let SUT = repository.getPackIndex(repository.getBookmarkStorage(), "unexist book slug");

        assert.equal(-1, SUT);
    });

    it('Get pack index of pack', () => {
        let SUT = repository.getPackIndex(repository.getBookmarkStorage(), TEST_BOOK_SLUG);

        assert.equal(0, SUT);
    });
});