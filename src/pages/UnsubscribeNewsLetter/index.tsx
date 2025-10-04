import { FiMail } from "react-icons/fi"
import UnsubscribeForm from "./UnsubscribeForm"

const UnsubscribeNewsLetter: React.FC = () => {

    return (
        <main className="p-0 bg-neutral w-full flex">
            <div className="max-w-450 mx-auto px-4 md:px-20 py-20">
                <div className="flex flex-col gap-8 p-6 md:p-8 bg-base-100 rounded-xl border border-info">
                    <div className="flex flex-col text-secondary">
                        <div className="flex size-14 p-3.5 justify-center items-center bg-base-100 border border-info rounded-lg">
                            <FiMail className="size-full" />
                        </div>

                        <h5 className="text-xl md:text-2xl font-medium mt-8 md:mt-0">
                            Unsubscribe from newsletter
                        </h5>
                    </div>

                    <UnsubscribeForm />
                </div>
            </div>
        </main>
    )
}

export default UnsubscribeNewsLetter