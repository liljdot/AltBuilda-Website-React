import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface FormDataType {
    firstName: string
    lastName: string
    email: string
    message: string
}

const FormSection: React.FC = () => {
    const [formData, setFormData] = useState<FormDataType>({ firstName: "", lastName: "", email: "", message: "" })

    const handleFormChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleFormSubmit: React.FormEventHandler = e => {
        e.preventDefault()

        // hit submit api here
    }

    return (
        <>
            <section className="bg-base-100 px-4 md:px-25 lg:px-50 xl:px-75 2xl:px-99 py-5 md:py-18">
                <form onSubmit={handleFormSubmit} className="w-full flex flex-col gap-6 md:gap-11">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="w-full flex flex-col gap-1.5">
                            <label className="fieldset-label text-sm md:text-lg text-secondary font-medium">First name</label>
                            <input
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleFormChange}
                                className="input w-full h-12 bg-neutral rounded-lg"
                                placeholder="First name"
                            />
                        </div>

                        <div className="w-full flex flex-col gap-1.5">
                            <label className="fieldset-label text-sm md:text-lg text-secondary font-medium">Last name</label>
                            <input
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleFormChange}
                                className="input w-full h-12 bg-neutral rounded-lg"
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-1.5">
                        <label className="fieldset-label text-sm md:text-lg text-secondary font-medium">Email</label>
                        <input
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleFormChange}
                            className="input w-full h-12 bg-neutral rounded-lg"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-1.5">
                        <label className="fieldset-label text-sm md:text-lg text-secondary font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            className="textarea w-full h-43 bg-neutral rounded-lg"
                            placeholder="Type in a message"
                        />
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