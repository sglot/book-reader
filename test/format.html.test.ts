import { Configurator } from "../src/bookshelf/hands/configurator";
import Hand from "../src/bookshelf/hands/hand";
import { BookmarkRepositoryBase } from "../src/bookshelf/hands/repository/BookmarkRepositoryBase";
import { BookRepositoryBase } from "../src/bookshelf/hands/repository/BookRepositoryBase";
import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
import { FormatFileSystemBookRepository } from "../src/bookshelf/hands/repository/FormatFileSystemBookRepository";
var assert = require('assert');

describe('format.html', () => {
    let configurator = new Configurator();
    let hand = configurator.getHand();
    let format = configurator.getFormat();
    const TEST_BOOK_SLUG = "Отладочный-сборник";


    it('Format !!!', () => {
    
        let formatfilesystembookrepository = new FormatFileSystemBookRepository();

        assert.equal(formatfilesystembookrepository.formatData("ф , ф, в ,", ""), "ф, ф, в,");
        assert.equal(formatfilesystembookrepository.formatData("f  f f",""), "f f f");
        assert.equal(formatfilesystembookrepository.formatData("f          f  f     f",""), "f f f f");
    });

});

