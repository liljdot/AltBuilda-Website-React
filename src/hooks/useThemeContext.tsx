import { useContext } from "react";
import { themeContext, ThemeContextProps } from "../contexts/ThemeContext";

const useThemeContext: () => ThemeContextProps = () => {
    const context = useContext(themeContext)

    if (!context) {
        throw new Error("useThemeContext must be called within ThemeContextProvider")
    }

    return context
}

export default useThemeContext