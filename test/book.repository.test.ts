import { Configurator } from "../bookshelf/hands/configurator";
import { FileSystemBookRepository } from "../bookshelf/hands/repository/FileSystemBookRepository";
var assert = require('assert');

describe('Book repository', () => {
    let configurator = new Configurator();

    it('Get file system book repository', () => {
        let SUT = configurator.getBookRepository();

        assert.equal(true, SUT instanceof FileSystemBookRepository);
    });
  
});