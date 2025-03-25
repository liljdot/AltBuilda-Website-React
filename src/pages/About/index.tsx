import Banner from "./Banner";
import MissionSection from "./MissionSection";

const About: React.FC = () => {

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <Banner />
                    <MissionSection />
                </div>
            </main>
        </>
    )
}

export default About;