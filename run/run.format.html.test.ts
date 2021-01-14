import { Configurator } from "../src/bookshelf/hands/configurator";
var assert = require('assert');

describe('format.html', () => {
    let configurator = new Configurator();
    let hand = configurator.getHand();
    let format = configurator.getFormat();

    it('Format all data from original directory and save to finished', () => {

        let bookList = hand.getBookList();
        let lengthbookList = bookList.length;
        let indexBook = 0;

        for (indexBook; indexBook < bookList.length;) {

            let bookData = bookList[indexBook];
            let formattedbook = format.formatBook(bookData.id);
            console.log(formattedbook);
            indexBook++;
        }

        assert.equal(lengthbookList, indexBook);
    });

});
