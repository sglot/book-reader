import type { BookRepositoryBase } from "./repository/BookRepositoryBase";
import type { FileSystemBookRepository } from "./repository/FileSystemBookRepository";

export class Hand {
    constructor(
        private repository: BookRepositoryBase | FileSystemBookRepository
    ) {

    }
    
    getBook(id: number) {
        return this.repository.getBook(id);
    }

    getBookList() {
        return [
            {
                "id": 1,
                "name": "Возвращение к Sолнцу",
                "src": "./Возвращение_к_Sолнцу.json"
            },
            {
                "id": 2,
                "name": "Книга 2",
                "src": "./book2.json"
            }
        ];
    }
}