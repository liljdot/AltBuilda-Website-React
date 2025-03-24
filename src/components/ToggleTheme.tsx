import { IoMoonOutline, IoSunny } from "react-icons/io5"
import useThemeContext from "../hooks/useThemeContext"


const ToggleTheme: React.FC = () => {
    const {theme, toggleTheme} = useThemeContext()

    return (
        <>
            <button onClick={toggleTheme} className="btn btn-ghost border border-info rounded-xl size-10 p-0 relative z-1000">
                {theme == "light" ? <IoMoonOutline className="size-6"/> : <IoSunny className="text-[gold] size-6" />}
            </button>
        </>
    )
}

export default ToggleTheme