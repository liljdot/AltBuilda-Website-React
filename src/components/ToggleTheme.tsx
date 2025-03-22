"use client"

import useThemeContext from "../hooks/useThemeContext"


const ToggleTheme: React.FC = () => {
    const {theme, toggleTheme} = useThemeContext()

    return (
        <>
            <button onClick={toggleTheme} className="btn btn-base relative z-1000">Toggle</button>
        </>
    )
}

export default ToggleTheme