import type BookRepositoryBase from "./repository/BookRepositoryBase";
import { FileSystemBookRepository } from "./repository/FileSystemBookRepository";

export default class BookHand {
    constructor(
        protected repository: BookRepositoryBase
    ) {

    }
    
    static getHand() {
        return new BookHand(new FileSystemBookRepository());
    }
    
    getBookById(id: number) {
        return this.repository.getBookById(id);
    }

    getBook(slug: string) {
        return this.repository.getBookBySlug(slug);
    }

    getBookList() {
        return this.repository.getBookList();
    }
}