import Banner from "../../components/Banner";
import FeaturesSection from "./FeaturesSection";

const Services: React.FC = () => {

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <Banner page="Services" title="Everything You Need To Scale Your Business" />
                    <FeaturesSection />
                </div>
            </main>
        </>
    )
}

export default Services;