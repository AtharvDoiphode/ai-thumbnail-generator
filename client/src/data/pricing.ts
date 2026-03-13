import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 15,
        period: "month",
        features: [
            "50 AI Thubnails/mo",
            "Basic Templates",
            "Standard Resolution",
            "No Watermark",
            "Email Support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 45,
        period: "month",
        features: [
            "Unlimited Ai Thumbnails",
            "Premium Templates",
            "4k Resolution",
            "A/B Testing Tools",
            "Priority Support",
            "Custom Fonts",
            "Brand Kit Analysis"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 75,
        period: "month",
        features: [
            "Everything in Pro",
            "API Access",
            "Team Collaboration",
            "Custom Branding",
            "Dedicated Account Manager"
        ],
        mostPopular: false
    }
];