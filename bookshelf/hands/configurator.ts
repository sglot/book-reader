import { FileSystemBookRepository } from "./repository/FileSystemBookRepository";

export class Configurator {
    getBookRepository() {
        return new FileSystemBookRepository();
    }
}