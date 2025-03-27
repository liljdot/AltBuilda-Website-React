import { IoIosArrowRoundForward } from "react-icons/io";

const FormSection: React.FC = () => {

    return (
        <>
            <section className="bg-base-100 px-99  py-18">
                <form className="w-full flex flex-col gap-11">
                    <div className="flex flex-row gap-8">
                        <div className="w-full">
                            <label className="fieldset-label text-lg text-secondary font-medium">First name</label>
                            <input type="text" className="input w-full h-12 bg-neutral rounded-lg" placeholder="First name" />
                        </div>

                        <div className="w-full">
                            <label className="fieldset-label text-lg text-secondary font-medium">Last name</label>
                            <input type="text" className="input w-full h-12 bg-neutral rounded-lg" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="fieldset-label text-lg text-secondary font-medium">Email</label>
                        <input type="text" className="input w-full h-12 bg-neutral rounded-lg" placeholder="you@company.com" />
                    </div>

                    <div className="w-full">
                        <label className="fieldset-label text-lg text-secondary font-medium">Message</label>
                        <textarea className="textarea w-full h-43 bg-neutral rounded-lg" placeholder="Type in a message" />
                    </div>

                    <div className="flex flex-row justify-center">
                        <button className={`btn btn-submit bg-primary text-secondary border border-primary w-38 sm:w-47 md:w-60 2xl:w-65 rounded-full text-[0.65rem] sm:text-sm md:text-xl font-medium py-6.5 px-2 shadow-none hover:scale-105 transition-all ease-in-out duration-500 hover:[&>*]:translate-x-2`}>
                            Leave a message
                            <IoIosArrowRoundForward className={`text-secondary size-8 transition-all ease-in-out duration-500`} />
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default FormSection;