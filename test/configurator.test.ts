import { Configurator } from "../src/bookshelf/hands/configurator";
import BookmarkRepositoryBase from "../src/bookshelf/hands/bookmark/repository/BookmarkRepositoryBase";
import BookRepositoryBase from "../src/bookshelf/hands/book/repository/BookRepositoryBase";
import { FormatBase } from "../src/bookshelf/hands/format/FormatBase";
import FormatFileSystemBookBuilder from "../src/bookshelf/hands/format/builder/FormatFileSystemBookBuilder";
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

    it('Get format Builder', () => {
        let SUT = configurator.getFormatBuilder();

        assert.equal(true, SUT instanceof FormatFileSystemBookBuilder);
    });

    it('Get Format', () => {
        let SUT = configurator.getFormat();

        assert.equal(true, SUT instanceof FormatBase);
    });
    
});