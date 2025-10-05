export interface TemplateBlogPost {
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
        links: {
            twitter?: string,
            linkedin?: string,
            facebook?: string
        }
    }
    date: Date
}

export interface BlogPost {
    "id": string
    "title": string
    "author": string
    "coverImageUrl": string
    "authorImageUrl": string
    "category": string
    "status": string
    "createdAt": string
    "updatedAt": string
    "publishedAt": string
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