export interface BlogPost {
    id: string
    image: string
    title: string
    subject: string
    body: {
        subtitle: string
        text: string
    } []
    conclusion?: string
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