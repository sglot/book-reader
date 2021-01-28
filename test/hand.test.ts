import BookRepositoryBase from "../src/bookshelf/hands/book/repository/BookRepositoryBase";
import BookHandTest from "../src/bookshelf/hands/test/book/BookHandTest";
var assert = require('assert');

describe('Hand', () => {
    let bookHand = BookHandTest.getHand();
    const TEST_BOOK_SLUG = "Отладочный-сборник";

    it('Get test book', () => {
        let SUT = bookHand.getBook(TEST_BOOK_SLUG);
        
        assert.equal(true, typeof SUT === 'object');
        assert.equal(2, SUT.id);
    });

    it('Get unexist book', () => {
        let SUT = bookHand.getBook('unexist_book');

        assert.equal(true, typeof SUT === 'object');
        assert.equal(BookRepositoryBase.nullBook, SUT);
    });

    it('Get test book by id', () => {
        let SUT = bookHand.getBookById(2);

        assert.equal(true, typeof SUT === 'object');
        assert.equal(2, SUT.id);
    });

    it('Get list of books', () => {
        let SUT = bookHand.getBookList();

        assert.equal(true, typeof SUT === 'object');
    });

});