import { rm } from "fs";
import { FormatBase } from "./FormatBase";
import type { FormatFileSystemBookRepository } from "./repository/FormatFileSystemBookRepository";
import { rimraf } from "./utils/fs_utils";

export class FormatFileSystem extends FormatBase {
    constructor(
        private books: FormatFileSystemBookRepository,
    ) {
        super();
    }

    formatBook(id: number) {
        let book = this.books.getBookById(id);

        rimraf(this.books.PATH_finished + book.dir);
        
        book.sections = this.books.getSections(book);
        // index json file copy
        this.books.writeDataToProdDir(JSON.stringify(book), book.dir, book.dir.slice(0, -1) + ".json");

        return book;
    }
}