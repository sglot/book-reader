import BookHand from "../src/bookshelf/hands/book/bookHand";
import { FormatFileSystem } from "../src/bookshelf/hands/format/FormatFileSystem";
import { FormatFileSystemBookRepository } from "../src/bookshelf/hands/format/repository/FormatFileSystemBookRepository";
import FormatFileSystemBookBuilder from "../src/bookshelf/hands/format/builder/FormatFileSystemBookBuilder";
var assert = require('assert');

describe('format.html', () => {
    let bookHand = BookHand.getHand();
    let formatHand = new FormatFileSystem(
        new FormatFileSystemBookRepository(),
        new FormatFileSystemBookBuilder()
    );

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
