"use client"

import { ReactNode, useContext } from "react"
import heroSectionBG from "@/app/assets/hero-section-bg.png"
import heroSectionBGDark from "@/app/assets/hero-section-bg-dark.png"
import { themeContext } from "@/app/context/ThemeContext"

interface Props {
    children: ReactNode
}

const HeroSectionBG: React.FC<Props> = ({children}) => {
    const {theme} = useContext(themeContext)!

    return (
        <>
            <section className="w-full relative bg-cover bg-no-repeat bg-center py-24 px-15 flex flex-row gap-0 z-99" style={{ backgroundImage: theme == "light" ? `url(${heroSectionBG.src})` : `url(${heroSectionBGDark.src})` }}>
                {children}
            </section>
        </>
    )
}

export default HeroSectionBG