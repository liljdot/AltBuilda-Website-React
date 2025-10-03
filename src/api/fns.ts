import rejectJson from "./rejectJson"

const baseURL = import.meta.env.VITE_API_BASE_URL

export interface GetPrivacyPolicyResponse {
    "success": boolean
    "message": string
    "remainingDraftsToGenerate": number
    "statusCode": number
    "result": {
        "title": string
        "introduction": string
        "sections": {
            "id": string
            "title": string
            "content": string
            "order": number
        }[]
    }
}

const subscribeNewsletter = (email: string) => {
    return fetch(
        `${baseURL}/api/v1/Admin/content-mgmt/blogs-newsletter/subscribe`,
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

const getPrivacyPolicy = () => {
    return fetch(`${baseURL}/api/v1/Content/privacy-policy`)
        .then(res => !res.ok ? rejectJson : res.json())
}

export {
    subscribeNewsletter,
    getPrivacyPolicy
}