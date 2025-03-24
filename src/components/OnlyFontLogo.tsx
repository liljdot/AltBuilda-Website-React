import onlyFontLogo from "../assets/only-font-logo.png"
import onlyFontLogoBlack from "../assets/only-font-logo-black.png"
import useThemeContext from "../hooks/useThemeContext"

interface Props {
    className?: string
}

const OnlyFontLogo: React.FC<Props> = ({className}) => {
    const { theme } = useThemeContext()

    return <img src={theme == "light" ? onlyFontLogoBlack : onlyFontLogo} alt="AltBuilda" className={className} />
}

export default OnlyFontLogo