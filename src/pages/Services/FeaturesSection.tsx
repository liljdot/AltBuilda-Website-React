import featureImageRight from "../../assets/feature-image-right.png"
import featureImageLeft from "../../assets/feature-image-left.png"

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

interface FeatureProps {
    reverse?: boolean
    icon: string
    title: string
    content: string
    button?: {
        to: string
        text: string
    }
}

const Feature: React.FC<FeatureProps> = ({ reverse, icon, title, content, button }) => {
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
                    <img src={reverse ? featureImageLeft : featureImageRight} alt="Altbuilda on your computer" />
                </figure>

                {/* for mobile and small tablets  */}
                <figure className="md:hidden">
                    <img src={theme == "dark" ? iphoneImageDark : iphoneImage} alt="AltBuilda on your iphone" />
                </figure>
            </div>
        </>
    )
}

const FeaturesSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="bg-neutral flex flex-col gap-12 md:gap-24 py-17 md:py-24">
                <Feature
                    title="Email Newsletter"
                    content="Personalized industry insights & updates"
                    icon={theme == "dark" ? chatIconDark : chatIcon}
                    button={{ text: "Subscribe Now", to: "/blog#newsletter" }}
                />

                <Feature
                    reverse
                    title="Business Banking(AltPro)"
                    content="Sync with AltPro for seamless financial access"
                    icon={theme == "dark" ? altproIconDark : altproIcon}
                    button={{ text: "Open Your Account Today", to: "/404" }}
                />

                <Feature
                    title="Invoicing and receipt Generation"
                    content="Create, track and automate invoices"
                    icon={theme == "dark" ? invoiceIconDark : invoiceIcon}
                    button={{ text: "Create Invoices", to: "/404" }}
                />

                <Feature
                    reverse
                    title="POS Terminal Access(Wakeel)"
                    content="Apply & Track POS terminal status"
                    icon={theme == "dark" ? speedIconDark : speedIcon}
                    button={{ text: "Get Your POS", to: "/404" }}
                />

                <Feature
                    title="Credit Facility(Coming Soon)"
                    content="Flexible SME credit for business growth"
                    icon={theme == "dark" ? noteIconDark : noteIcon}
                    button={{ text: "Stay Updated", to: "/blog" }}
                />

                <Feature
                    reverse
                    title="Tax Management and Filing Support"
                    content="Easy tax calculation & Filing tools "
                    icon={theme == "dark" ? bookIconDark : bookIcon}
                    button={{ text: "Simplify Your Tax", to: "/404" }}
                />

                <Feature
                    title="Market Hub (Business Networking)"
                    content="Connect with verified SMEs and partners"
                    icon={theme == "dark" ? peopleIconDark : peopleIcon}
                    button={{ text: "Join the SME Community", to: "/404" }}
                />

                <Feature
                    reverse
                    title="Campaign and Content Tools"
                    content="Schedule and track digital marketing campaigns"
                    icon={theme == "dark" ? soundIconDark : soundIcon}
                    button={{ text: "Plan and Execute Campaigns", to: "/404" }}
                />

                <Feature
                    title="Sales and Revenue Insights"
                    content="Gain analytics on business performance "
                    icon={theme == "dark" ? chartIconDark : chartIcon}
                    button={{ text: "Analyze Your Business", to: "/404" }}
                />

                <Feature
                    reverse
                    title="Business Registration Support"
                    content="CAC guidance for new businesses"
                    icon={theme == "dark" ? buildingIconDark : buildingIcon}
                    button={{ text: "Start Your Business", to: "/404" }}
                />
            </section>
        </>
    )
}

export default FeaturesSection;