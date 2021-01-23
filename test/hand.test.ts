import { Configurator } from "../src/bookshelf/hands/configurator";
import Hand from "../src/bookshelf/hands/book/bookHand";
import { BookmarkRepositoryBase } from "../src/bookshelf/hands/bookmark/repository/BookmarkRepositoryBase";
import { BookRepositoryBase } from "../src/bookshelf/hands/book/repository/BookRepositoryBase";
var assert = require('assert');

describe('Hand', () => {
    let configurator = new Configurator();
    let hand = configurator.getHand();
    const TEST_BOOK_SLUG = "Отладочный-сборник";

    it('Get test book', () => {
        let SUT = hand.getBook(TEST_BOOK_SLUG);

        assert.equal(true, typeof SUT === 'object');
    });

    it('Get unexist book', () => {
        let SUT = hand.getBook('unexist_book');

        assert.equal(true, typeof SUT === 'object');
        assert.equal(BookRepositoryBase.nullBook, SUT);
    });

    it('Get test book by id', () => {
        let SUT = hand.getBookById(2);

        assert.equal(true, typeof SUT === 'object');
        assert.equal(2, SUT.id);
    });

    it('Get list of books', () => {
        let SUT = hand.getBookList();

        assert.equal(true, typeof SUT === 'object');
        assert.equal(true, typeof SUT === 'object');
    });

    it('Get all bookmarks storage GLOBAL. Types', () => {
        let SUT = hand.getAllBookmarks();

        // console.log(SUT);
        assert.equal('object', typeof SUT);
        assert.equal('string', typeof SUT[0].slug);
        assert.equal('object', typeof SUT[0].bookmarks);
        assert.equal('string', typeof SUT[0].bookmarks[0].slug);
        assert.equal('string', typeof SUT[0].bookmarks[0].link);
    });

    it('Get empty STORAGE. Null object', () => {
        let SUT = hand.getAllBookmarks();

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