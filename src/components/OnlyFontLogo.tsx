import onlyFontLogo from "../assets/only-font-logo.png"
import onlyFontLogoBlack from "../assets/only-font-logo-black.png"
import useThemeContext from "../hooks/useThemeContext"

const OnlyFontLogo: React.FC = () => {
    const { theme } = useThemeContext()

    return <img src={theme == "light" ? onlyFontLogoBlack : onlyFontLogo} alt="AltBuilda" width={245} className="absolute bottom-0 -right-5" />
}

export default OnlyFontLogo