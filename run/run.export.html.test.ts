import { Configurator } from "../src/bookshelf/hands/configurator";
var assert = require('assert');

describe('export.book.json', () => {
    let configurator = new Configurator();
    let bookHand = configurator.getHand();
    let formatHand = configurator.getExport();

    it('Make one file and format all data from original directory and save to finished', () => {

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
