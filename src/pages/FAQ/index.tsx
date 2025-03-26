import { useState } from "react"
import { FAQGroup, FAQGroups } from "../../data/FAQ"
import FAQBanner from "./FAQBanner"
import FAQGroupSection from "./FAQGroupSection"
import SelectedGroupSection from "./SelectedGroupSection"

const FAQ: React.FC = () => {
    const [displayedFAQGroups, setDisplayedFAQGroups] = useState<FAQGroup[]>(FAQGroups)
    const [selectedFAQGroup, setSelectedFAQGroup] = useState<FAQGroup>(displayedFAQGroups[0])

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <FAQBanner />
                    <FAQGroupSection FAQGroups={FAQGroups} />
                    <SelectedGroupSection selectedGroup={selectedFAQGroup} />
                </div>
            </main>
        </>
    )
}

export default FAQ