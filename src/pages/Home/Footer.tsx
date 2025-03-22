import Image from "next/image";
import ActionButton from "./ActionButton";
import signVector from "@/app/assets/sign-vector.png"
import footerLogo from "@/app/assets/footer-logo.png"
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {

    return (
        <>
            <div className="w-full bg-[#161616]">
                <div className="max-w-450 mx-auto">
                    <footer className="footer footer-horizontal footer-center relative text-base-content py-0 px-34 z-100 before:absolute before:-translate-y-[50%] before:h-[66%] before:w-[120%] before:bg-[#161616] before:rounded-t-[50%] before:-z-1">
                        {/* footer start  */}
                        <nav className="flex flex-col w-full text-white">
                            <h3 className="text-5xl font-bold text-white">Your Business Journey Starts Here</h3>

                            <div className="flex flex-row gap-7 mt-15">
                                <ActionButton to="/signup" filled>Sign Up Today</ActionButton>

                                <ActionButton to="/login" >Login</ActionButton>
                            </div>

                            <div className="flex flex-row w-full px-34 justify-end mt-7">
                                <Image src={signVector} width={240} alt="sign" />
                            </div>
                        </nav>

                        {/* footer center  */}
                        <div className="navbar flex flex-row justify-between border-b-gray-700 border-b pb-6">
                            <Link href={"/"}>
                                <Image src={footerLogo} alt="AltBuilda Logo" width={97} />
                            </Link>

                            <nav className="grid grid-flow-col gap-11 text-white text-[1rem] font-semibold p-0">
                                <Link href={"/about"} className="link link-hover hover:text-primary">About</Link>
                                <Link href={"/services"} className="link link-hover hover:text-primary">Services</Link>
                                <Link href={"/blog"} className="link link-hover hover:text-primary">Blog</Link>
                                <Link href={"/faq"} className="link link-hover hover:text-primary">FAQ</Link>
                                <Link href={"/contact"} className="link link-hover hover:text-primary">Contact</Link>
                            </nav>

                            <div className="flex flex-row gap-8.5 p-0 text-white b">
                                <Link href={"x.com/"}>
                                    <FaTwitter className="size-4" />
                                </Link>

                                <Link href={"facebook.com/"}>
                                    <FaFacebookF className="size-4" />
                                </Link>

                                <Link href={"instagram.com/"}>
                                    <FaInstagram className="size-4" />
                                </Link>
                            </div>
                        </div>

                        {/* footer end  */}
                        <aside className="flex flex-row justify-between w-full pb-12 text-white">
                            <p>© Copyright {new Date().getFullYear()}, - All right reserved</p>

                            <div className="flex flex-row gap-8">
                                <Link href={"/"}>Privacy Policy</Link>
                                <Link href={"/"}>Terms & Conditions</Link>
                            </div>
                        </aside>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;