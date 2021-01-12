import { FormatFileSystem } from "./format/FormatFileSystem";
import Hand from "./hand";
import { FileSystemBookRepository } from "./repository/FileSystemBookRepository";
import { FormatFileSystemBookRepository } from "./repository/FormatFileSystemBookRepository";
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

    getFormatRepository() {
        return new FormatFileSystemBookRepository();
    }

    // getConfig() { 
    //     return this.config;
    // }
}