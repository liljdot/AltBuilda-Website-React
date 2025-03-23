import heroSectionImage from "@/app/assets/hero-section-image.png"
import Image from "next/image"
import HeroSectionBG from "./HeroSectionBG"
import ActionButton from "../ActionButton"

const HeroSection: React.FC = () => {

    return (
        <>
            <HeroSectionBG>
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
                    <Image src={heroSectionImage} alt="Hero Section Image" />
                </div>
            </HeroSectionBG>
        </>
    )
}

export default HeroSection