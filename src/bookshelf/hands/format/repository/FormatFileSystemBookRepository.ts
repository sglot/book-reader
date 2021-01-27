import { FileSystemBookRepository } from "../../book/repository/FileSystemBookRepository";

export class FormatFileSystemBookRepository extends FileSystemBookRepository {
    protected readonly PATH = this.ROOT + "src/bookshelf/books/data/original/";
        
}