import atomImage from "../../assets/atom-image.png"
import atomImage2 from "../../assets/atom-image-2.png"
import atomImageDark from "../../assets/atom-image-dark.png"
import atomImage2Dark from "../../assets/atom-image-2-dark.png"
import useThemeContext from "../../hooks/useThemeContext"
import { IoStar } from "react-icons/io5"
import { AppStoreButton, PlayStoreButton } from "../../components/AppActionButtons"
import phoneImage from "../../assets/phone-image.png"
import phoneImageLight from "../../assets/phone-image-light.png"

const DownloadAppSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="relative bg-warning flex flex-col md:flex-row justify-around pb-30 lg:pb-10 xl:pb-0 pt-16 md:pt-17 px-5 md:px-17 rounded-xl">
                <img src={theme == "dark" ? atomImageDark : atomImage} alt="atom" className="absolute top-0 right-0"/>
                <img src={theme == "dark" ? atomImage2Dark : atomImage2} alt="atom" className="absolute bottom-0 left-0"/>

                <div className="flex flex-col gap-7 text-secondary max-w-202">
                    <h2 className="text-2xl/10 md:text-3xl lg:text-5xl font-extrabold">Run Your Business From Your Pocket: Anytime, Anywhere.</h2>

                    <div className="flex flex-col gap-4 text-sm sm:[1rem]">
                        <div className="flex flex-row gap-3 items-center">
                            <IoStar className="text-[gold] size-5"/>

                            <p className="font-medium">Invoice Clients Instantly, From Anywhere.</p>
                        </div>

                        <div className="flex flex-row gap-3 items-center">
                            <IoStar className="text-[gold] size-5"/>

                            <p className="font-medium">Real-Time Sales Insights: Monitor Your Business's Health.</p>
                        </div>

                        <div className="flex flex-row gap-3 items-center">
                            <IoStar className="text-[gold] size-5"/>

                            <p className="font-medium">Never Miss a Tax Deadline: Immediate Tax and Regulatory Updates.</p>
                        </div>
                    </div>

                    <div className="relative flex flex-row justify-around sm:justify-start gap-3 sm:gap-6 z-1">
                        <AppStoreButton to=""/>

                        <PlayStoreButton to=""/>
                    </div>
                </div>

                <figure className="mt-14 md:mt-0">
                    <img src={theme == "dark" ? phoneImage : phoneImageLight} />
                </figure>
            </section>
        </>
    )
}

export default DownloadAppSection;