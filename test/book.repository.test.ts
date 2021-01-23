import { Configurator } from "../src/bookshelf/hands/configurator";
import { BookRepositoryBase } from "../src/bookshelf/hands/book/repository/BookRepositoryBase";
import { FileSystemBookRepository } from "../src/bookshelf/hands/book/repository/FileSystemBookRepository";
var assert = require('assert');

describe('Book repository', () => {
    let configurator = new Configurator();
    let repository = configurator.getBookRepository();
    let bookList = repository.getBookList();
    const TEST_BOOK_ID = 2;
    const TEST_BOOK_SLUG = "Отладочный-сборник";
    const TEST_COMPOSITION_ID = -1000000;
    const TEST_NATIVE_SECTION_INDEX = 0;
    const TEST_COMPOSITE_SECTION_INDEX = 1;
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
        let compositions = repository.getCompositions(testBook.sections[TEST_COMPOSITE_SECTION_INDEX], testBook);
        let SUT = compositions[0].id;
        assert.equal(-1000000, SUT);
    });


    it('Extract html from src', () => {
        let composition = BookRepositoryBase.nullComposition;
        composition.src = "testBook/test-composite-section/testCompositionText.html";
        let SUT = repository.extractHtmlFromSrc(composition.src);

        assert.equal(true, typeof SUT === 'string');
        assert.equal("<p><strong>", SUT);
    });

    it('Build Composition', () => {
        let compositions = repository.getCompositions(testBook.sections[TEST_COMPOSITE_SECTION_INDEX], testBook);
        
        let SUT = compositions[0];

        assert.equal("<p><strong>", SUT.html);
    });

    it('Actualize Src', () => {
        let SUT  = repository.actualizeSrc("testBook/", "testCompositionText.html");
        
        assert.equal("testBook/testCompositionText.html", SUT);
    });
    
    it('Types fields of compositions from test book composite section', () => {
        let compositions = repository.getCompositions(testBook.sections[TEST_COMPOSITE_SECTION_INDEX], testBook);

        assert.equal('number', typeof compositions[0].id);
        assert.equal('string', typeof compositions[0].title);
        assert.equal('string', typeof compositions[0].annotation);
        assert.equal('string', typeof compositions[0].date);
        assert.equal('string', typeof compositions[0].src);
        assert.equal('string', typeof compositions[0].type);
        assert.equal('string', typeof compositions[0].html);
        assert.equal(true, compositions.length > 0);
    });

    it('Get compositions from test book', () => {
        let compositions = repository.getCompositions(testBook.sections[TEST_COMPOSITE_SECTION_INDEX], testBook);

        let SUT = compositions[0];
        assert.equal("<p><strong>", SUT.html);

        SUT = compositions[1];
        assert.equal("<p>text1</p>", SUT.html);
    });

    it('Get native section', () => {
        let sections = repository.getSections(testBook);
        let nativeSection = sections[0];
        let SUT = nativeSection.compositions;
        // assert.equal("array", typeof SUT);
        assert.equal(0, SUT.length);

        let SUT2 = nativeSection.html;
        assert.equal("testHTML", SUT2);
        
    });
  
});