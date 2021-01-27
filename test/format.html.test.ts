import FormatFileSystemBookBuilder from "../src/bookshelf/hands/format/builder/FormatFileSystemBookBuilder";

var assert = require('assert');

describe('format.html', () => {

    it('Format spaces', () => {
    
        let formatfilesystembookrepository = new FormatFileSystemBookBuilder();

        assert.equal(formatfilesystembookrepository.formatData("ф , ф, в,", ""), "ф, ф, в,");
        assert.equal(formatfilesystembookrepository.formatData("f , f", ""), "f, f");
        
        assert.equal(formatfilesystembookrepository.formatData("f  f f",""), "f f f");
        assert.equal(formatfilesystembookrepository.formatData("f          f  f     f", ""), "f f f f");
        
        assert.equal(formatfilesystembookrepository.formatData("f -- f",""), "f – f");
    });

});

