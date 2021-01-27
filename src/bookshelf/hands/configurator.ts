import { FormatFileSystem } from "./format/FormatFileSystem";
import BookHand from "./book/bookHand";
import { FileSystemBookRepository } from "./book/repository/FileSystemBookRepository";
import FormatFileSystemBookBuilder from "./format/builder/FormatFileSystemBookBuilder";
import LocalStorageBookmarkRepository from "./bookmark/repository/LocalStorageBookmarkRepository";
import { TestLocalStorageBookmarkRepository } from "./test/repository/TestLocalStorageBookmarkRepository";
import LocalStorageBookmarkHand from "./bookmark/LocalStorageBookmarkHand";
import ExportBookBuilder from "./format/builder/ExportBookBuilder";
import { FileSystemBookBuilder } from "./book/builder/FileSystemBookBuilder";

export class Configurator {
    // private config;

    // constructor() {
    //     this.config = require("../../../config.json");
    // }

    getHand() {
        return new BookHand(this.getBookRepository(), this.getBookBuilder());
    }

    getBookRepository() {
        return new FileSystemBookRepository();
    }

    getBookBuilder() {
        return new FileSystemBookBuilder();
    }


    ////////
    getBookmarkHand() {
        return new LocalStorageBookmarkHand(this.getBookmarkRepository());
    }


    getFormat() {
        return new FormatFileSystem(this.getBookRepository(), this.getFormatBuilder());
    }

    getFormatBuilder() {
        return new FormatFileSystemBookBuilder();
    }

    
    ////////
    getExport() {
        return new FormatFileSystem(this.getBookRepository(), this.getExportBuilder());
    }

    getExportBuilder() {
        return new ExportBookBuilder();
    }

    
    ////////
    getBookmarkRepository() {
        return new LocalStorageBookmarkRepository();
    }

    getTestBookmarkRepository() {
        return new TestLocalStorageBookmarkRepository();
    }

    
}