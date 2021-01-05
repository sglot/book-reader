import { Configurator } from "../src/bookshelf/hands/configurator";
import { BookRepositoryBase } from "../src/bookshelf/hands/repository/BookRepositoryBase";
import { FileSystemBookRepository } from "../src/bookshelf/hands/repository/FileSystemBookRepository";
var assert = require('assert');

describe('Book repository', () => {
    let configurator = new Configurator();
    let repository = configurator.getBookRepository();
    let bookList = repository.getBookList();
    const TEST_BOOK_ID = 2;
    const TEST_BOOK_SLUG = "Отладочный_сборник";
    const TEST_COMPOSITION_ID = -1000000;
    let testBook = repository.getBookById(TEST_BOOK_ID);

    it('Get file system book repository', () => {
        let SUT = repository;

        assert.equal(true, SUT instanceof FileSystemBookRepository);
    });



    it('Get book by slug', () => {
        // console.log('****by slug = ', repository.getBookBySlug(TEST_BOOK_SLUG));
        // console.log('****by testBook = ', testBook);
        assert.equal(JSON.stringify(testBook), JSON.stringify(repository.getBookBySlug(TEST_BOOK_SLUG)));
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
        assert.equal(BookRepositoryBase.nullComposition.id, repository.getCompositionById(-1, testBook).id);
    });

    it('Extract text from src', () => {
        let composition = BookRepositoryBase.nullComposition;
        composition.src = "testBook/testCompositionText.html";
        let SUT = repository.extractTextFromSrc(composition);

        assert.equal(true, typeof SUT === 'string');
        assert.equal("<p><strong>", SUT);
    });

    it('Build Composition', () => {
        let SUT = repository.getCompositionById(TEST_COMPOSITION_ID, testBook);

        assert.equal("<p><strong>", SUT.text);
    });

    it('Actualize Src', () => {
        let composition = BookRepositoryBase.nullComposition;
        composition.src = "testCompositionText.html";
        
        composition = repository.actualizeSrc("testBook/", composition);
        let SUT = composition.src;
        
        assert.equal("testBook/testCompositionText.html", SUT);
    });
    
    it('Types fields of compositions from test book', () => {
        let compositions = repository.getCompositions(testBook);

        assert.equal('number', typeof compositions[0].id);
        assert.equal('string', typeof compositions[0].title);
        assert.equal('string', typeof compositions[0].annotation);
        assert.equal('string', typeof compositions[0].date);
        assert.equal('string', typeof compositions[0].src);
        assert.equal('string', typeof compositions[0].type);
        assert.equal('string', typeof compositions[0].text);
        assert.equal(true, compositions.length > 0);
    });

    it('Get compositions from test book', () => {
        let compositions = repository.getCompositions(testBook);

        let SUT = compositions[0];
        assert.equal("<p><strong>", SUT.text);

        SUT = compositions[1];
        assert.equal("<p>text1</p>", SUT.text);
    });

    
  
});