import newsletterOnPhoneImage from "../../assets/newsletter-on-phone-image.png"
import newsletterOnPhoneImageMobile from "../../assets/newsletter-on-phone-image-mobile.png"
import newsletterOnPhoneImageMobileDark from "../../assets/newsletter-on-phone-image-mobile-dark.png"

import altproImage from "../../assets/altpro-image.png"
import altproImageMobile from "../../assets/altpro-image-mobile.png"
import altproImageMobileDark from "../../assets/altpro-image-mobile-dark.png"
import altproImageDark from "../../assets/altpro-image-dark.png"

import invoiceImage from "../../assets/invoice-image.png"
import invoiceImageDark from "../../assets/invoice-image-dark.png"
import invoiceImageMobile from "../../assets/invoice-image-mobile.png"
import invoiceImageMobileDark from "../../assets/invoice-image-mobile-dark.png"

import taxImage from "../../assets/tax-image.png"
import taxImageDark from "../../assets/tax-image-dark.png"
import taxImageMobile from "../../assets/tax-image-mobile.png"
import taxImageMobileDark from "../../assets/tax-image-mobile-dark.png"

import chatIcon from "../../assets/chat-icon.png"
import chatIconDark from "../../assets/chat-icon-dark.png"

import altproIcon from "../../assets/altpro-icon.png"
import altproIconDark from "../../assets/altpro-icon-dark.png"

import invoiceIcon from "../../assets/invoice-icon.png"
import invoiceIconDark from "../../assets/invoice-icon-dark.png"

// import speedIcon from "../../assets/speed-icon.png"
// import speedIconDark from "../../assets/speed-icon-dark.png"

// import noteIcon from "../../assets/note-icon.png"
// import noteIconDark from "../../assets/note-icon-dark.png"

import bookIcon from "../../assets/book-icon.png"
import bookIconDark from "../../assets/book-icon-dark.png"

// import peopleIcon from "../../assets/people-icon.png"
// import peopleIconDark from "../../assets/people-icon-dark.png"

// import soundIcon from "../../assets/sound-icon.png"
// import soundIconDark from "../../assets/sound-icon-dark.png"

// import chartIcon from "../../assets/chart-icon.png"
// import chartIconDark from "../../assets/chart-icon-dark.png"

// import buildingIcon from "../../assets/building-icon.png"
// import buildingIconDark from "../../assets/building-icon-dark.png"

import useThemeContext from "../../hooks/useThemeContext"
import { Link } from "react-router-dom"

interface Feature {
    icon: string
    title: string
    content: string
    image: string
    mobileImage?: string
}

interface FeatureListProps {
    features: Feature[]
}


const FeatureCardsSection: React.FC = () => {
    const { theme } = useThemeContext()
    const features: Feature[] = [
        {
            icon: theme == "dark" ? altproIconDark : altproIcon,
            title: "Business Banking(AltPro)",
            content: "Sync with AltPro for seamless financial access",
            image: theme == "dark" ? altproImageDark : altproImage,
            mobileImage: theme == "dark" ? altproImageMobileDark : altproImageMobile
        },
        {
            icon: theme == "dark" ? invoiceIconDark : invoiceIcon,
            title: "Invoicing and receipt Generation",
            content: "Create, track and automate invoices",
            image: theme == "dark" ? invoiceImageDark : invoiceImage,
            mobileImage: theme == "dark" ? invoiceImageMobileDark : invoiceImageMobile
        },
        {
            icon: theme == "dark" ? bookIconDark : bookIcon,
            title: "Tax Management",
            content: "Easy tax calculation",
            image: theme == "dark" ? taxImageDark : taxImage,
            mobileImage: theme == "dark" ? taxImageMobileDark : taxImageMobile
        }
    ]

    return (
        <>
            <section className="bg-neutral flex flex-col items-center gap-12 md:gap-24 px-4 md:px-19 lg:px-38 py-17 md:py-24">
                <NewsletterFeature />
                <FeatureList features={features} />
                {/* <FeatureCard
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
                    /> */}
            </section>
        </>
    )
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {

    return (
        features.map(feature => (
            <FeatureCard key={feature.title} feature={feature} />
        ))
    )
}

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {

    return (
        <>
            <div className="card w-full items-center xl:w-218 p-0">
                <div className="card-body p-0 py-10">
                    <div className="flex flex-col items-center md:items-center space-y-8">
                        <figure className="size-12">
                            <img src={feature.icon} />
                        </figure>

                        <h4 className="text-xl xl:text-3xl font-medium">{feature.title}</h4>

                        <p className="xl:text-xl">
                            {feature.content}
                        </p>
                    </div>
                </div>

                {/* for mobile and small tablets */}
                <div className="md:hidden">
                    <img
                        src={feature.mobileImage ? feature.mobileImage : feature.image}
                        alt={feature.title} />
                </div>

                {/* hidden on mobile and small tablets */}
                <div className="hidden md:flex">
                    <img
                        src={feature.image}
                        alt={feature.title} />
                </div>
            </div>
        </>
    )
}

const NewsletterFeature: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <div className="card md:card-side lg:w-full xl:w-218 space-y-10">
            <div className="card-body md:w-1/2 p-0 justify-center">
                <div className="flex flex-col items-center md:items-start space-y-8">
                    <figure className="size-12">
                        <img src={theme == "dark" ? chatIconDark : chatIcon} />
                    </figure>

                    <h4 className="text-xl xl:text-3xl font-medium">Email Newsletter</h4>

                    <p className="xl:text-xl">
                        Personalized industry insights & updates
                    </p>

                    <Link to={"/blog#newsletter"} className="btn btn-primary text-secondary p-6.5 rounded-full min-w-55 md:min-w-fit w-67 hover:scale-105 transition-all ease-in-out duration-500">
                        Subscribe Now
                    </Link>
                </div>
            </div>

            {/* for mobile and small tablets */}
            <div className="md:hidden">
                <img
                    src={theme == "dark" ? newsletterOnPhoneImageMobileDark : newsletterOnPhoneImageMobile}
                    alt="Newsletter"
                />
            </div>

            {/* hidden on mobile and small tablets  */}
            <div className="hidden md:flex w-1/2">
                <img
                    src={newsletterOnPhoneImage}
                    alt="Newsletter"
                />
            </div>

        </div>
    )
}

export default FeatureCardsSection;