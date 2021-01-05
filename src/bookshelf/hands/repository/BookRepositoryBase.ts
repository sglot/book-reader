export abstract class BookRepositoryBase {
    abstract getBookById(id: number): book;
    abstract getBookBySlug(slug: string): book;
    abstract getBookList(): bookList;
    abstract getCompositions(book: book): composition[];

    public static readonly nullComposition: composition = {
        "id":               0,
        "title":            "",
        "annotation":       "",
        "date":             "",
        "type":             "prose",
        "src":              "",
        "text":             ""
    };

    public static readonly nullBook: book = {
        "id":               0,
        "title":            "",
        "author":           "",
        "dir":              "",
        "compositions":     [BookRepositoryBase.nullComposition],
    };
    
}