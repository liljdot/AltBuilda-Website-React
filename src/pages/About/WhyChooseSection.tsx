import { ReactNode } from "react";
import cardFloaterImage1 from "../../assets/card-floater-image-1.png"
import cardFloaterImage2 from "../../assets/card-floater-image-2.png"
import cardFloaterImage3 from "../../assets/card-floater-image-3.png"
import cardFloaterImage4 from "../../assets/card-floater-image-4.png"
import cardFloaterImage5 from "../../assets/card-floater-image-5.png"
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {

    return <div className="card-body relative bg-neutral rounded-xl py-5 md:py-8 px-8 md:pl-8 md:pr-28 gap-1 z-2">{children}</div>
}

const WhyChooseSection: React.FC = () => {

    return (
        <>
            <section className="bg-success py-11.5 md:py-30 relative z-0">
                <div className="flex flex-col gap-3 text-secondary text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Why Choose Bold by ALT</h1>

                    <p className="md:text-lg">The Bold by ALT Advantages.</p>
                </div>

                <div className="px-6 md:px-25 lg:px-50 xl:px-100 mt-11 md:mt-23.5 relative z-1">
                    <div className="flex flex-col gap-6 relative">
                        <img src={cardFloaterImage1} alt="floatie" className="absolute size-29 md:size-52 -right-20 md:-right-35 -top-20 md:-top-35 z-3" />
                        <img src={cardFloaterImage2} alt="floatie" className="absolute size-31 md:size-44 -left-18 md:-left-35 -top-18 md:top-[8%] z-1" />
                        <img src={cardFloaterImage3} alt="floatie" className="absolute w-36 md:w-60 -right-15 md:-right-35 top-[45%] md:top-[40%] z-3" />
                        <img src={cardFloaterImage4} alt="floatie" className="absolute w-44 md:w-81 -left-15 md:-left-40 bottom-[18%] md:bottom-[7%] z-3" />
                        <img src={cardFloaterImage5} alt="floatie" className="absolute hidden md:block w-59 -right-35 -bottom-35 z-3" />
                        <Card>
                            <h2 className="card-title text-xl md:text-2xl">SME Focused</h2>
                            <p className="md:text-xl">
                                Bold by ALT is built specifically for SMEs, providing practical and effective solutions tailored to your needs.
                            </p>
                        </Card>

                        <Card>
                            <h2 className="card-title text-xl md:text-2xl">
                                Secure and Reliable
                            </h2>

                            <p className="md:text-xl">
                                We prioritize the security, compliance, and accuracy of your business operations.
                            </p>
                        </Card>

                        <Card>


                            <h2 className="card-title text-xl md:text-2xl">
                                Community Support
                            </h2>

                            <p className="md:text-xl">
                                Join a network of entrepreneurs and business professionals to collaborate and grow.
                            </p>
                        </Card>

                        <Card>
                            <h2 className="card-title text-xl md:text-2xll">
                                Scalable Growth
                            </h2>

                            <p className="md:text-xl">
                                Our platform is designed to grow with your business, from startup to established enterprise.
                            </p>
                        </Card>
                    </div>

                    <div className="flex flex-row justify-center mt-10 mb-15 md:mb-0 md:mt-17 2xl:px-31">
                        <Link to={"/services"} className="w-full sm:w-fit btn btn-secondary text-sm sm:text-[1rem] text-neutral rounded-full font-semibold p-7 hover:scale-105 transition-all ease-in-out duration-500 hover:[&>*]:translate-x-2 active:scale-95">
                            See how Bold by ALT can help You
                            <IoIosArrowRoundForward className="size-8 transition-all ease-in-out duration-500" />
                        </Link>
                    </div>
                </div>

                <div className="absolute size-120 bg-error rounded-full -bottom-60 -right-60"></div>
            </section>
        </>
    )
}

export default WhyChooseSection;