import { Configurator } from "../src/bookshelf/hands/configurator";
import BookRepositoryBase from "../src/bookshelf/hands/book/repository/BookRepositoryBase";
var assert = require('assert');

describe('Hand', () => {
    let configurator = new Configurator();
    let bookHand = configurator.getHand();
    const TEST_BOOK_SLUG = "Отладочный-сборник";

    it('Get test book', () => {
        let SUT = bookHand.getBook(TEST_BOOK_SLUG);

        assert.equal(true, typeof SUT === 'object');
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
        assert.equal(true, typeof SUT === 'object');
    });

    
});