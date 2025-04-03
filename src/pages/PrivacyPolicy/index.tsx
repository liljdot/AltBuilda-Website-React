import Banner from "../../components/Banner"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import PrivacyContentSection from "./PrivacyContentSection"

const PrivacyPolicy: React.FC = () => {
    useDocumentTitle("Privacy Policy | AltBuilda")

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <Banner title="Privacy Policy" page="CURRENT AS OF 27TH SEPTEMBER, 2025"/>
                    <PrivacyContentSection />
                </div>
            </main>
        </>
    )
}

export default PrivacyPolicy