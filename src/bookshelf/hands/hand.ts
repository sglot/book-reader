import { Configurator } from "./configurator";
import type { BookRepositoryBase } from "./repository/BookRepositoryBase";

export default class Hand {
    constructor(
        private books: BookRepositoryBase
    ) {

    }
    
    getBookById(id: number) {
        return this.books.getBookById(id);
    }

    getBook(slug: string) {
        return this.books.getBookBySlug(slug);
    }

    getBookList() {
        return this.books.getBookList();
    }
}