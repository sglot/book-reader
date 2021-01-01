import { Configurator } from "../bookshelf/hands/configurator";
import { BookRepositoryBase } from "../bookshelf/hands/repository/BookRepositoryBase";
var assert = require('assert');

describe('Configurator', () => {
    let configurator = new Configurator();

    it('Get book repository', () => {
        let SUT = configurator.getBookRepository();

        assert.equal(true, SUT instanceof BookRepositoryBase);
    });
    
});