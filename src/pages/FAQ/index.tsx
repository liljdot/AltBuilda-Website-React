import { useState } from "react"
import { FAQGroup, FAQGroups } from "../../data/FAQ"
import FAQBanner from "./FAQBanner"
import FAQGroupSection from "./FAQGroupSection"
import SelectedGroupSection from "./SelectedGroupSection"
import useDocumentTitle from "../../hooks/useDocumentTitle"

const FAQ: React.FC = () => {
    useDocumentTitle("FAQ | AltBuilda")
    const [displayedFAQGroups, setDisplayedFAQGroups] = useState<FAQGroup[]>(FAQGroups) // set selected displayed groups for search fn
    const [selectedFAQGroup, setSelectedFAQGroup] = useState<FAQGroup>()

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <FAQBanner />
                    <FAQGroupSection handleSelect={setSelectedFAQGroup} selectedGroup={selectedFAQGroup} FAQGroups={displayedFAQGroups} setFAQGroups={setDisplayedFAQGroups}/>
                    <SelectedGroupSection selectedGroup={selectedFAQGroup} />
                </div>
            </main>
        </>
    )
}

export default FAQ