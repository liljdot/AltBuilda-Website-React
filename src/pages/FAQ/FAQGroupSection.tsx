import { FaRegQuestionCircle } from "react-icons/fa"
import { FAQGroup } from "../../data/FAQ"
import useThemeContext from "../../hooks/useThemeContext"

interface FAQGroupTileProps {
    FAQGroup: FAQGroup
    selected?: boolean
    handleSelect: (group: FAQGroup) => void
}

interface FAQGroupSectionProps {
    FAQGroups: FAQGroup[]
    selectedGroup: FAQGroup
    handleSelect: (group: FAQGroup) => void
}

const FAQGroupTile: React.FC<FAQGroupTileProps> = ({ FAQGroup, selected, handleSelect }) => {
    const { theme } = useThemeContext()

    const handleGroupSelect = () => {
        document.getElementById("questions")?.scrollIntoView({ behavior: "smooth", block: "start" })
        handleSelect(FAQGroup)
    }

    return (
        <div onClick={handleGroupSelect} className="flex flex-col gap-5 items-center text-secondary hover:cursor-pointer hover:[&>p]:text-primary">
            <figure className="size-12">
                {FAQGroup.icons ? <img src={theme == "dark" ? FAQGroup.icons.dark : FAQGroup.icons.light} alt="icon" /> : <FaRegQuestionCircle className="size-full text-primary" />}
            </figure>

            <p className={`text-xl font-semibold text-center ${selected && "text-primary"}`}>{FAQGroup.name}</p>
        </div>
    )
}

const FAQGroupSection: React.FC<FAQGroupSectionProps> = ({ FAQGroups, selectedGroup, handleSelect }) => {

    return (
        <>
            <section className="bg-neutral pt-8 px-20 pb-17">
                {/* search container div  */}
                <div className="px-81">
                    <label className="input w-full bg-neutral">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input type="search" className="grow bg-ne" placeholder="Search" />
                    </label>
                </div>

                {/* tiles container div  */}
                <div className="grid grid-cols-3 gap-y-16 px-8 mt-12 pb-20">
                    {FAQGroups.map(group => <FAQGroupTile handleSelect={handleSelect} selected={group.name == selectedGroup.name} key={group.name} FAQGroup={group} />)}
                </div>
            </section>
        </>
    )
}

export default FAQGroupSection;