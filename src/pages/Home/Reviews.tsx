import { ReactNode } from "react"
import { IoStar } from "react-icons/io5"
import { ImQuotesLeft } from "react-icons/im"

interface ReviewCardProps {
    details: {
        rating: 0 | 1 | 2 | 3 | 4 | 5
        avatar?: string
        name: string
        comment: string
    }
}

interface ContainerProps {
    children: ReactNode
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ details }) => {
    const rating = new Array(details.rating).fill("")

    return (
        <>
            <div className="card bg-neutral relative px-8 shadow-2xl rounded-2xl shadow-info z-1">
                <div className="avatar absolute -top-15 left-12">
                    <div className="w-25 rounded-full">
                        <img src={details.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                    </div>
                </div>

                <div className="card-body w-90 pt-10">
                    <div className=" w-full flex flex-row justify-between items-center">
                        {/* star rating  */}
                        <div className="flex flex-row gap-0">
                            {rating.map((...[, index]) => <IoStar key={"star" + index} className="text-[gold] size-5.5" />)}
                        </div>

                        {/* quote image */}
                        <ImQuotesLeft className="size-26.5 -scale-x-100 text-info" />
                    </div>

                    <div className="flex flex-col gap-2 text-secondary max-w-73">
                        <h5 className="text-xl font-extrabold">{details.name}</h5>

                        <p>{details.comment}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const ReviewContainer: React.FC<ContainerProps> = ({ children }) => {

    return (
        <>
            <div className="relative w-full flex flex-row gap-8 justify-start pt-15 pb-2.5 z-0 overflow-auto">
                {children}
            </div>
        </>
    )
}