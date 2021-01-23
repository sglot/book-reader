import { FormatBase } from "./FormatBase";
import type { FormatFileSystemBookRepository } from "./repository/FormatFileSystemBookRepository";
import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';

export class FormatFileSystem extends FormatBase {
    constructor(
        private books: FormatFileSystemBookRepository,
    ) {
        super();
    }

    formatBook(id: number) {
        let book = this.books.getBookById(id);

        book.sections = this.books.getSections(book);
        this.copyIndexFile(book.dir + "/" + book.dir.slice(0, -1) + ".json", book.dir);

        return book;
    }

    copyIndexFile(src: string, to: string) {
        let json = fs.readFileSync(path.resolve(this.books.PATH_original + src), 'utf8');
                
        console.log("update start!!!!!!!");
    
        fs.mkdirSync(
            path.resolve(this.books.PATH_finished + to),
            { recursive: true }
        );
        
        fse.outputFile(path.resolve(this.books.PATH_finished + src), json, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('The file was saved!');
            }
        });
    
    }
}