import { FaApple, FaGooglePlay } from "react-icons/fa"
import { Link } from "react-router-dom"

interface Props {
    to: string
}

export const PlayStoreButton: React.FC<Props> = ({to}) => {

    return <Link to={to} className="btn btn-secondary w-45 md:w-50 flex flex-row justify-between text-neutral rounded-full py-6.5 transition-all ease-in-out duration-300 hover:scale-105">
        <FaGooglePlay className="size-6 md:size-7"/>
        
        <div className="flex flex-col font-normal text-left">
            <p className="text-xs">GET IT ON</p>
            <p className="text-xl md:text-2xl">Google Play</p>
        </div>
    </Link>
}

export const AppStoreButton: React.FC<Props> = ({to}) => {

    return <Link to={to} className="btn btn-secondary w-45 md:w-50 flex flex-row justify-between text-neutral rounded-full py-6.5 transition-all ease-in-out duration-300 hover:scale-105">
        <FaApple className="size-6.5 md:size-7.5"/>
        
        <div className="flex flex-col font-normal text-left">
            <p className="text-xs">DOWNLOAD ON THE</p>
            <p className="text-xl md:text-2xl">App Store</p>
        </div>
    </Link>
}