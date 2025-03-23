import { BlogPost } from "../types";
import lowCostBlogImage from "../assets/low-cost-blog-img.png"
import postcardMarketingImage from "../assets/postcard-marketing-img.png"
import thanksBlogImage from "../assets/thanks-blog-image.png"

const templateBlogPosts: BlogPost[] = [
    {
        id: "1",
        title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
        subject: "Networking",
        body: [
            {
                subtitle: "Introduction",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
            },
            {
                subtitle: "Software and tools",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
            },
            {
                subtitle: "Other resources",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
            }
        ],
        conclusion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus.",
        author: {
            name: "Olivia Rhye",
        },
        date: new Date(),
        image: lowCostBlogImage
    },

    {
        id: "2",
        title: "Postcard Marketing: The Definitive Guide to High ROI [2022]",
        subject: "Marketing",
        image: postcardMarketingImage,
        body: [
            {
                subtitle: "Introduction",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
            },
            {
                subtitle: "Software and tools",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
            },
            {
                subtitle: "Other resources",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
            }
        ],
        conclusion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus.",
        author: {
            name: "Olivia Rhye",
        },
        date: new Date(),
    },
    {
        id: "3",
        title: "The Ultimate Guide to Thank You Notes for Ecommerce",
        image: thanksBlogImage,
        body: [
            {
                subtitle: "Introduction",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
            },
            {
                subtitle: "Software and tools",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
            },
            {
                subtitle: "Other resources",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus."
            }
        ],
        conclusion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum aut mollitia dolore provident vitae numquam officiis voluptates at possimus reprehenderit magni repellendus dolorum eligendi eveniet quas asperiores, eaque quisquam magnam consectetur, repudiandae est debitis et recusandae. Nostrum quo debitis nam incidunt laudantium iusto eius consequatur rerum quibusdam numquam? Necessitatibus.",
        author: {
            name: "Olivia Rhye",
        },
        date: new Date(),
        subject: "Commerce"
    }
]

export default templateBlogPosts