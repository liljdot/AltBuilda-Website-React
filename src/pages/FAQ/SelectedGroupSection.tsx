import { FaRegQuestionCircle } from "react-icons/fa"
import { FAQGroup } from "../../data/FAQ"
import useThemeContext from "../../hooks/useThemeContext"
import { FAQ } from "../../types"
import { Link } from "react-router-dom"

interface Props {
    selectedGroup: FAQGroup
}

const AccordionItem: React.FC<{ FAQ: FAQ }> = ({ FAQ }) => {

    return (
        <div className="collapse collapse-plus border-b rounded-none text-secondary border-secondary px-0">
            <input type="radio" name="FAQs" />
            <div className="collapse-title font-semibold text-lg px-0">{FAQ.question}</div>
            <div className="collapse-content text-[1rem] px-0">{FAQ.answer}</div>
        </div>
    )
}

const SelectedGroupSection: React.FC<Props> = ({ selectedGroup }) => {
    const { theme } = useThemeContext()

    return (
        <>
            <section id="questions" className="bg-warning flex flex-col items-center pt-14 px-20 pb-43">
                <div className="flex flex-col gap-3 max-w-112 items-center">
                    <figure className="size-12">
                        {selectedGroup.icons ? <img src={theme == "dark" ? selectedGroup.icons.dark : selectedGroup.icons.light} alt="icon" className="size-full" /> : <FaRegQuestionCircle className="size-full text-primary" />}
                    </figure>

                    <h3 className="text-4xl text-center text-secondary font-semibold">{selectedGroup.name}</h3>
                </div>

                {/* accordion container*/}
                <div className="w-full flex flex-col gap-6 px-64 mt-16">
                    {selectedGroup.FAQs.map((faq, index) => <AccordionItem key={"question" + index} FAQ={faq}/>)}
                </div>

                <div className="w-full flex flex-col bg-neutral gap-8 p-8 mt-36 rounded-xl">
                    <div className="flex flex-col gap-2 items-center text-center text-secondary">
                        <h6 className="text-xl font-semibold">Still have questions?</h6>
                        <h6>Can’t find the answer you’re looking for? Please chat to our friendly team.</h6>
                    </div>

                    <div className="flex flex-row justify-center">
                        <Link to={"/contact"} className="btn btn-primary text-neutral">Get in touch</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SelectedGroupSection;