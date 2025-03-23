import { Link } from "react-router-dom"
import NavbarLogo from "./NavbarLogo"

const Navbar: React.FC<{behind?: boolean}> = ({behind}) => {


    return (
        <>
            <header className={`w-full bg-neutral ${!behind ? "fixed z-100" : "opacity-0"} shadow-xl top-0`}>
                <div className="navbar bg-neutral  px-18.5 py-6 text-[1rem] font-semibold  z-100 max-w-450 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown"> {/*sandwich for smaller screens */}
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>

                        {/* Logo */}
                        <Link to={"/"} className="p-0 hover:bg-transparent hover:cursor-pointer hover:border-0 hover:shadow-none">
                            <NavbarLogo />
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-[1rem] px-0 gap-10.5">
                            <li><Link to={"/about"} className="px-0 hover:bg-transparent hover:text-primary">About</Link></li>

                            <li><Link to={"/services"} className="px-0 hover:bg-transparent hover:text-primary">Services</Link></li>

                            <li><Link to={"/blog"} className="px-0 hover:bg-transparent hover:text-primary">Blog</Link></li>

                            <li><Link to={"/faq"} className="px-0 hover:bg-transparent hover:text-primary">FAQ</Link></li>

                            <li><Link to={"/contact"} className="px-0 hover:bg-transparent hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="navbar-end gap-4.5 m-0 p-0">
                        <Link to={"/login"} className="px-0 hover:bg-transparent hover:text-primary">Login</Link>

                        <Link to={"/get-started"} className="btn btn-secondary text-[1rem] text-neutral rounded-full font-semibold py-7 transition-all ease-in-out duration-300 hover:scale-105">Get Started for Free</Link>
                    </div>
                </div>
                </header >
            </>
    )
}

export default Navbar