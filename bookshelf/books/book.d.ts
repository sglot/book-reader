type bookList = bookShortForm[]

type bookShortForm = {
        id:     number,
        name:   string
        src:    string
    }

type book = {
    id:             number,
    name:           string,
    author:         string,
    dir:            string,
    compositions:   composition[]
}

type composition = {
    id:         number,
    name:       string,
    annotation: string,
    date:       string,
    type:       compositionType,
    src:        string,
    text:       string
}

type compositionType = "poem" | "prose" | "annotation" 