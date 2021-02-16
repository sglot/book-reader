export default abstract class BookBuilderBase {
    abstract getCompositions(section: section, book: book): composition[];
    abstract getSections(book: book): section[];
    
}