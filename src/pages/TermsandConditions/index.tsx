import { useQuery } from "@tanstack/react-query"
import Banner from "../../components/Banner"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import TermsContentSection from "./TermsContentSection"
import { getTermsAndConditions } from "../../api/fns"

const TermsandConditions: React.FC = () => {
    useDocumentTitle("T's & C's | Bold by ALT")
    const { data, isLoading } = useQuery({
        queryFn: getTermsAndConditions,
        queryKey: ["TermsAndConditions"]
    })

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <Banner title="Terms and Conditions" page="CURRENT AS OF 27TH SEPTEMBER, 2025" />
                    {
                        isLoading && (
                            <div className="flex justify-center items-center min-h-50 md:min-h-100">
                                <span className="loading loading-spinner loading-xl text-primary justify-self-center self-center"></span>
                            </div>
                        )
                    }
                    {
                        data && <TermsContentSection
                            document={data.result}
                        />
                    }
                </div>
            </main>
        </>
    )
}

export default TermsandConditions