import { BookRepositoryBase } from "./BookRepositoryBase";
import { bookList } from "../../books/bookList";
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';

export class FileSystemBookRepository extends BookRepositoryBase {
    private readonly ROOT = "C:\\Users\\sglot\\book-reader\\";
    private readonly PATH_PROD = this.ROOT + "/src/bookshelf/books/data/prod/";
    private readonly PATH_DEV = this.ROOT + "/src/bookshelf/books/data/dev/";
    private readonly PATH = dev?this.PATH_DEV:this.PATH_PROD;
    
    getBookList() {
        console.log("env====="+process.env.NODE_ENV);
        return bookList;
    }

    getBookById(id: number) {
        let list = this.getBookList();
        let bookPath = this.PATH + this.getSrcById(id, list);
        
        console.log(bookPath);
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
        
        console.log(bookPath);
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
        comp.html = this.extractHtmlFromSrc(comp.src, dev ? true : false, true);

        return comp;
    }

    actualizeSrc(dir: string, src: string) {
        return dir + src;
    }

    // importTextInsideComposition(composition: composition) {
    //     // console.log(composition.src);
    //     let comp = { ...composition };
    //     comp.html = this.extractHtmlFromSrc(composition.src);

    //     return comp;
    // }

    extractHtmlFromSrc(src: string, updateFile = false, formatFile = false) {
        let json = "";

        try {
            console.log(this.PATH);
            console.log(src);
            json = fs.readFileSync(path.resolve(this.PATH + src), 'utf8');
            console.log("pre!!!!!!!!");
            if (updateFile) {
                console.log("update start!!!!!!!");
                if (formatFile) {
                    json = json.replace(/\r?\n|\r/g, "<br>");
                }
                
                // const data = fs.writeFileSync(path.resolve(this.PATH_PROD + src), json);
                fse.outputFile(path.resolve(this.PATH_PROD + src), json, err => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('The file was saved!');
                    }
                });
                console.log("update finish!!!!!!!");
            }
        } catch (e) {
            // console.log(e);
        }
        // console.log("text =" + json + "end of text");
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
            ),
            dev ? true : false,
            false
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