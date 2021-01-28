import FormatFileSystemBookBuilder from "./FormatFileSystemBookBuilder";

export default class ExportBookBuilder extends FormatFileSystemBookBuilder {

    buildSection(sectionIndex: number, book: book) {
        let section = book.sections[sectionIndex];

        section.html = this.extractHtmlFromSrc(
            this.actualizeSrc(
                book.dir,
                section.slug + "/" + section.slug + ".html"
            )
        );

        if (section.format) {
            section.html = this.formatData(section.html, section.format);
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