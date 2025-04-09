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
                question: "What is Altbuilda?",
                answer: "Altbuida is a digital business platform by Alternative Bank that helps SMEs manage invoicing, tax compliance, business analytics, and networking in one place."
            },

            {
                question: "Who can use Altbuilda?",
                answer: "Altbuida is designed for entrepreneurs, small business owners, freelancers, and consultants looking to streamline business operations and grow their ventures."
            },
            {
                question: "How can I sign up for Altbuilda",
                answer: "You can sign up directly by creating an account and selecting a subscription plan that fits your business needs."
            },
            {
                question: "What does the “verified by Alt” badge mean?",
                answer: "It’s a mark of credibility for businesses who meet our verification criteria. It increases trust and visibility within the Market Hub (launching soon)."
            },
            {
                question: "Do I need to be an alternative bank customer to use Altbuilda?",
                answer: "No. Altbuida is open to all SMEs, regardless of where you bank."
            },
            {
                question: "How often does Altbuilda updates its features?",
                answer: "We’re continuously improving. Updates and new features roll out regularly based on user feedback and business trends."
            },
            {
                question: "Is my data safe on Altbuilda?",
                answer: "Absolutely. We follow strict security protocols including encryption, access controls, and compliance with Nigeria’s Data Protection Regulations (NDPR)."
            },
            {
                question: "Can I manage multiple businesses under one account?",
                answer: "Currently, Altbuida supports one business per account. However, future updates may support multi-business profiles."
            },
            {
                question: "What kind of businesses can use Altbuilda?",
                answer: "Any small to medium-sized business—from fashion brands to food vendors to consultants—can benefit from using Altbuida."
            },
            {
                question: "Does Altbuilda offer customer support?",
                answer: " Yes, our support team is available via email at help@altbank.ng"
            }
        ]

    },

    {
        name: "Subscription & Plans",
        icons: {
            light: subscriptionIcon,
            dark: subscriptionIconDark
        },
        FAQs: [
            {
                question: "Is Altbuilda free to use?",
                answer: "Yes, we offer a Basic Plan that’s free. However, you can upgrade to the Premium Plan for ₦999/year to unlock more tools and benefits."
            },
            {
                question: "What is included in the premium plan?",
                answer: `The Premium Plan includes unlimited PR campaigns (48hrs/month), tax compliance tools, advanced analytics, access to Market Hub, and a "Verified by Alt" badge (coming soon).`
            },
            {
                question: "Can I cancel my subscription anytime ?",
                answer: "Yes, you can cancel anytime from your dashboard. However, subscription fees are non-refundable."
            },
            {
                question: "What payment options are available for subscriptions?",
                answer: "You can pay using secure payment gateways available on the platform."
            }
        ]
    },

    {
        name: "Business Registration & CAC Verification",
        icons: {
            light: registrationIcon,
            dark: registrationIconDark
        },
        FAQs: [
            {
                question: "Can I register my business with CAC through Altbuilda?",
                answer: " Yes. You can register your business name with the Corporate Affairs Commission (CAC) through Altbuida for ₦20,000."
            }
        ]
    },

    {
        name: "Invoicing & Financial Tools",
        icons: {
            light: invoicingIcon,
            dark: invoicingIconDark
        },
        FAQs: [
            {
                question: "How do I generate invoices on Altbuida?",
                answer: ""
            },
            {
                question: "Can I track busines expenses on Altbuilda?",
                answer: "Yes. The platform offers tools for tracking and categorizing expenses to improve financial visibility."
            }
        ]
    },

    {
        name: "Market Hub & Business Networking",
        icons: {
            light: marketHubIcon,
            dark: marketHubIconDark
        },
        FAQs: [
            {
                question: "What is the Market Hub?",
                answer: "The Market Hub is a digital marketplace on Altbuida where you can network, showcase your business, and find opportunities with other entrepreneurs."
            },
            {
                question: "Can I access loans or credit through  Altbuilda?",
                answer: " Altbuida users (especially Premium users) can gain easier access to credit facilities via Alternative Bank and other financial partners."
            }
        ]
    },

    {
        name: "Tax Compliance, Filing Notifications, Credit Facility & Alerts",
        icons: {
            light: complianceIcon,
            dark: complianceIconDark
        },
        FAQs: [
            {
                question: "Does Altbuilda offer compliance support?",
                answer: "Yes. Our tax tools help you stay compliant and reminding you of important deadlines."
            },
            {
                question: "Can I access loans or credit through  Altbuilda?",
                answer: " Altbuida users (especially Premium users) can gain easier access to credit facilities via Alternative Bank and other financial partners."
            }
        ]
    }
]