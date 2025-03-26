import Banner from "../../components/Banner";
import MissionSection from "./MissionSection";
import OfferSection from "./OfferSection";
import WhyChooseSection from "./WhyChooseSection";

const About: React.FC = () => {

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <Banner page="About" title="Empowering Your Business Growth" />
                    <MissionSection />
                    <OfferSection />
                    <WhyChooseSection />
                </div>
            </main>
        </>
    )
}

export default About;