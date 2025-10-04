import { useQuery } from "@tanstack/react-query"
import Banner from "../../components/Banner"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import PrivacyContentSection from "./PrivacyContentSection"
import { getPrivacyPolicy, GetPrivacyPolicyResponse } from "../../api/fns"

const PrivacyPolicy: React.FC = () => {
    useDocumentTitle("Privacy Policy | AltBuilda")
    const { data, isLoading } = useQuery<GetPrivacyPolicyResponse>({
        queryFn: getPrivacyPolicy,
        queryKey: ["privacyPolicy"]
    })

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <Banner title="Privacy Policy" page="CURRENT AS OF 27TH SEPTEMBER, 2025" />
                    {
                        isLoading && (
                            <div className="flex justify-center items-center min-h-50 md:min-h-100">
                                <span className="loading loading-spinner loading-xl text-primary justify-self-center self-center"></span>
                            </div>
                        )
                    }
                    {
                        data && <PrivacyContentSection document={data.result} />
                    }
                </div>
            </main>
        </>
    )
}

export default PrivacyPolicy