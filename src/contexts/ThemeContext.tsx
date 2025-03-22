import { createContext, ReactNode, useState } from "react";

export interface ThemeContextProps {
    theme: "light" | "dark"
    toggleTheme: () => void
}

interface ThemeProviderProps {
    children: ReactNode
}

export const themeContext = createContext<ThemeContextProps | null>(null)

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<"light" | "dark">(localStorage.getItem("theme") == "light" ? "light" : "dark")

    const toggleTheme = () => {
        localStorage.setItem("theme", theme == "light" ? "dark" : "light")
        setTheme(theme == "light" ? "dark" : "light")
    }

    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}