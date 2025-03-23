import signVector from "@/app/assets/sign-vector.png"
import Image from "next/image"
import StepsImage from "../StepsImage"

const GettingStartedSection: React.FC = () => {

    return (
        <>
            <div className="flex flex-col items-center py-12.5">
                <div className="flex flex-col items-center gap-6 text-secondary text-center">
                    <h1 className="text-5xl font-bold">Getting Started is Easy!</h1>

                    <p className="text-lg">Sign up, and start managing your business effortlessly with Altbuilda’s powerful tools.</p>

                    <Image src={signVector} alt="Sign" width={172}/>
                </div>

                <div className="mt-17">
                    <StepsImage />
                </div>
            </div>
        </>
    )
}

export default GettingStartedSection