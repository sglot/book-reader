import BookHand from "../src/bookshelf/hands/book/bookHand";
import { FormatFileSystem } from "../src/bookshelf/hands/format/FormatFileSystem";
import { FormatFileSystemBookRepository } from "../src/bookshelf/hands/format/repository/FormatFileSystemBookRepository";
import ExportBookBuilder from "../src/bookshelf/hands/format/builder/ExportBookBuilder";
var assert = require('assert');

describe('export.book.json', () => {
    let bookHand = BookHand.getHand();
    let formatHand = new FormatFileSystem(
        new FormatFileSystemBookRepository(),
        new ExportBookBuilder()
    );

    it('Make one file and format all data from original directory and save to finished', () => {

        let bookList = bookHand.getBookList();
        let lengthbookList = bookList.length;
        let indexBook = 0;

        for (indexBook; indexBook < bookList.length;) {

            let bookData = bookList[indexBook];
            let exportedBook = formatHand.exportBook(bookData.id);
            console.log(exportedBook);

            indexBook++;
        }

        assert.equal(lengthbookList, indexBook);
    });

});
