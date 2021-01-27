import { FormatBase } from "./FormatBase";
import type { FileSystemBookRepository } from "../book/repository/FileSystemBookRepository";
import type FormatFileSystemBookBuilder from "./builder/FormatFileSystemBookBuilder";
import { rimraf } from "./utils/fs_utils";

export class FormatFileSystem extends FormatBase {
    constructor(
        private repository: FileSystemBookRepository,
        private builder: FormatFileSystemBookBuilder
    ) {
        super();
    }

    formatBook(id: number) {
        let book = this.repository.getBookById(id);

        rimraf(this.builder.PATH_finished + book.dir);
        
        book.sections = this.builder.getSections(book);
        // index json file copy
        this.builder.writeDataToProdDir(JSON.stringify(book), book.dir, book.dir.slice(0, -1) + ".json");

        return book;
    }
}