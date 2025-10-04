import { useMutation } from "@tanstack/react-query"
import { EventHandler, SyntheticEvent, useState } from "react"
import { unsubscribeNewsletter } from "../../api/fns"
import toast from "react-hot-toast"

const UnsubscribeForm: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [unsubscribed, setUnsubscribed] = useState<boolean>(false)
    const { isPending, mutate } = useMutation({
        mutationFn: () => unsubscribeNewsletter(email),
        onSuccess: () => {
            toast.success("Unsubscibed")
            setUnsubscribed(true)
        },
        onError: err => {
            toast.error(err.message || "Something went wrong. Please try again")
        }
    })

    const handleSubmit: EventHandler<SyntheticEvent> = e => {
        e.preventDefault()

        if (!email) {
            return toast.error("Please enter your email")
        }

        mutate()
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            {
                !unsubscribed ? (
                    <>
                        <p className="mt-2">
                            Sorry to see you go. Enter your email below to unsubscribe from our weekly updates.
                        </p>

                        <div className="w-full flex flex-col">
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="input w-full h-11 bg-neutral rounded-lg"
                                placeholder="Enter your Email"
                                required
                            />
                        </div>

                        <div className="flex w-full">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="btn btn-submit btn-primary text-neutral rounded-lg w-full shadow-none"
                            >
                                {
                                    isPending
                                        ? <span className="loading loading-spinner text-primary"></span>
                                        : "Unsubscribe"
                                }
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="w-full flex flex-col">
                        <p className="mt-2 text-success font-medium">
                            You have been successfully unsubscribed.
                        </p>
                    </div>
                )
            }
        </form>
    )
}

export default UnsubscribeForm
