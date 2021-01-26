import { FormatFileSystemBookRepository } from "./FormatFileSystemBookRepository";

export class ExportBookRepository extends FormatFileSystemBookRepository {

    buildSection(sectionIndex: number, book: book) {
        let section = book.sections[sectionIndex];

        section.html = this.extractHtmlFromSrc(
            this.actualizeSrc(
                book.dir,
                section.slug + "/" + section.slug + ".html"
            )
        );

        let data = section.html;

        if (!section.format || !section.format.includes('no-newline')) {
            data = this.formatData(data, "");
            section.html = data;
        }

        section.compositions = this.getCompositions(section, book);

        return section;
    }

    buildComposition(composition: composition, dir: string) {
        let comp = { ...composition };
        comp.html = this.extractHtmlFromSrc(this.actualizeSrc(dir, comp.src));
        comp.html = this.formatData(comp.html, "");

        return comp;
    }
 }