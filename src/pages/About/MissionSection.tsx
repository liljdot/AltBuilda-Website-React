import missionImage from "../../assets/mission-image.png"
import missionImageMobile from "../../assets/mission-image-mobile.png"
import ActionButton from "../../components/ActionButton";

const MissionSection: React.FC = () => {

    return (
        <>
            <section className="w-full bg-neutral py-10 md:py-26">
                <div className="text-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium">Our Mission</h3>
                </div>

                {/* hidden on mobile */}
                <figure className="hidden sm:block">
                    <img src={missionImage} alt="AltBuilda Image" />
                </figure>

                {/* for mobile  */}
                <figure className="sm:hidden mt-5">
                    <img src={missionImageMobile} alt="AltBuilda Image" />
                </figure>

                <p className="text-center text-secondary text-[1rem]/11 md:text-xl/10 px-6 lg:px-39 mt-12 md:mt-19">
                    Altbuida is designed to empower Small and Medium Enterprises (SMEs) like yours to thrive and scale. We provide the essential tools, financial solutions, and networking opportunities you need to manage your business effectively and achieve sustainable growth. Whether you're just starting or looking to expand, Altbuida is the right platform for success.
                </p>

                <div className="flex flex-row justify-center my-10 md:my-14">
                    <ActionButton to="/contact" filled>Learn More</ActionButton>
                </div>
            </section>
        </>
    )
}

export default MissionSection;