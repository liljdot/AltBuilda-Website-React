import useDocumentTitle from "../../hooks/useDocumentTitle"
import ContactBanner from "./ContactBanner"
import FormSection from "./FormSection"
import InfoSection from "./InfoSection"

const Contact: React.FC = () => {
    useDocumentTitle("Contact | Bold by ALT")

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <ContactBanner />
                    <FormSection />
                    <InfoSection />
                </div>
            </main>
        </>
    )
}

export default Contact