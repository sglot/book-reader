import { BookRepositoryBase } from "./BookRepositoryBase";
import { bookList } from "../../../books/bookList";
import fs from 'fs';
import path from 'path';

export class FileSystemBookRepository extends BookRepositoryBase {
    protected readonly ROOT = "C:\\Users\\sglot\\book-reader\\";
    protected readonly PATH = this.ROOT + "/src/bookshelf/books/data/finished/";
    
    getBookList() {
        return bookList;
    }

    getBookById(id: number) {
        let list = this.getBookList();
        let bookPath = this.PATH + this.getSrcById(id, list);
        
        // console.log("(m) getBookById: " + bookPath);
        try {
            let json = fs.readFileSync(path.resolve(bookPath), 'utf8');

            return JSON.parse(json) as book;
        } catch (e) {
            console.log(e);

            return BookRepositoryBase.nullBook;
        }
    }

    getBookBySlug(slug: string) {
        let list = this.getBookList();
        let bookPath = this.PATH + this.getSrcBySlug(slug, list);
        
        // console.log(bookPath);
        try {
            let json = fs.readFileSync(path.resolve(bookPath), 'utf8');

            return JSON.parse(json) as book;
        } catch (e) {
            console.log(e);

            return BookRepositoryBase.nullBook;
        }
        
        
    }

    getSrcById(id: number, list: bookList) {
        let index, len;
        for (index = 0, len = list.length; index < len; ++index) {
            if (list[index].id === id) {
                return list[index].src;
            }
        }

        return "";
    }

    getSrcBySlug(slug: string, list: bookList) {
        let index, len;
        for (index = 0, len = list.length; index < len; ++index) {
            if (list[index].slug === slug) {
                return list[index].src;
            }
        }

        return "";
    }

    buildComposition(composition: composition, dir: string) {
        let comp = { ...composition };
        comp.src = this.actualizeSrc(dir, comp.src);
        comp.html = this.extractHtmlFromSrc(comp.src);

        return comp;
    }

    actualizeSrc(dir: string, src: string) {
        return dir + src;
    }

    extractHtmlFromSrc(src: string) {
        let json = "";

        try {
            // console.log(this.PATH);
            // console.log(src);
            json = fs.readFileSync(path.resolve(this.PATH + src), 'utf8');
        } catch (e) {
            // console.log(e);
        }
        
        return json;
    }

    getSections(book: book) {
        if (!book.sections || book.sections == [] || book.sections == undefined) {
            return [BookRepositoryBase.nullSection];
        }

        let sectionIndex, sectionsLen;
        for (sectionIndex = 0, sectionsLen = book.sections.length; sectionIndex < sectionsLen; ++sectionIndex) {
            book.sections[sectionIndex] = this.buildSection(sectionIndex, book);
        }

        return [...book.sections];
    }

    buildSection(sectionIndex: number, book: book) {
        book.sections[sectionIndex].html = this.extractHtmlFromSrc(
            this.actualizeSrc(
                book.dir,
                book.sections[sectionIndex].slug + "/" + book.sections[sectionIndex].slug + ".html"
            )
        );
        book.sections[sectionIndex].compositions = this.getCompositions(book.sections[sectionIndex], book);
        return book.sections[sectionIndex];
    }

    getCompositions(section: section, book: book) {
        if (!section.compositions || section.compositions == [] || section.compositions == undefined) {
            return [BookRepositoryBase.nullComposition];
        }

        let index, len;
        let list = [...section.compositions];
        let sectionSrc = this.actualizeSrc(book.dir, section.slug + "/" );
        for (index = 0, len = list.length; index < len; ++index) {
            list[index] = this.buildComposition(list[index], sectionSrc);
        }

        return list;
    }

    
    
}