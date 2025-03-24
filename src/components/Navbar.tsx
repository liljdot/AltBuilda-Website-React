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
    const { pathname } = useLocation()

    const toggleSandwichMenu: React.MouseEventHandler = () => {
        setIsSandwichMenuOpen(!isSandwichMenuOpen)
    }

    // set sandwichmenu to close anytime user changes pages 
    useEffect(() => {
        if (behind) {
            return
        }

        setIsSandwichMenuOpen(false)
    }, [pathname])

    return (
        <>
            <header ref={headerRef} className={`w-full bg-neutral transition-all ease-in-out duration-300 ${!behind ? "fixed z-100" : "opacity-0"} shadow-xl top-0`}>
                <div className="navbar bg-neutral px-4 lg:px-18.5 py-6 text-[1rem] font-semibold  z-100 max-w-450 mx-auto">
                    <div className="navbar-start">
                        {/* Logo */}
                        <Link to={"/"} className="p-0 hover:bg-transparent hover:cursor-pointer hover:border-0 hover:shadow-none">
                            <NavbarLogo />
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex lg:scale-80 xl:scale-100">
                        <ul className="menu menu-horizontal text-[1rem] px-0 gap-10.5">
                            <li><Link to={"/about"} className="px-0 hover:bg-transparent hover:text-primary">About</Link></li>

                            <li><Link to={"/services"} className="px-0 hover:bg-transparent hover:text-primary">Services</Link></li>

                            <li><Link to={"/blog"} className="px-0 hover:bg-transparent hover:text-primary">Blog</Link></li>

                            <li><Link to={"/faq"} className="px-0 hover:bg-transparent hover:text-primary">FAQ</Link></li>

                            <li><Link to={"/contact"} className="px-0 hover:bg-transparent hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="navbar-end gap-4.5 m-0 p-0 lg:scale-80 xl:scale-100">
                        <ToggleTheme />

                        {/* links show only in desktop  */}
                        <Link to={"/login"} className="hidden lg:flex px-0 hover:bg-transparent hover:text-primary">Login</Link>

                        <Link to={"/get-started"} className="hidden lg:flex btn btn-secondary text-[1rem] text-neutral rounded-full font-semibold py-7 transition-all ease-in-out duration-300 hover:scale-105">Get Started for Free</Link>

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
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={""}>Services</Link></li>
                            <li><Link to={""}>Blog</Link></li>
                            <li><Link to={""}>FAQ</Link></li>
                            <li><Link to={""}>Contact</Link></li>
                        </ul>

                        <div className="flex flex-col gap-3">
                            <Link to={"/get-started"} className="btn btn-secondary text-[1rem] text-neutral rounded-full font-semibold py-7 transition-all ease-in-out duration-300 active:scale-95">Get Started for Free</Link>
                            <Link to={"/login"} className="btn btn-ghost text-[1rem] text-primary border border-primary rounded-full font-semibold py-7 transition-all ease-in-out duration-300 active:scale-95">Login</Link>
                        </div>
                    </div>

                    <div onClick={toggleSandwichMenu} onTouchMove={() => setIsSandwichMenuOpen(false)} className={`absolute ${isSandwichMenuOpen && "h-screen"} bg-transparent w-full top-[100%]`}></div>
                </div>
            </header >
        </>
    )
}

export default Navbar