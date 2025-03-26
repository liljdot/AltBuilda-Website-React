import { FAQ } from "../types"

//import icon images from assets or add url string for icons
import messageIcon from "../assets/message-icon.png"
import messageIconDark from "../assets/message-icon-dark.png"

import subscriptionIcon from "../assets/subscription-icon.png"
import subscriptionIconDark from "../assets/subscription-icon-dark.png"

import registrationIcon from "../assets/registration-icon.png"
import registrationIconDark from "../assets/registration-icon-dark.png"

import invoicingIcon from "../assets/invoicing-icon.png"
import invoicingIconDark from "../assets/invoicing-icon-dark.png"

import marketHubIcon from "../assets/market-hub-icon.png"
import marketHubIconDark from "../assets/market-hub-icon-dark.png"

import complianceIcon from "../assets/compliance-icon.png"
import complianceIconDark from "../assets/compliance-icon-dark.png"

export interface FAQGroup {
    name: string
    icons?: {
        dark: string
        light: string
    }
    FAQs: FAQ[]
}

export const FAQGroups: FAQGroup[] = [
    {
        name: "General Account & Profile Management",
        icons: {
            dark: messageIconDark,
            light: messageIcon
        },
        FAQs: [
            {
                question: "Is there a free trial available?",
                answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            },

            {
                question: "Can I change my plan later?",
                answer: ""
            },
            {
                question: "What is your cancellation policy?",
                answer: ""
            },
            {
                question: "Can other info be added to an invoice?",
                answer: ""
            },
            {
                question: "How does billing work?",
                answer: ""
            },
            {
                question: "How do I change my account email?",
                answer: ""
            }
        ]

    },

    {
        name: "Subscription & Plans",
        icons: {
            light: subscriptionIcon,
            dark: subscriptionIconDark
        },
        FAQs: []
    },

    {
        name: "Business Registration & CAC Verification",
        icons: {
            light: registrationIcon,
            dark: registrationIconDark
        },
        FAQs: []
    },

    {
        name: "Invoicing & Financial Tools",
        icons: {
            light: invoicingIcon,
            dark: invoicingIconDark
        },
        FAQs: []
    },

    {
        name: "Market Hub & Business Networking",
        icons: {
            light: marketHubIcon,
            dark: marketHubIconDark
        },
        FAQs: []
    },

    {
        name: "Tax Compliance, Filing Notifications, Credit Facility & Alerts",
        icons: {
            light: complianceIcon,
            dark: complianceIconDark
        },
        FAQs: []
    }
]