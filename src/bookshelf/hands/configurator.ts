import { FormatFileSystem } from "./format/FormatFileSystem";
import Hand from "./book/bookHand";
import { FileSystemBookRepository } from "./book/repository/FileSystemBookRepository";
import { FormatFileSystemBookRepository } from "./format/repository/FormatFileSystemBookRepository";
import LocalStorageBookmarkRepository from "./bookmark/repository/LocalStorageBookmarkRepository";
import { TestLocalStorageBookmarkRepository } from "./test/repository/TestLocalStorageBookmarkRepository";

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
    
    getFormat() {
        return new FormatFileSystem(
            this.getFormatRepository(),
        );
    }

    getBookRepository() {
        return new FileSystemBookRepository();
    }

    getBookmarkRepository() {
        return new LocalStorageBookmarkRepository();
    }

    getTestBookmarkRepository() {
        return new TestLocalStorageBookmarkRepository();
    }

    getFormatRepository() {
        return new FormatFileSystemBookRepository();
    }

    // getConfig() { 
    //     return this.config;
    // }
}