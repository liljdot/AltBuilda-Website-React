import Banner from "../../components/Banner"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import TermsContentSection from "./TermsContentSection"

const TermsandConditions: React.FC = () => {
    useDocumentTitle("T's & C's | AltBuilda")

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <Banner title="Terms and Conditions" page="CURRENT AS OF 27TH SEPTEMBER, 2025" />
                    <TermsContentSection />
                </div>
            </main>
        </>
    )
}

export default TermsandConditions