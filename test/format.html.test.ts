import { FormatFileSystemBookRepository } from "../src/bookshelf/hands/format/repository/FormatFileSystemBookRepository";
var assert = require('assert');

describe('format.html', () => {

    it('Format spaces', () => {
    
        let formatfilesystembookrepository = new FormatFileSystemBookRepository();

        assert.equal(formatfilesystembookrepository.formatData("ф , ф, в,", ""), "ф, ф, в,");
        assert.equal(formatfilesystembookrepository.formatData("f , f", ""), "f, f");
        
        assert.equal(formatfilesystembookrepository.formatData("f  f f",""), "f f f");
        assert.equal(formatfilesystembookrepository.formatData("f          f  f     f", ""), "f f f f");
        
        assert.equal(formatfilesystembookrepository.formatData("f -- f",""), "f – f");
    });

});

