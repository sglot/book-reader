type bookList = bookShortForm[]

type bookShortForm = {
    id:     number,
    title:  string,
    slug:   string,
    src:    string
}

type book = {
    id:             number,
    title:          string,
    author:         string,
    dir:            string,
    sections:       section[]
}

type section = {
    title:          string,
    slug:           string,
    html:           string,
    compositions:   composition[],
    format?:        string
}

type composition = {
    id:         number,
    slug:       string,
    title:      string,
    annotation: string,
    date:       string,
    type:       compositionType,
    src:        string,
    html:       string
}

type compositionType = "poem" | "prose" | "annotation" 

type bookmarkStoreGlobal = bookmarkStoreBook[];

type bookmarkStoreBook = {
    slug: book.slug,
    bookmarks: bookmark[]
}

type bookmark = {
    slug: composition.slug,
    link: string
}