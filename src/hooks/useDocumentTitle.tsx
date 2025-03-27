import { useEffect } from "react"

const useDocumentTitle: (Title: string) => void = title => {
    useEffect(() => {
        document.title = title
    }, [])
}

export default useDocumentTitle