import { useEffect, useState } from "react"

import stepsImageDesktop from "../assets/steps-image-desktop.png"
import stepsImageDesktopDark from "../assets/steps-image-desktop-dark.png"

import stepsImageMobile from "../assets/steps-image-mobile.png"
import stepsImageMobileDark from "../assets/steps-image-mobile-dark.png"
import useThemeContext from "../hooks/useThemeContext"

const StepsImageDesktop: React.FC<{ screenSize: number }> = ({ screenSize }) => {
    const { theme } = useThemeContext()

    return <img src={theme == "light" ? stepsImageDesktop : stepsImageDesktopDark} alt="Steps to Get Started" />
}

const StepsImageMobile: React.FC<{ screenSize: number }> = ({ screenSize }) => {
    const { theme } = useThemeContext()

    return <img src={theme == "light" ? stepsImageMobile : stepsImageMobileDark} alt="Steps to Get Started" />
}

const StepsImage: React.FC = () => {
    const [screenSize, setScreenSize] = useState<number>(1300)

    useEffect(() => {
        setScreenSize(screen.availWidth)
        
        window.addEventListener("resize", () => {
            setScreenSize(screen.availWidth)
        })
    }, [])

    if (screenSize >= 640) {
        return <StepsImageDesktop screenSize={screenSize}/>
    }

    return <StepsImageMobile screenSize={screenSize}/>
}

export default StepsImage