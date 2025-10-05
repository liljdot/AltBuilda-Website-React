import rejectJson from "./rejectJson"

const baseURL = import.meta.env.VITE_API_BASE_URL

export interface GetPrivacyPolicyResponse {
    "success": boolean
    "message": string
    "remainingDraftsToGenerate": number | null
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

export interface GetBlogPostsResponse {
    "success": boolean
    "message": string
    "remainingDraftsToGenerate": number | null
    "statusCode": number
    "result": {
        "items": {
            "id": string
            "title": string
            "author": string
            "coverImageUrl": string
            "authorImageUrl": string
            "category": string
            "status": string
            "createdAt": string
            "updatedAt": string
            "publishedAt": string
        }[]
        "page": number
        "pageSize": number
        "totalCount": number
    }
}

export type GetTermsAndConditionsResponse = GetPrivacyPolicyResponse

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

const unsubscribeNewsletter = (email: string) => {
    return fetch(
        `${baseURL}/api/v1/Admin/content-mgmt/blogs-newsletter/unsubscribe`,
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
const getBlogPosts = () => {
    return fetch(`${baseURL}/api/v1/Admin/content-mgmt/blogs-newsletter`)
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

const getPrivacyPolicy = () => {
    return fetch(`${baseURL}/api/v1/Content/privacy-policy`)
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

const getTermsAndConditions = () => {
    return fetch(`${baseURL}/api/v1/Content/terms-conditions`)
        .then(res => !res.ok ? rejectJson(res) : res.json())
}

export {
    subscribeNewsletter,
    unsubscribeNewsletter,
    getBlogPosts,
    getPrivacyPolicy,
    getTermsAndConditions
}