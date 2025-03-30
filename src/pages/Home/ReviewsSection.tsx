import swirlVector from "../../assets/swirl-vector.png"
import swirlVector2 from "../../assets/swirl-vector-2.png"
import swirlVectorLight from "../../assets/swirl-vector-light.png"
import swirlVector2Light from "../../assets/swirl-vector-2-light.png"

import definityAvatar from "../../assets/definity-avatar.png"
import wealthyElephantAvatar from "../../assets/wealthy-elephant-avatar.png"
import palmcrestAvatar from "../../assets/palmcrest-avatar.png"

import { ReviewCard, ReviewContainer } from "./Reviews";
import useThemeContext from "../../hooks/useThemeContext";

const ReviewsSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="bg-neutral relative py-25">
                <img src={theme == "light" ? swirlVectorLight : swirlVector} alt="" className="absolute top-0 left-0 w-22.5" />
                <img src={theme == "light" ? swirlVector2Light : swirlVector2} alt="" className="absolute bottom-0 right-0 w-22.5" />

                {/* heading */}
                <div className="text-secondary text-center px-7 flex flex-col items-center gap-2 md:gap-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Real Business, Real Success</h2>

                    <p className="md:text-lg max-w-177">See how real businesses are growing with Altbuilda—streamlining operations,
                        boosting sales, and scaling with ease.</p>
                </div>

                {/* reviews  */}
                <div className="mt-15.5 mb-17.5">
                    <ReviewContainer>
                        <ReviewCard details={{ name: "Definity Innovations & Solutions", avatar: definityAvatar, comment: "Altbuilda helped us scale 3X in just 6 months by simplifying invoicing and tax compliance!", rating: 5 }} />
                        <ReviewCard details={{ name: "Wealthy Elephant", avatar: wealthyElephantAvatar, comment: "Business registration was a breeze with Altbuilda—we launched in 2 weeks instead of 2 months!", rating: 5 }} />
                        <ReviewCard details={{ name: "4geehub", comment: "Managing taxes used to be a headache, but Altbuilda saved us 30% in compliance costs.", rating: 5 }} />
                        <ReviewCard details={{ name: "PalmCrest Farms and Processing", avatar: palmcrestAvatar, comment: "Altbuilda’s networking hub connected us with the right partners, helping us secure five key collaborations that are driving growth in the palm processing industry.", rating: 5 }} />
                    </ReviewContainer>
                </div>
            </section>
        </>
    )
}

export default ReviewsSection;