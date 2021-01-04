import { BookRepositoryBase } from "./BookRepositoryBase";
import { bookList } from "../../books/bookList";
import fs from 'fs';
import path from 'path';

export class FileSystemBookRepository extends BookRepositoryBase {
    private readonly ROOT = "C:\\Users\\sglot\\book-reader\\";
    private readonly PATH = this.ROOT + "/src/bookshelf/books/data/";

    // private readonly fs = require('fs');
    // private readonly path = require('path');

    getBookList() {
        return bookList;
    }

    getBook(id: number) {
        let list = this.getBookList();
        let bookPath = this.PATH + this.getSrcById(id, list);
        
        console.log(bookPath);
        // let json = require(bookPath); 
        let json = fs.readFileSync(path.resolve(bookPath), 'utf8')
        console.log(json);
        return JSON.parse(json) as book;
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
        composition = this.buildComposition(composition, book);

        return { ...composition };
    }

    buildComposition(composition: composition, book: book) {
        let comp = this.actualizeSrc(book.dir, composition);
        comp = this.importTextInsideComposition(comp);

        return comp;
    }

    actualizeSrc(dir: string, composition: composition) {
        // console.log("composition = ", composition);
        let comp = { ...composition };
        comp.src = dir + composition.src;
        return comp;
    }

    importTextInsideComposition(composition: composition) {
        // console.log(composition.src);
        let comp = { ...composition };
        comp.text = this.extractTextFromSrc(composition);

        return comp;
    }

    extractTextFromSrc(composition: composition) {
        let json = "";

        try {
            json = fs.readFileSync(path.resolve(this.PATH + composition.src), 'utf8');
        } catch (e) {
            // console.log(e);
        }
        // console.log("text =" + json + "end of text");
        return json;
    }

    getCompositions(book: book) {
        if (book.compositions == []) {
            return [this.nullComposition];
        }

        let index, len;
        let list = [ ...book.compositions ];
        for (index = 0, len = list.length; index < len; ++index) {
            list[index] = this.buildComposition(list[index], book);
        }

        return list;
    }

    buildCompositions(book: book) {
        
    }
    
}