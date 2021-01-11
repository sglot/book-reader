import { Configurator } from "../src/bookshelf/hands/configurator";
import Hand from "../src/bookshelf/hands/hand";
import { BookmarkRepositoryBase } from "../src/bookshelf/hands/repository/BookmarkRepositoryBase";
import { BookRepositoryBase } from "../src/bookshelf/hands/repository/BookRepositoryBase";
import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
var assert = require('assert');

describe('convert.html', () => {
    let configurator = new Configurator();
    let hand = configurator.getHand();
    const TEST_BOOK_SLUG = "Отладочный-сборник";


    it('333', () => {

        let BookList = hand.getBookList();
        console.log("book=", BookList);
        let lengthBookList = BookList.length;
        let indexBook = 0;
        for (indexBook; indexBook < BookList.length;) {

            let Book = BookList[indexBook];
            let objectBook = hand.getBookById(Book.id);

            // fs.copyFile("C:\\Users\\sglot\\book-reader\\" + "/src/bookshelf/books/data/dev/" + Book.src,
            // "C:\\Users\\sglot\\book-reader\\" + "/src/bookshelf/books/data/prod/" + Book.src,
            // fs.constants.COPYFILE_FICLONE_FORCE, (err) => {
            //     if (err) {
            //         console.log("Error Found:", err);
            //     }
            // });

            let json = fs.readFileSync(path.resolve("C:\\Users\\sglot\\book-reader\\" +"/src/bookshelf/books/data/dev/" + Book.src), 'utf8');
                console.log("update start!!!!!!!");
                // json = json.replace(/\r?\n|\r/g, "<br>");
                // const data = fs.writeFileSync(path.resolve(this.PATH_PROD + src), json);
                fse.outputFile(path.resolve("C:\\Users\\sglot\\book-reader\\" +"/src/bookshelf/books/data/prod/" + Book.src), json, err => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('The file was saved!');
                    }
                });
                console.log("update finish!!!!!!!");

            console.log("book=", Book.src);

            indexBook++;
        }

        

        assert.equal(lengthBookList, indexBook);

    });

});
