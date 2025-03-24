import StepsImage from "../../components/StepsImage"
import signVector from "../../assets/sign-vector.png"

const GettingStartedSection: React.FC = () => {

    return (
        <>
            <div className="flex flex-col items-center py-12 md:py-12.5">
                <div className="flex flex-col items-center gap-6 text-secondary text-center px-6.5 md:px-0">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Getting Started is Easy!</h1>

                    <p className="md:text-lg">Sign up, and start managing your business effortlessly with Altbuilda’s powerful tools.</p>

                    <img src={signVector} alt="Sign" width={172}/>
                </div>

                <div className="sm:mt-17">
                    <StepsImage />
                </div>
            </div>
        </>
    )
}

export default GettingStartedSection