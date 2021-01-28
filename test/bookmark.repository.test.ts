import BookmarkRepositoryBase from "../src/bookshelf/hands/bookmark/repository/BookmarkRepositoryBase";
import LocalStorageBookmarkRepository from "../src/bookshelf/hands/bookmark/repository/LocalStorageBookmarkRepository";
import LSBookmarkRepositoryTest from "../src/bookshelf/hands/test/bookmark/repository/LSBookmarkRepositoryTest";

var assert = require('assert');

describe('Bookmark repository', () => {
    const TEST_BOOK_SLUG = "Отладочный-сборник";
    
    let repository = new LSBookmarkRepositoryTest();

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



    it('Get all bookmarks storage GLOBAL. Types', () => {
        let SUT = repository.getBookmarkStorage();

        // console.log(SUT);
        assert.equal('object', typeof SUT);
        assert.equal('string', typeof SUT[0].slug);
        assert.equal('object', typeof SUT[0].bookmarks);
        assert.equal('string', typeof SUT[0].bookmarks[0].slug);
        assert.equal('string', typeof SUT[0].bookmarks[0].link);
    });

    it('Get empty STORAGE. Null object', () => {
        let SUT = repository.getBookmarkStorage();

        // console.log(SUT);
        assert.equal(JSON.stringify(BookmarkRepositoryBase.nullBookmarkStoreGlobal), JSON.stringify(SUT));
    });

    // it('Get bookmark storage BOOK. Null object', () => {
    //     let stubBookmarks = [BookmarkRepositoryBase.nullBookmark];
    //     let storage = {};
    //     let bookSlug = ""
    //     let SUT = hand.getBookmarksForBook(storage, bookSlug);

    //     assert.equal(JSON.stringify(stubBookmarks), JSON.stringify(SUT));
    // });
    
    // it('Add bookmark to storage BOOK', () => {
    //     let stubBookmarks = [BookmarkRepositoryBase.nullBookmark];
    //     let storage = {};
    //     let bookSlug = ""
    //     let SUT = hand.getBookmarksForBook(storage, bookSlug);


    //     assert.equal(JSON.stringify(stubBookmarks), JSON.stringify(SUT));
    // });
});