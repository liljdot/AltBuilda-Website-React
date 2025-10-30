import navbarLogo from "../assets/navbar-logo.svg"
import navbarLogoDark from "../assets/navbar-logo-dark.svg"
import useThemeContext from "../hooks/useThemeContext"

const NavbarLogo: React.FC = () => {
    const {theme} = useThemeContext()

    return <img src={theme == "light" ? navbarLogo : navbarLogoDark} alt="AltBuilda Logo" width={142} height={36}/>
}

export default NavbarLogo