import { useState } from "react"

const usePaginate: <T extends unknown>(items: T[], itemsPerPage: number) => [T[],  React.Dispatch<React.SetStateAction<number>>] = (items, itemsPerPage) => {

    const [pageNumber, setPageNumber] = useState<number>(1)
    const seenItems = (pageNumber - 1) * itemsPerPage
    const displayedItems = items.slice(seenItems, seenItems + itemsPerPage)

    return [displayedItems, setPageNumber]
}

export default usePaginate;