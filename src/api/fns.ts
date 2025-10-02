import rejectJson from "./rejectJson"

const subscribeNewsletter = (email: string) => {
    return fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/Admin/content-mgmt/blogs-newsletter/subscribe`,
        {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

export {
    subscribeNewsletter
}