import type BookBuilderBase from "./builder/BookBuilderBase";
import type BookRepositoryBase from "./repository/BookRepositoryBase";

export default class BookHand {
    constructor(
        private repository: BookRepositoryBase,
        private builder: BookBuilderBase
    ) {

    }
    
    getBookById(id: number) {
        let book = this.repository.getBookById(id);
        book.sections = this.builder.getSections(book);
        return book;
    }

    getBook(slug: string) {
        let book = this.repository.getBookBySlug(slug);
        book.sections = this.builder.getSections(book);
        return book;
    }

    getBookList() {
        return this.repository.getBookList();
    }
}