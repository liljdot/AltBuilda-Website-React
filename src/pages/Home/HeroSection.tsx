import heroSectionImage from "../../assets/hero-section-image.png"
import ActionButton from "../../components/ActionButton"
import useThemeContext from "../../hooks/useThemeContext"
import heroSectionBG from "../../assets/hero-section-bg.png"
import heroSectionBGDark from "../../assets/hero-section-bg-dark.png"

const HeroSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="w-full relative bg-cover bg-no-repeat bg-center py-24 px-15 flex flex-row gap-0 z-99" style={{ backgroundImage: theme == "light" ? `url(${heroSectionBG})` : `url(${heroSectionBGDark})` }}>
                <div className="w-[55%] mt-20.5 z-99">
                    <h1 className="text-7xl z-99">
                        Your Ultimate Platform
                        <br />
                        <span className="font-semibold">
                            For SME Growth.
                        </span>
                    </h1>

                    <p className="mt-10 pr-21 z-99">Empowering businesses with tools to manage operations, connect with
                        peers,and drive growth effortlessly</p>

                    <div className="flex flex-row gap-5 mt-14 z-99">
                        <ActionButton to="/get-started" filled>
                            Get started now
                        </ActionButton>

                        <ActionButton to="/services" text="primary">
                            Explore Services
                        </ActionButton>
                    </div>
                </div>

                <div className="w-[45%] z-99">
                    <img src={heroSectionImage} alt="Hero Section Image" />
                </div>
            </section>
        </>
    )
}

export default HeroSection