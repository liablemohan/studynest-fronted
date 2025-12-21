// Partner Service types

export type PartnerServiceCategory =
    | 'housing'
    | 'banking'
    | 'fast-track'
    | 'subsidy'
    | 'sim-transport'
    | 'job-assistance';

export interface PricingTier {
    id: string;
    name: 'Starter' | 'Survival' | 'Comfort' | 'VIP';
    price: number;
    description: string;
    features: string[];
    isPopular?: boolean;
    deliveryDays: number;
}

export interface PartnerService {
    id: string;
    slug: PartnerServiceCategory;
    title: string;
    shortDescription: string;
    longDescription: string;
    icon: string;
    benefits: string[];
    tiers: PricingTier[];
}
