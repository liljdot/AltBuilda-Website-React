import { IoIosArrowRoundForward } from "react-icons/io"
import { Link } from "react-router-dom"

interface Props {
    to: string
    children?: any
    filled?: boolean
    text?: "primary"
    shrink?: boolean
}

const ActionButton: React.FC<Props> = ({to, children, filled, text, shrink}) => {

    return (
        <>
            <Link to={to} className={`btn ${filled ? "bg-primary text-secondary" : `bg-transparent ${text ? "text-primary" : "text-white"}`} border border-primary w-42 md:w-60 rounded-full ${shrink ? "text-[0.75rem]": "text-sm"} md:text-xl font-medium py-6.5 px-2 ${!shrink &&"md:px-6.5"} shadow-none hover:scale-105 transition-all ease-in-out duration-500 hover:[&>*]:translate-x-2`}>
                {children}
                <IoIosArrowRoundForward className={`${filled ? "text-secondary" : `${text ? "text-primary" : "text-white"}`} size-8 transition-all ease-in-out duration-500`} />
            </Link>
        </>
    )
}

export default ActionButton;