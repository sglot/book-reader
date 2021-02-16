import BookRepositoryBase from "./BookRepositoryBase";
import { bookList } from "../../../books/bookList";
import fs from 'fs';
import path from 'path';

export class FileSystemBookRepository extends BookRepositoryBase {
    protected readonly ROOT = "./";
    protected readonly PATH = this.ROOT + "src/bookshelf/books/data/finished/";
    
    getBookList() {
        return bookList;
    }

    getBookById(id: number) {
        let list = this.getBookList();
        let bookPath = this.PATH + this.getSrcById(id, list);
        
        try {
            let json = fs.readFileSync(path.resolve(bookPath), 'utf8');
            return JSON.parse(json) as book;
        } catch (e) {
            // console.log(e);

            return BookRepositoryBase.nullBook;
        }
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

    getBookBySlug(slug: string) {
        let list = this.getBookList();
        let bookPath = this.PATH + this.getSrcBySlug(slug, list);

        try {          
            let json = fs.readFileSync(path.resolve(bookPath), 'utf8');
            
            return JSON.parse(json) as book;

        } catch (e) {
            // console.log(e);

            return BookRepositoryBase.nullBook;
        }
    }

    getSrcBySlug(slug: string, list: bookList) {
        let index, len;
        for (index = 0, len = list.length; index < len; ++index) {
            if (list[index].slug === slug) {
                return list[index].src;
            }
        }

        return "";
    }
    
}