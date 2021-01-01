// import * as Format from "../src/core/format";
// import { AdvancedSettingsRepository } from "../src/repository/AdvancedSettingsRepository";
import { Hand } from "../bookshelf/hands/hand";
var assert = require('assert');

describe('Hand', () => {
    it('Get first book', () => {
        let hand = new Hand();
        let SUT = hand.getBook(1);


        assert.equal(true, typeof SUT === 'object');
    });

    
});