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
    compositions:   composition[]
}

type composition = {
    id:         number,
    title:       string,
    annotation: string,
    date:       string,
    type:       compositionType,
    src:        string,
    text:       string
}

type compositionType = "poem" | "prose" | "annotation" 