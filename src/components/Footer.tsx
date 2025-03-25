import ActionButton from "./ActionButton";
import signVector from "../assets/sign-vector.png"
import footerLogo from "../assets/footer-logo.png"
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {

    return (
        <>
            <div className="w-full bg-[#161616]">
                <div className="max-w-450 mx-auto">
                    <footer className="footer footer-horizontal footer-center relative text-base-content py-0 px-7 md:px-34 z-100 before:absolute before:-translate-y-[120%] before:h-[33%] before:w-[200%] sm:before:-translate-y-[50%] sm:before:h-[66%] sm:before:w-[120%] before:bg-[#161616] before:rounded-t-[50%] before:-z-1">
                        {/* footer start  */}
                        <nav className="flex flex-col w-full text-white ">
                            <h3 className="text-2xl  md:text-3xl lg:text-5xl font-bold text-white">Your Business Journey Starts Here</h3>

                            <div className="flex flex-row gap-5 sm:gap-7 mt-10 sm:mt-15">
                                <ActionButton to="/signup" filled>Sign Up Today</ActionButton>

                                <ActionButton to="/login" >Login</ActionButton>
                            </div>

                            <div className="flex flex-row w-full sm:px-34 justify-end mt-7">
                                <img src={signVector} width={240} alt="sign" />
                            </div>
                        </nav>

                        {/* footer center  */}
                        {/* for mobile screens only  */}
                        <div className="navbar flex sm:hidden flex-col gap-19 items-start mt-18">
                            <div className="flex flex-col gap-9 self-start">
                                <Link to={"/"}>
                                    <img src={footerLogo} alt="AltBuilda Logo" width={97} />
                                </Link>

                                <div className="flex flex-row gap-8.5 p-0 text-white b">
                                    <Link to={"x.com/"}>
                                        <FaTwitter className="size-4" />
                                    </Link>

                                    <Link to={"facebook.com/"}>
                                        <FaFacebookF className="size-4" />
                                    </Link>

                                    <Link to={"instagram.com/"}>
                                        <FaInstagram className="size-4" />
                                    </Link>
                                </div>
                            </div>


                            <nav className="flex flex-col self-start gap-11 text-left text-white text-[1rem] font-semibold p-0">
                                <Link to={"/about"} className="link link-hover hover:text-primary">About</Link>
                                <Link to={"/services"} className="link link-hover hover:text-primary">Services</Link>
                                <Link to={"/blog"} className="link link-hover hover:text-primary">Blog</Link>
                                <Link to={"/faq"} className="link link-hover hover:text-primary">FAQ</Link>
                                <Link to={"/contact"} className="link link-hover hover:text-primary">Contact</Link>
                            </nav>
                        </div>

                        {/* hidden for mobile screens  */}
                        <div className="hidden navbar sm:flex flex-row justify-between border-b-gray-700 border-b pb-6">
                            <Link to={"/"}>
                                <img src={footerLogo} alt="AltBuilda Logo" width={97} />
                            </Link>

                            <nav className="grid grid-flow-col gap-11 text-white text-[1rem] font-semibold p-0">
                                <Link to={"/about"} className="link link-hover hover:text-primary">About</Link>
                                <Link to={"/services"} className="link link-hover hover:text-primary">Services</Link>
                                <Link to={"/blog"} className="link link-hover hover:text-primary">Blog</Link>
                                <Link to={"/faq"} className="link link-hover hover:text-primary">FAQ</Link>
                                <Link to={"/contact"} className="link link-hover hover:text-primary">Contact</Link>
                            </nav>

                            <div className="flex flex-row gap-8.5 p-0 text-white b">
                                <Link to={"x.com/"}>
                                    <FaTwitter className="size-4" />
                                </Link>

                                <Link to={"facebook.com/"}>
                                    <FaFacebookF className="size-4" />
                                </Link>

                                <Link to={"instagram.com/"}>
                                    <FaInstagram className="size-4" />
                                </Link>
                            </div>
                        </div>

                        {/* footer end  */}
                        <aside className="flex flex-col-reverse sm:flex-row sm:justify-between w-full pb-12 text-white">
                            <p className="pt-5 sm:pt-0">© Copyright {new Date().getFullYear()}, - All right reserved</p>

                            <div className="w-full sm:w-fit flex flex-row justify-around gap-8 pb-5 sm:pb-0 border-b sm:border-b-0 border-info">
                                <Link to={"/"}>Privacy Policy</Link>
                                <Link to={"/"}>Terms & Conditions</Link>
                            </div>
                        </aside>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;