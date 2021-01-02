import { BookRepositoryBase } from "./BookRepositoryBase";
import { bookList } from "../../books/bookList";

export class FileSystemBookRepository extends BookRepositoryBase {
    private readonly ROOT = "C:\\Users\\sglot\\book-reader\\";
    private readonly PATH = this.ROOT + "/bookshelf/books/data/";

    getBookList() {
        return bookList;
    }

    getBook(id: number) {
        let list = this.getBookList();
        let bookPath = this.PATH + this.getSrcById(id, list);
        
        console.log(bookPath);
        let json = require(bookPath); 
        console.log(json);
        return json as book;
    }

    getSrcById(id: number, list: bookList) {
        let index, len;
        for (index = 0, len = list.length; index < len; ++index) {
            if (list[index].id === id) {
                return list[index].src;
            }
        }

        return "";
    }

    findCompositionById(id: number, list: composition[]) {
        let index, len;
        for (index = 0, len = list.length; index < len; ++index) {
            if (list[index].id === id) {
                return list[index];
            }
        }

        return this.nullComposition;
    }
    
    getCompositionById(id: number, book: book) {
        let composition = this.findCompositionById(id, book.compositions);
        composition.src = book.dir + composition.src;
        console.log(composition.src);
        composition.text = this.extractTextFromSrc(composition);

        return composition;
    }

    extractTextFromSrc(composition: composition) {
        let json = "";
        // try {
        //     json = require(this.PATH + composition.src);
        // } catch (e) {
        //     console.log(e);
        // }

        var fs = require('fs');
        let path = require('path');
        try {
            // var filename = require.resolve(this.PATH + composition.src);
            json = fs.readFileSync(path.resolve(this.PATH + composition.src), 'utf8');
        } catch (e) {
            // console.log(e);
        }
        // console.log("text =" + json + "end of text");
        return json;
    }

    getCompositions(book: book) {
        let compositions = [];


        return [this.nullComposition];
    }

    
}