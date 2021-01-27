import { Configurator } from "../src/bookshelf/hands/configurator";
import BookHandTest from "../src/bookshelf/hands/test/book/BookHandTest";
var assert = require('assert');

describe('format.html', () => {
    let configurator = new Configurator();
    let bookHand = BookHandTest.getHand();
    let formatHand = configurator.getFormat();

    it('Format all data from original directory and save to finished', () => {

        let bookList = bookHand.getBookList();
        let lengthbookList = bookList.length;
        let indexBook = 0;

        for (indexBook; indexBook < bookList.length;) {

            let bookData = bookList[indexBook];
            let formattedbook = formatHand.formatBook(bookData.id);
            console.log(formattedbook);
            indexBook++;
        }

        assert.equal(lengthbookList, indexBook);
    });

});
