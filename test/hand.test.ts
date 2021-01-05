import { Configurator } from "../src/bookshelf/hands/configurator";
import Hand from "../src/bookshelf/hands/hand";
import { BookRepositoryBase } from "../src/bookshelf/hands/repository/BookRepositoryBase";
var assert = require('assert');

describe('Hand', () => {
    let configurator = new Configurator();
    let hand = new Hand(configurator.getBookRepository());
    const TEST_BOOK_SLUG = "Отладочный_сборник";

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

        // console.log(SUT);
        assert.equal(true, typeof SUT === 'object');
    });

    
});