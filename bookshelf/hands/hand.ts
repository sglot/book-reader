import type { BookRepositoryBase } from "./repository/BookRepositoryBase";

export class Hand {
    constructor(
        private repository: BookRepositoryBase
    ) {

    }
    
    getBook(id: number) {
        return this.repository.getBook(id);
    }

    getBookList() {
        return this.repository.getBookList();
    }
}