import type { BookRepositoryBase } from "./repository/BookRepositoryBase";

export default class BookHand {
    constructor(
        private books: BookRepositoryBase
    ) {

    }
    
    getBookById(id: number) {
        let book = this.books.getBookById(id);
        book.sections = this.books.getSections(book);
        return book;
    }

    getBook(slug: string) {
        let book = this.books.getBookBySlug(slug);
        book.sections = this.books.getSections(book);
        return book;
    }

    getBookList() {
        return this.books.getBookList();
    }
}