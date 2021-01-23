export abstract class BookRepositoryBase {
    abstract getBookById(id: number): book;
    abstract getBookBySlug(slug: string): book;
    abstract getBookList(): bookList;
    abstract getCompositions(section: section, book: book): composition[];
    abstract getSections(book: book): section[];

    public static readonly nullComposition: composition = {
        "id":               0,
        "title":            "",
        "slug":             "",
        "annotation":       "",
        "date":             "",
        "type":             "prose",
        "src":              "",
        "html":             ""
    };

    public static readonly nullSection: section = {
        "slug":             "",
        "title":            "",
        "html":             "",
        "compositions":     [BookRepositoryBase.nullComposition],
    };

    public static readonly nullBook: book = {
        "id":               0,
        "title":            "",
        "slug":             "",
        "author":           "",
        "dir":              "",
        "sections":         [BookRepositoryBase.nullSection],
    };

    
    
}