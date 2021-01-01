import { Configurator } from "../bookshelf/hands/configurator";
import { Hand } from "../bookshelf/hands/hand";
var assert = require('assert');

describe('Hand', () => {
    let configurator = new Configurator();
    let hand = new Hand(configurator.getBookRepository());

    it('Get first book', () => {
        let SUT = hand.getBook(1);

        assert.equal(true, typeof SUT === 'object');
    });

    it('Get list of books', () => {
        let SUT = hand.getBookList();

        // console.log(SUT);
        assert.equal(true, typeof SUT === 'object');
    });

    
});