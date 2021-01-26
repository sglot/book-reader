import { FormatFileSystem } from "./format/FormatFileSystem";
import BookHand from "./book/bookHand";
import { FileSystemBookRepository } from "./book/repository/FileSystemBookRepository";
import { FormatFileSystemBookRepository } from "./format/repository/FormatFileSystemBookRepository";
import LocalStorageBookmarkRepository from "./bookmark/repository/LocalStorageBookmarkRepository";
import { TestLocalStorageBookmarkRepository } from "./test/repository/TestLocalStorageBookmarkRepository";
import LocalStorageBookmarkHand from "./bookmark/LocalStorageBookmarkHand";
import { ExportBookRepository } from "./format/repository/ExportBookRepository";

export class Configurator {
    // private config;

    // constructor() {
    //     this.config = require("../../../config.json");
    // }

    getHand() {
        return new BookHand(this.getBookRepository());
    }

    getBookmarkHand() {
        return new LocalStorageBookmarkHand(this.getBookmarkRepository());
    }

    getFormat() {
        return new FormatFileSystem(this.getFormatRepository());
    }

    getExport() {
        return new FormatFileSystem(this.getExportRepository());
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

    getExportRepository() {
        return new ExportBookRepository();
    }
}