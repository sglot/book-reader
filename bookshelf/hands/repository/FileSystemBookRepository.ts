import { BookRepositoryBase } from "./BookRepositoryBase";

export class FileSystemBookRepository extends BookRepositoryBase {
    getBook(id: number) {
        return {
            id:     id,
            name:   "name",
            author: "a",
            compositions: []
        };
    };
}