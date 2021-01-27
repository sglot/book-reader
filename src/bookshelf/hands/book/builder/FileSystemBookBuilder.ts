import BookRepositoryBase from "../repository/BookRepositoryBase";
import BookBuilderBase from "./BookBuilderBase";
import fs from 'fs';
import path from 'path';

export class FileSystemBookBuilder extends BookBuilderBase {
    protected readonly ROOT = "./";
    protected readonly PATH = this.ROOT + "src/bookshelf/books/data/finished/";

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
            json = fs.readFileSync(path.resolve(this.PATH + src), 'utf8');
        } catch (e) {
            // ignore
        }
        
        return json;
    }
    
}