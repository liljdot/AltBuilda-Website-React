import ToggleTheme from "../../components/ToggleTheme";
import GettingStartedSection from "./GettingStartedSection";
import HeroSection from "./HeroSection";
import ReviewsSection from "./ReviewsSection";
import TransformSection from "./TransformSection";
import WhyTrustSection from "./WhyTrustSection";

export default function Home() {
    return (
      <>
        <main className="p-0 bg-neutral w-full">
          <div className="max-w-450 mx-auto">
            <HeroSection />
            <WhyTrustSection />
            <TransformSection />
            <GettingStartedSection />
            <ReviewsSection />
            <ToggleTheme />
          </div>
        </main>
      </>
    );
  }