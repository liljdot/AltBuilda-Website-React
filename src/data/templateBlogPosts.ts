import { BlogPost } from "../types";
// import lowCostBlogImage from "../assets/low-cost-blog-img.png"
// import postcardMarketingImage from "../assets/postcard-marketing-img.png"
// import thanksBlogImage from "../assets/thanks-blog-image.png"
import howToRegisterBlogImage from "../assets/how-to-register-blog-image.png"

const templateBlogPosts: BlogPost[] = [
    {
        id: "1",
        title: "How to Register Your Business in Nigeria (Without Losing Your Mind)",
        subject: "General",
        image: howToRegisterBlogImage,
        body: [
            {
                type: "SUBTITLE",
                content: "Introduction",
            },
            {
                type: "PARAGRAPH",
                content: "Starting a business in Nigeria is a big deal — but getting it officially registered with the Corporate Affairs Commission (CAC) can feel like a confusing maze. Good news? It doesn’t have to be. \n\nIn this step-by-step guide, we’ll break down the CAC registration process in plain English, so you can handle it like a boss — or let Altbuilda handle it for just ₦20,000."

            },
            {
                type: "LINEBREAK"
            },
            {
                type: "SUBTITLE",
                content: "Why You Need to Register Your Business"
            },
            {
                type: "PARAGRAPH",
                content: "Registering your business isn’t just for bragging rights. It comes with real benefits: \n\nCredibility: Customers trust registered businesses more. \n\nAccess to funding: Most grants, loans, and investor opportunities require CAC docs. \n\nBusiness growth: You can open a business bank account, get contracts, and operate formally."
            },
            {
                type: "LINEBREAK"
            },
            {
                type: "SUBTITLE",
                content: "Here’s What You’ll Need"
            },
            {
                type: "PARAGRAPH",
                content: "Before you dive in, have these ready: \n\nProposed business name(s) (2 options) \n\nBusiness address \n\nYour full name, phone number, and email \n\nValid means of ID \n\nTwo passport photos \n\nNature of business (i.e. what you do)"
            },
            {
                type: "LINEBREAK"
            },
            {
                type: "SUBTITLE",
                content: "Step-by-Step: CAC Registration Process"
            },
            {
                type: "HEADING",
                content: "1. Name Availability Search"
            },
            {
                type: "PARAGRAPH",
                content: "Submit your two proposed business names to see if they’re available. If one is taken, CAC will approve the other."
            },
            {
                type: "HEADING",
                content: "2. Fill in Business Details"
            },
            {
                type: "PARAGRAPH",
                content: "Once a name is approved, you'll provide more details like your address, business activities, and owners’ information."
            },
            {
                type: "HEADING",
                content: "3. Upload Required Documents"
            },
            {
                type: "PARAGRAPH",
                content: "You’ll be asked to upload your passport photo, ID, and signature. Make sure all docs are clear and match the info you submitted."
            },
            {
                type: "HEADING",
                content: "4. Pay the Registration Fee"
            },
            {
                type: "PARAGRAPH",
                content: "CAC’s registration fee varies based on your business type. With Altbuilda, you get everything sorted for just ₦20,000 (including processing!)."
            },
            {
                type: "HEADING",
                content: "5. Download Your Certificate"
            },
            {
                type: "PARAGRAPH",
                content: "Once approved, you’ll receive your CAC Certificate and Business Name Extract — your official proof of registration."
            },
            {
                type: "LINEBREAK"
            },
            {
                type: "SUBTITLE",
                content: "Pro Tips to Avoid CAC Rejection"
            },
            {
                type: "ULIST",
                content: [
                    "Double-check name spelling and info before submitting.",
                    "Use clear, professional-sounding names (no slang or restricted words).",
                    "Make sure your ID is valid and matches the name on your application.",
                    "Upload documents in the correct format (usually PDF or JPEG)."
                ]
            },
            {
                type: "LINEBREAK"
            },
            {
                type: "SUBTITLE",
                content: "Or… Let Altbuilda Handle It For You"
            },
            {
                type: "PARAGRAPH",
                content: "We get it — not everyone wants to deal with the CAC portal and document drama. That’s why Altbuilda offers full CAC registration support for just ₦20,000. \n \nWe’ll take care of:"
            },
            {
                type: "ULIST",
                content: [
                    "Name reservation",
                    "Document submission",
                    "Filing with CAC",
                    "Real-time updates"
                ]
            }
        ],
        conclusion: [
            {
                type: "SUBTITLE",
                content: "Ready to Register Your Business the Smart Way?"
            },
            {
                type: "PARAGRAPH",
                content: "Don’t let paperwork slow down your hustle."
            }
        ],
        action: {
            text: "Start your CAC process on Altbuilda today",
            link: ""
        },
        author: {
            name: "Olivia Rhye",
        },
        date: new Date(2024, 0, 20),
    }
    // {
    //     id: "1",
    //     title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
    //     subject: "Networking",
    //     body: [
    //         {
    //             subtitle: "Introduction",
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
    //         },
    //         {
    //             subtitle: "Software and tools",
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
    //         },
    //         {
    //             subtitle: "Other resources",
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
    //         }
    //     ],
    //     conclusion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus.",
    //     author: {
    //         name: "Olivia Rhye",
    //     },
    //     date: new Date(),
    //     image: lowCostBlogImage
    // },

    // {
    //     id: "2",
    //     title: "Postcard Marketing: The Definitive Guide to High ROI [2022]",
    //     subject: "Marketing",
    //     image: postcardMarketingImage,
    //     body: [
    //         {
    //             subtitle: "Introduction",
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
    //         },
    //         {
    //             subtitle: "Software and tools",
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
    //         },
    //         {
    //             subtitle: "Other resources",
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
    //         }
    //     ],
    //     conclusion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus.",
    //     author: {
    //         name: "Olivia Rhye",
    //     },
    //     date: new Date(),
    // },
    // {
    //     id: "3",
    //     title: "The Ultimate Guide to Thank You Notes for Ecommerce",
    //     image: thanksBlogImage,
    //     body: [
    //         {
    //             subtitle: "Introduction",
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
    //         },
    //         {
    //             subtitle: "Software and tools",
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
    //         },
    //         {
    //             subtitle: "Other resources",
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
    //         }
    //     ],
    //     conclusion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus.",
    //     author: {
    //         name: "Olivia Rhye",
    //     },
    //     date: new Date(),
    //     subject: "Commerce"
    // }
]

export default templateBlogPosts