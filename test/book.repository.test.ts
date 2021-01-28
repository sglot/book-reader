import { FileSystemBookRepository } from "../src/bookshelf/hands/book/repository/FileSystemBookRepository";
var assert = require('assert');

describe('Book repository', () => {
    let repository = new FileSystemBookRepository();
    let bookList = repository.getBookList();
    const TEST_BOOK_ID = 2;
    const TEST_BOOK_SLUG = "Отладочный-сборник";
    let testBook = repository.getBookById(TEST_BOOK_ID);

    it('Get file system book repository', () => {
        let SUT = repository;

        assert.equal(true, SUT instanceof FileSystemBookRepository);
    });



    it('Get book by slug', () => {
        assert.equal(JSON.stringify(testBook), JSON.stringify(repository.getBookBySlug(TEST_BOOK_SLUG)));
    });


    it('Get book src by id', () => {
        assert.equal("testBook/testBook.json", repository.getSrcById(2, bookList));
    });

    it('Get book src by unexist in list id', () => {
        assert.equal("", repository.getSrcById(-1, bookList));
    });
  
});