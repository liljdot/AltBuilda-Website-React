import navbarLogo from "../assets/navbar-logo.png"
import navbarLogoDark from "../assets/navbar-logo-dark.png"
import useThemeContext from "../hooks/useThemeContext"

const NavbarLogo: React.FC = () => {
    const {theme} = useThemeContext()

    return <img src={theme == "light" ? navbarLogo : navbarLogoDark} alt="AltBuilda Logo" width={142} height={36}/>
}

export default NavbarLogo