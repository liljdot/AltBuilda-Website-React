import onlyFontLogo from "../assets/navbar-logo-dark.svg"
import onlyFontLogoBlack from "../assets/navbar-logo.svg"
import useThemeContext from "../hooks/useThemeContext"

interface Props {
    className?: string
}

const OnlyFontLogo: React.FC<Props> = ({className}) => {
    const { theme } = useThemeContext()

    return <img src={theme == "light" ? onlyFontLogoBlack : onlyFontLogo} alt="AltBuilda" className={className} />
}

export default OnlyFontLogo