import { Link } from "react-router-dom"
import bannerGifBG from "../../assets/contact-gif-bg.gif"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const ContactBanner: React.FC = () => {

    return (
        <>
            <section className="w-full bg-cover bg-no-repeat flex flex-row justify-between px-14 py-9" style={{ backgroundImage: `url(${bannerGifBG})` }}>
                <div className="flex flex-col gap-3">
                    <p className="text-primary">Get Started</p>

                    <h3 className="text-5xl/15 text-secondary font-bold">
                        Get in touch with us.
                        <br />
                        We're here to assist you.
                    </h3>
                </div>

                <div className="flex flex-col gap-6 self-center py-9">
                    <Link to={""} className="size-12.5 border border-secondary rounded-full flex justify-center items-center">
                        <FaFacebookF className="size-3.5" />
                    </Link>

                    <Link to={""} className="size-12.5 border border-secondary rounded-full flex justify-center items-center">
                        <FaInstagram className="size-3.5" />
                    </Link>

                    <Link to={""} className="size-12.5 border border-secondary rounded-full flex justify-center items-center">
                        <FaTwitter className="size-3.5" />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default ContactBanner