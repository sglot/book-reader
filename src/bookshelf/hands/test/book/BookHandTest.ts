import BookHand from "../../book/bookHand";
import type BookBuilderBase from "../../book/builder/BookBuilderBase";
import type BookRepositoryBase from "../../book/repository/BookRepositoryBase";
import { FileSystemBookRepository } from "../../book/repository/FileSystemBookRepository";
import { FSBookBuilderTest } from "./builder/FSBookBuilderTest";

export default class BookHandTest extends BookHand {
    constructor(
        protected repository: BookRepositoryBase,
        private builder: BookBuilderBase
    ) {
        super(repository);
    }

    static getHand() {
        return new BookHandTest(new FileSystemBookRepository(), new FSBookBuilderTest());
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
}