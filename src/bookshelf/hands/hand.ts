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
        let book = this.books.getBookBySlug(slug);
        book.compositions = this.books.getCompositions(book);
        return book;
    }

    getBookList() {
        return this.books.getBookList();
    }
}