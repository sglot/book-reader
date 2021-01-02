import { Configurator } from "../bookshelf/hands/configurator";
import { FileSystemBookRepository } from "../bookshelf/hands/repository/FileSystemBookRepository";
var assert = require('assert');

describe('Book repository', () => {
    let configurator = new Configurator();
    let repository = configurator.getBookRepository();
    let bookList = repository.getBookList();
    const TEST_BOOK_ID = 2;
    const TEST_COMPOSITION_ID = -1000000;
    let testBook = repository.getBook(TEST_BOOK_ID);

    it('Get file system book repository', () => {
        let SUT = repository;

        assert.equal(true, SUT instanceof FileSystemBookRepository);
    });




    it('Get book src by id', () => {
        assert.equal("testBook/testBook.json", repository.getSrcById(2, bookList));
    });

    it('Get book src by unexist in list id', () => {
        assert.equal("", repository.getSrcById(-1, bookList));
    });





    it('Get first composition from test book', () => {
        assert.equal(1, repository.getCompositionById(1, testBook).id);
    });

    it('Get unexist composition from test book', () => {
        assert.equal(repository.nullComposition.id, repository.getCompositionById(-1, testBook).id);
    });

    it('Extract text from src', () => {
        let composition = repository.getCompositionById(TEST_COMPOSITION_ID, testBook);
        let text = repository.extractTextFromSrc(composition);
        assert.equal(true, typeof text === 'string');
        assert.equal("<p><strong>", text);
    });
    
    it('Get compositions from test book', () => {
        let compositions = repository.getCompositions(testBook);

        assert.equal('number', typeof compositions[0].id);
        assert.equal(true, compositions.length > 0);
    });

    
  
});