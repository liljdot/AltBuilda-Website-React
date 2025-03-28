import { useState } from "react"
import { FiSend } from "react-icons/fi"

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState<string>("")

    const handleSubmit: React.FormEventHandler = e => {
        e.preventDefault()
        // submit form endpoint here
    }

    return (
        <>
            <div className="flex flex-col gap-8 p-6 md:p-8 bg-base-100 rounded-xl border border-info">
                <div className="flex flex-col text-secondary">
                    <div className="flex size-14 p-3.5 justify-center items-center bg-base-100 border border-info rounded-lg">
                        <FiSend className="size-full" />
                    </div>

                    <h5 className="text-xl md:text-2xl font-medium mt-8 md:mt-0">Weekly newsletter</h5>

                    <p className="mt-2">No spams. just weekly updates with exclusive tips and insights on growing your SME.</p>
                </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col">
                        <input
                            name="email"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="input w-full h-11 bg-neutral rounded-lg"
                            placeholder="Enter your Email"
                        />
                    </div>

                    <div className="flex w-full">
                        <button className="btn btn-submit btn-primary text-neutral rounded-lg w-full shadow-none">Subscribe</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewsletterForm