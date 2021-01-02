export abstract class BookRepositoryBase {
    abstract getBook(id: number): book;
    abstract getBookList(): bookList;

    public nullComposition: composition = {
        "id":           0,
        "name":         "",
        "annotation":   "",
        "date":         "",
        "type":         "prose",
        "src":          "",
        "text":         ""
    };
}