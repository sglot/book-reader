import { BookRepositoryBase } from "./BookRepositoryBase";
import { bookList } from "../../books/bookList";
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
import { FileSystemBookRepository } from "./FileSystemBookRepository";
const mode = process.env.NODE_ENV || 'production';
const dev = mode === 'development';

export class FormatFileSystemBookRepository extends FileSystemBookRepository {
    public readonly PATH_finished = this.ROOT + "/src/bookshelf/books/data/finished/";    
    public readonly PATH_original = this.ROOT + "/src/bookshelf/books/data/original/"; 
    protected readonly PATH = this.ROOT + "/src/bookshelf/books/data/original/"; 

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
        let section = book.sections[sectionIndex];

        section.html = this.extractHtmlFromSrc(
            this.actualizeSrc(
                book.dir,
                section.slug + "/" + section.slug + ".html"
            )
        );

        let data = section.html;
        let dir = book.dir + section.slug + "/";
        let file = section.slug + ".html";

        if (section.format) {
            if (section.format.includes('no-index-file')) {
                file = "";
            }

        } 

        if (!section.format || !section.format.includes('no-newline')) {
            data = this.formatData(data, "");
            section.html = data;
        }

        this.writeDataToProdDir(data, dir, file);
        
        section.compositions = this.getCompositions(section, book);

        return section;
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


    buildComposition(composition: composition, dir: string) {
        let comp = { ...composition };
        // let src = this.actualizeSrc(dir, comp.src);
        comp.html = this.extractHtmlFromSrc(this.actualizeSrc(dir, comp.src));
        this.writeDataToProdDir(this.formatData(comp.html, ""), dir, comp.src);
        return comp;
    }

    writeDataToProdDir(data: string = "", dir: string, file: string = "") {
        // console.log("write data to prod start!!");
        fs.mkdirSync(path.resolve(this.PATH_finished + dir), { recursive: true });
        
        if (file == "") {
            return;
        }
        // console.log("outputFile to =" + path.resolve(this.PATH_finished + dir + file));
        fse.outputFile(path.resolve(this.PATH_finished + dir + file), data, err => {
            if (err) {
                console.log("writeSrcToProdDir ERROR = " + err);
                console.log("path to resolve = '" + this.PATH_finished + dir + "'");
            }
        });
        // console.log("write data to prod finish!!");
    }

    formatData(data: string, format: string) {
        data = data.replace(/\r?\n|\r/g, "<br>");
        data = data.replace(/\s,\s/g, ", ");
        data = data.replace(/\s{2,}/g, " ");
        data = data.replace(/--/g, "–");
        data = data.replace(/\s\?/g, "?");
        data = data.replace(/\s\!/g, "!");

        return data;
    }

    extractHtmlFromSrc(src: string) {
        let json = "";

        try {
            // console.log(this.PATH_original);
            // console.log(src);
            json = fs.readFileSync(path.resolve(this.PATH_original + src), 'utf8');
        } catch (e) {
            // console.log(e);
        }
        
        return json;
    }

    
    
    
}