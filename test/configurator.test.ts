import { Configurator } from "../src/bookshelf/hands/configurator";
import { BookmarkRepositoryBase } from "../src/bookshelf/hands/bookmark/repository/BookmarkRepositoryBase";
import { BookRepositoryBase } from "../src/bookshelf/hands/book/repository/BookRepositoryBase";
import { FormatFileSystemBookRepository } from "../src/bookshelf/hands/format/repository/FormatFileSystemBookRepository";
import { FormatBase } from "../src/bookshelf/hands/format/FormatBase";
var assert = require('assert');

describe('Configurator', () => {
    let configurator = new Configurator();

    it('Get book repository', () => {
        let SUT = configurator.getBookRepository();

        assert.equal(true, SUT instanceof BookRepositoryBase);
    });

    it('Get bookmark repository', () => {
        let SUT = configurator.getBookmarkRepository();

        assert.equal(true, SUT instanceof BookmarkRepositoryBase);
    });

    it('Get format repository', () => {
        let SUT = configurator.getFormatRepository();

        assert.equal(true, SUT instanceof BookRepositoryBase);
        assert.equal(true, SUT instanceof FormatFileSystemBookRepository);
    });

    it('Get Format', () => {
        let SUT = configurator.getFormat();

        assert.equal(true, SUT instanceof FormatBase);
    });
    
});