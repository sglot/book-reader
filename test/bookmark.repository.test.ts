import { Configurator } from "../src/bookshelf/hands/configurator";
import { BookRepositoryBase } from "../src/bookshelf/hands/repository/BookRepositoryBase";
import { BookmarkRepositoryBase } from "../src/bookshelf/hands/repository/BookmarkRepositoryBase";
import { LocalStorageBookmarkRepository } from "../src/bookshelf/hands/repository/LocalStorageBookmarkRepository";
import { FileSystemBookRepository } from "../src/bookshelf/hands/repository/FileSystemBookRepository";
var assert = require('assert');

describe('Bookmark repository', () => {
    let configurator = new Configurator();
    let repository = configurator.getBookmarkRepository();
    let bookmarkStorage = repository.getBookmarksGlobalStorage();
    const TEST_BOOK_ID = 2;
    const TEST_BOOK_SLUG = "Отладочный-сборник";
    const TEST_COMPOSITION_ID = -1000000;
    const TEST_NATIVE_SECTION_INDEX = 0;
    const TEST_COMPOSITE_SECTION_INDEX = 1;
    // let testBookmarkStorage = repository.getBookById(TEST_BOOK_ID);

    it('Get localstorage bookmark repository', () => {
        let SUT = repository;

        assert.equal(true, SUT instanceof LocalStorageBookmarkRepository);
    });
});