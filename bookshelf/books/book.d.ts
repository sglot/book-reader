type bookList = [...
    {
        id:     number,
        name:   string
        scr:    string
    }
]

type book = {
    id:     number,
    name:   string,
    author: string,
    compositions: [...composition]
}

type composition = {
    id: number,
    name: string,
    annotation: string,
    date: string,
    type: compositionType
}

type compositionType = "poem" | "prose" | "annotation" 