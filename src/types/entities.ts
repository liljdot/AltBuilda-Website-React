// export interface BlogPost {
//     id: string
//     image: string
//     title: string
//     subject: string
//     body: {
//         subtitle: string
//         text: string
//     } []
//     conclusion?: string
//     author: {
//         name: string
//         image?: string
//     }
//     date: Date
// }

export interface BlogPost {
    id: string
    image: string
    title: string
    subject: string
    body: BodyType[]
    conclusion?: BodyType[]
    action?: {
        text: string
        link: string
    }
    author: {
        name: string
        image?: string
    }
    date: Date
}

export interface FAQ {
    question: string
    answer: string
}

export type BodyType =
{ type: "SUBTITLE", content: string; } |
{ type: "PARAGRAPH", content: string; } |
{ type: "HEADING", content: string; } |
{ type: "ULIST", content: string[]; } |
{ type: "OLIST", content: string[]; } |
{ type: "LINEBREAK" }