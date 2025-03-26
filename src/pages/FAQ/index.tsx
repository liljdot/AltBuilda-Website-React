import { FAQGroups } from "../../data/FAQ"
import FAQBanner from "./FAQBanner"
import FAQGroupSection from "./FAQGroupSection"

const FAQ: React.FC = () => {

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <FAQBanner />
                    <FAQGroupSection FAQGroups={FAQGroups} />
                </div>
            </main>
        </>
    )
}

export default FAQ