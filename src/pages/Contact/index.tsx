import ContactBanner from "./ContactBanner"
import FormSection from "./FormSection"

const Contact: React.FC = () => {

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <ContactBanner />
                    <FormSection />
                </div>
            </main>
        </>
    )
}

export default Contact