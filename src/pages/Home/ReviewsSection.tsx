import swirlVector from "../../assets/swirl-vector.png"
import swirlVector2 from "../../assets/swirl-vector-2.png"
import swirlVectorLight from "../../assets/swirl-vector-light.png"
import swirlVector2Light from "../../assets/swirl-vector-2-light.png"

import definityAvatar from "../../assets/definity-avatar.png"
import wealthyElephantAvatar from "../../assets/wealthy-elephant-avatar.png"
import palmcrestAvatar from "../../assets/palmcrest-avatar.png"
import fourgeehubAvatar from "../../assets/fourgeehub-avatar.png"

import { ReviewCard, ReviewContainer } from "./Reviews";
import useThemeContext from "../../hooks/useThemeContext";

const ReviewsSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="bg-base-100 relative py-25">
                <img src={theme == "light" ? swirlVectorLight : swirlVector} alt="" className="absolute top-0 left-0 w-22.5" />
                <img src={theme == "light" ? swirlVector2Light : swirlVector2} alt="" className="absolute bottom-0 right-0 w-22.5" />

                {/* heading */}
                <div className="text-secondary text-center px-7 flex flex-col items-center gap-2 md:gap-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Real Business, Real Success</h2>

                    <p className="md:text-lg max-w-177">See how real businesses are growing with Bold by ALT—streamlining operations,
                        boosting sales, and scaling with ease.</p>
                </div>

                {/* reviews  */}
                <div className="mt-15.5 mb-17.5 lg:hidden">
                    <ReviewContainer>
                        <ReviewCard details={{ name: "Definity Innovations & Solutions", avatar: definityAvatar, comment: "Bold by ALT streamlined my operations, giving me time to focus on growth.", rating: 5 }} />
                        <ReviewCard details={{ name: "Wealthy Elephant", avatar: wealthyElephantAvatar, comment: "Bold by ALT's financial solutions helped me secure funding and expand.", rating: 5 }} />
                        <ReviewCard details={{ name: "4geehub", avatar: fourgeehubAvatar, square: true, comment: "Bold by ALT simplified our processes at 4GeeHub, letting us focus on scaling our gift card trading business.", rating: 5 }} />
                        <ReviewCard details={{ name: "PalmCrest Farms and Processing", avatar: palmcrestAvatar, comment: "Bold by ALT’s networking hub connected us with the right partners, helping us secure five key collaborations that are driving growth in the palm processing industry.", rating: 5 }} />
                    </ReviewContainer>
                </div>

                <div className="mt-15.5 mb-17.5 hidden lg:grid grid-cols-2 gap-20 px-15 xl:px-40 2xl:px-60">
                    <div className="w-full h-[120%] flex flex-col justify-end items-end">
                        <ReviewCard details={{ name: "Definity Innovations & Solutions", avatar: definityAvatar, comment: "Bold by ALT streamlined my operations, giving me time to focus on growth.", rating: 5 }} />
                    </div>

                    <div className="w-full h-[120%] flex flex-col justify-start items-end">
                        <ReviewCard details={{ name: "Wealthy Elephant", avatar: wealthyElephantAvatar, comment: "Bold by ALT's financial solutions helped me secure funding and expand.", rating: 5 }} />
                    </div>

                    <div className="w-full h-[120%] flex flex-col justify-end items-start">
                        <ReviewCard details={{ name: "4geehub", avatar: fourgeehubAvatar, square: true, comment: "Bold by ALT simplified our processes at 4GeeHub, letting us focus on scaling our gift card trading business.", rating: 5 }} />
                    </div>

                    <div className="w-full h-[120%] flex flex-col justify-start items-start">
                        <ReviewCard details={{ name: "PalmCrest Farms and Processing", avatar: palmcrestAvatar, comment: "Bold by ALT’s networking hub connected us with the right partners, helping us secure five key collaborations that are driving growth in the palm processing industry.", rating: 5 }} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReviewsSection;