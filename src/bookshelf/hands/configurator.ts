import Hand from "./hand";
import { FileSystemBookRepository } from "./repository/FileSystemBookRepository";
import { LocalStorageBookmarkRepository } from "./repository/LocalStorageBookmarkRepository";

export class Configurator {
    // private config;

    // constructor() {
    //     this.config = require("../../../config.json");
    // }

    getHand() {
        return new Hand(
            this.getBookRepository(),
            this.getBookmarkRepository()
        );
    }
    
    getBookRepository() {
        return new FileSystemBookRepository();
    }

    getBookmarkRepository() {
        return new LocalStorageBookmarkRepository();
    }

    // getConfig() { 
    //     return this.config;
    // }
}