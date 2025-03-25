import { ReactNode } from "react";
import signVector from "../../assets/sign-vector.png"
import offeringsImage from "../../assets/offeringimage.png"
import offeringsImageDark from "../../assets/offerings-image-dark.png"
import { BusinessMangementIcon, CardsIcon, FinancialSoulutionIcon } from "../../components/OfferSectionIcons";
import useThemeContext from "../../hooks/useThemeContext";
import ActionButton from "../../components/ActionButton";

interface OfferCardProps {
    Icon: React.ElementType
    title: string
    children: ReactNode
}

const OfferCard: React.FC<OfferCardProps> = ({ Icon, title, children }) => {

    return (
        <>
            <div className="flex flex-row gap-8">
                <div className="flex">
                    <div className="bg-primary p-3 rounded-lg size-fit">
                        <Icon size={6} />
                    </div>
                </div>

                <div className="card text-primary-content w-104">
                    <div className="card-body p-0 text-secondary gap-3 font-medium">
                        <h2 className="card-title text-2xl">{title}</h2>

                        <p>{children}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const OfferSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="w-full bg-neutral border-9 border-dashed border-secondary border-b-0 p-20">
                <div className="flex flex-col gap-6 text-center text-secondary items-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">What We Offer</h3>

                    <p className="md:text-lg">Your All-in-One Business Solution</p>

                    <img src={signVector} alt="Sign" className="w-43" />
                </div>

                <div className="flex flex-row justify-between mt-20">
                    <div className="flex flex-col gap-8">
                        <OfferCard Icon={BusinessMangementIcon} title="Business Management Tools">
                            Streamline your daily operations with our suite of tools. From automated invoicing and tax compliance support to financial tracking, gain real-time insights and make data-driven decisions.
                        </OfferCard>

                        <OfferCard Icon={FinancialSoulutionIcon} title="Financial Solution and Compliance">
                            Manage your finances effortlessly. Altbuida provides integrated financial tools, tax compliance assistance, and subscription-based financial services to help you stay on top of your cash flow and regulatory obligations.
                        </OfferCard>

                        <OfferCard Icon={CardsIcon} title="Networking and Business Growth">
                            Connect and collaborate with other entrepreneurs, potential partners, and industry experts in our networking hub. Access mentorship, funding opportunities, and valuable collaborations to fuel your business growth.
                        </OfferCard>
                    </div>

                    <figure className="w-165">
                        <img src={theme == "dark" ? offeringsImageDark : offeringsImage} alt="What we offer" />
                    </figure>
                </div>

                <div className="flex flex-row justify-center my-29">
                    <ActionButton to="" filled shrink>Explore our Features</ActionButton>
                </div>
            </section>
        </>
    )
}

export default OfferSection;