import { IoIosArrowRoundForward } from "react-icons/io"
import { Link } from "react-router-dom"

interface Props {
    to: string
    children?: any
    filled?: boolean
    text?: "primary"
}

const ActionButton: React.FC<Props> = ({to, children, filled, text}) => {

    return (
        <>
            <Link to={to} className={`btn ${filled ? "bg-primary text-secondary" : `bg-transparent ${text ? "text-primary" : "text-white"}`} border border-primary w-60 rounded-full text-xl font-medium p-6.5 shadow-none hover:scale-105 transition-all ease-in-out duration-500 hover:[&>*]:translate-x-2`}>
                {children}
                <IoIosArrowRoundForward className={`${filled ? "bg-primary text-secondary" : `${text ? "text-primary" : "text-white"}`} size-8 transition-all ease-in-out duration-500`} />
            </Link>
        </>
    )
}

export default ActionButton;