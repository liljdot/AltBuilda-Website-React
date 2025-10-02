import { Link, useLocation } from "react-router-dom"
import NavbarLogo from "./NavbarLogo"
import ToggleTheme from "./ToggleTheme"
import { useEffect, useRef, useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

const Navbar: React.FC<{ behind?: boolean }> = ({ behind }) => {
    const [isSandwichMenuOpen, setIsSandwichMenuOpen] = useState<boolean>(false)
    const headerRef = useRef<HTMLElement>(null)
    const sandwichButtonRef = useRef<HTMLButtonElement>(null)
    const { pathname, hash } = useLocation()

    const appLoginPage = import.meta.env.VITE_APP_URL + "/login"
    const appRegisterPage = import.meta.env.VITE_APP_URL + "/register"

    const toggleSandwichMenu: React.MouseEventHandler = () => {
        setIsSandwichMenuOpen(!isSandwichMenuOpen)
    }

    // scroll to top of page and set sandwichmenu to close anytime user changes pages 
    useEffect(() => {
        if (behind) {
            return
        }

        if (hash) {
            document.getElementById(hash.split("#")[1])!.scrollIntoView({
                block: "start",
                behavior: "smooth"
            }) // scroll to emement id if exists
        } else {
            document.body.scrollIntoView({
                block: "start",
                behavior: "smooth"
            })
        }

        setIsSandwichMenuOpen(false)
    }, [pathname])

    return (
        <>
            <header ref={headerRef} className={`w-full bg-neutral transition-all ease-in-out duration-300 ${!behind ? "fixed z-1000" : "opacity-0"} shadow-xl top-0`}>
                <div className="navbar bg-neutral px-4 lg:px-18.5 py-6 text-[1rem] font-semibold  z-100 max-w-450 mx-auto">
                    <div className="navbar-start">
                        {/* Logo */}
                        <Link to={"/"} className="p-0 hover:bg-transparent hover:cursor-pointer hover:border-0 hover:shadow-none">
                            <NavbarLogo />
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex lg:scale-80 xl:scale-100">
                        <ul className="menu menu-horizontal text-[1rem] px-0 gap-10.5">
                            <li><Link to={"/about"} className={`${pathname == "/about" && "text-primary"} px-0 hover:bg-transparent hover:text-primary`}>About</Link></li>

                            <li><Link to={"/services"} className={`${pathname == "/services" && "text-primary"} px-0 hover:bg-transparent hover:text-primary`}>Services</Link></li>

                            <li><Link to={"/blog"} className={`${pathname.startsWith("/blog") && "text-primary"} px-0 hover:bg-transparent hover:text-primary`}>Blog</Link></li>

                            <li><Link to={"/faq"} className={`${pathname == "/faq" && "text-primary"} px-0 hover:bg-transparent hover:text-primary`}>FAQ</Link></li>

                            <li><Link to={"/contact"} className={`${pathname == "/contact" && "text-primary"} px-0 hover:bg-transparent hover:text-primary`}>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="navbar-end gap-4.5 m-0 p-0 lg:scale-80 xl:scale-100">
                        <ToggleTheme />

                        {/* links show only in desktop  */}
                        <Link to={appLoginPage} className="hidden lg:flex px-0 hover:bg-transparent hover:text-primary">Login</Link>

                        <Link to={appRegisterPage} className="hidden lg:flex btn btn-secondary text-[1rem] text-neutral rounded-full font-semibold py-7 transition-all ease-in-out duration-300 hover:scale-105">Get Started for Free</Link>

                        {/* sandwich menu toggle only shows on mobile  */}
                        <button ref={sandwichButtonRef} className="flex lg:hidden btn btn-ghost p-0" onClick={toggleSandwichMenu}>
                            {!isSandwichMenuOpen ? <FiMenu className="size-6" /> : <IoMdClose className="size-6 text-info" />}
                        </button>
                    </div>
                </div>

                {/* dropdown container*/}
                <div className={`lg:hidden w-full overflow-hidden ${isSandwichMenuOpen ? "h-117" : "h-0"} transition-all ease-in-out duration-300`}>
                    <div className="size-full flex flex-col justify-between p-4">
                        <ul className="flex flex-col gap-5 text-secondary font-medium [&>*]:active:text-primary">
                            <li><Link to={"/about"} className={`${pathname == "/about" && "text-primary"}`}>About</Link></li>
                            <li><Link to={"/services"} className={`${pathname == "/services" && "text-primary"}`}>Services</Link></li>
                            <li><Link to={"/blog"} className={`${pathname.startsWith("/blog") && "text-primary"}`}>Blog</Link></li>
                            <li><Link to={"/faq"} className={`${pathname == "/faq" && "text-primary"}`}>FAQ</Link></li>
                            <li><Link to={"/contact"} className={`${pathname == "/contact" && "text-primary"}`}>Contact</Link></li>
                        </ul>

                        <div className="flex flex-col gap-3">
                            <Link to={appRegisterPage} className="btn btn-secondary text-[1rem] text-neutral rounded-full font-semibold py-7 transition-all ease-in-out duration-300 active:scale-95">Get Started for Free</Link>
                            <Link to={appLoginPage} className="btn btn-ghost text-[1rem] text-primary border border-primary rounded-full font-semibold py-7 transition-all ease-in-out duration-300 active:scale-95">Login</Link>
                        </div>
                    </div>

                    {/* outside area to close sandwich menu on click  */}
                    <div onClick={toggleSandwichMenu} onTouchMove={() => setIsSandwichMenuOpen(false)} className={`absolute ${isSandwichMenuOpen && "h-screen"} bg-transparent w-full top-[100%]`}></div>
                </div>
            </header >
        </>
    )
}

export default Navbar