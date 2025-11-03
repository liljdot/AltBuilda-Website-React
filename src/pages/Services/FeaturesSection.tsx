import featureImageRight from "../../assets/feature-image-right.png"
import featureImageLeft from "../../assets/feature-image-left.png"

import newsletterOnPhoneImage from "../../assets/newsletter-on-phone-image.png"

import chatIcon from "../../assets/chat-icon.png"
import chatIconDark from "../../assets/chat-icon-dark.png"

import altproIcon from "../../assets/altpro-icon.png"
import altproIconDark from "../../assets/altpro-icon-dark.png"

import invoiceIcon from "../../assets/invoice-icon.png"
import invoiceIconDark from "../../assets/invoice-icon-dark.png"

import speedIcon from "../../assets/speed-icon.png"
import speedIconDark from "../../assets/speed-icon-dark.png"

import noteIcon from "../../assets/note-icon.png"
import noteIconDark from "../../assets/note-icon-dark.png"

import bookIcon from "../../assets/book-icon.png"
import bookIconDark from "../../assets/book-icon-dark.png"

import peopleIcon from "../../assets/people-icon.png"
import peopleIconDark from "../../assets/people-icon-dark.png"

import soundIcon from "../../assets/sound-icon.png"
import soundIconDark from "../../assets/sound-icon-dark.png"

import chartIcon from "../../assets/chart-icon.png"
import chartIconDark from "../../assets/chart-icon-dark.png"

import buildingIcon from "../../assets/building-icon.png"
import buildingIconDark from "../../assets/building-icon-dark.png"

import iphoneImage from "../../assets/iphone-image.png"
import iphoneImageDark from "../../assets/iphone-image-dark.png"

import useThemeContext from "../../hooks/useThemeContext"
import { Link } from "react-router-dom"

interface FeatureCardProps {
    reverse?: boolean
    icon: string
    title: string
    content: string
    button?: {
        to: string
        text: string
    }
}

const FeatureCard: React.FC<FeatureCardProps> = ({ reverse, icon, title, content, button }) => {
    const { theme } = useThemeContext()

    return (
        <>
            <div className={`flex flex-col gap-10 md:gap-0 ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center px-5 md:px-0`}>
                <div className="w-full md:w-[53%] flex flex-col gap-6 text-secondary sm:px-14 lg:px-28">
                    <figure className="size-12">
                        <img src={icon} alt="icon" />
                    </figure>

                    <h4 className="text-xl xl:text-3xl font-medium">{title}</h4>

                    <p className="xl:text-xl">{content}</p>

                    {button && <Link to={button.to} className="btn btn-primary text-secondary p-6.5 rounded-full min-w-55 md:min-w-fit w-fit hover:scale-105 transition-all ease-in-out duration-500">{button.text}</Link>}
                </div>

                {/* hidden for mobile and small tablets  */}
                <figure className="hidden md:block md:w-[47%]">
                    <img src={reverse ? featureImageLeft : featureImageRight} alt="Bold by ALT on your computer" />
                </figure>

                {/* for mobile and small tablets  */}
                <figure className="md:hidden">
                    <img src={theme == "dark" ? iphoneImageDark : iphoneImage} alt="Bold by ALT on your iphone" />
                </figure>
            </div>
        </>
    )
}

const FeatureCardsSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="bg-neutral flex flex-col items-center gap-12 md:gap-24 px-38 py-17 md:py-24">
                <div className="card lg:card-side w-full xl:w-218">
                    <div className="card-body w-1/2 p-0 justify-center">
                        <div className="flex flex-col space-y-8">
                            <figure className="size-12">
                                <img src={theme == "dark" ? chatIconDark : chatIcon} />
                            </figure>

                            <h4 className="text-xl xl:text-3xl font-medium">Email Newsletter</h4>

                            <p className="xl:text-xl">
                                Personalized industry insights & updates
                            </p>

                            <Link to={"/blog#newsletter"} className="btn btn-primary text-secondary p-6.5 rounded-full min-w-55 md:min-w-fit max-w-67 hover:scale-105 transition-all ease-in-out duration-500">
                                Subscribe Now
                            </Link>
                        </div>
                    </div>
                    <figure className="w-1/2">
                        <img
                            src={newsletterOnPhoneImage}
                            alt="Newsletter"
                        />
                    </figure>

                </div>

                <FeatureCard
                    title="Email Newsletter"
                    content="Personalized industry insights & updates"
                    icon={theme == "dark" ? chatIconDark : chatIcon}
                    button={{ text: "Subscribe Now", to: "/blog#newsletter" }}
                />

                <FeatureCard
                    reverse
                    title="Business Banking(AltPro)"
                    content="Sync with AltPro for seamless financial access"
                    icon={theme == "dark" ? altproIconDark : altproIcon}
                />

                <FeatureCard
                    title="Invoicing and receipt Generation"
                    content="Create, track and automate invoices"
                    icon={theme == "dark" ? invoiceIconDark : invoiceIcon}
                />

                <FeatureCard
                    reverse
                    title="POS Terminal Access(Wakeel)"
                    content="Apply & Track POS terminal status"
                    icon={theme == "dark" ? speedIconDark : speedIcon}
                />

                <FeatureCard
                    title="Credit Facility(Coming Soon)"
                    content="Flexible SME credit for business growth"
                    icon={theme == "dark" ? noteIconDark : noteIcon}
                />

                <FeatureCard
                    reverse
                    title="Tax Management and Filing Support"
                    content="Easy tax calculation & Filing tools "
                    icon={theme == "dark" ? bookIconDark : bookIcon}
                />

                <FeatureCard
                    title="Market Hub (Business Networking)"
                    content="Connect with verified SMEs and partners"
                    icon={theme == "dark" ? peopleIconDark : peopleIcon}
                />

                <FeatureCard
                    reverse
                    title="Campaign and Content Tools"
                    content="Schedule and track digital marketing campaigns"
                    icon={theme == "dark" ? soundIconDark : soundIcon}
                />

                <FeatureCard
                    title="Sales and Revenue Insights"
                    content="Gain analytics on business performance "
                    icon={theme == "dark" ? chartIconDark : chartIcon}
                />

                <FeatureCard
                    reverse
                    title="Business Registration Support"
                    content="CAC guidance for new businesses"
                    icon={theme == "dark" ? buildingIconDark : buildingIcon}
                />
            </section>
        </>
    )
}

export default FeatureCardsSection;