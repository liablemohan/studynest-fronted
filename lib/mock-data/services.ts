import { Service } from '@/lib/types';

export const services: Service[] = [
    {
        id: 'srv_001',
        title: 'Student Visa Assistance',
        description: 'Complete visa application support including document preparation, form filling, interview preparation, and embassy appointment scheduling. Our experts ensure your application is error-free and submitted on time.',
        category: 'Legal',
        price: 299,
        delivery_days: 14,
        features: [
            'Document checklist and verification',
            'Application form assistance',
            'Interview preparation guide',
            'Embassy appointment scheduling',
            'Real-time application tracking',
        ],
        is_active: true,
        rating: 4.8,
        reviews_count: 156,
    },
    {
        id: 'srv_002',
        title: 'Airport Pickup Service',
        description: 'Reliable airport pickup service with meet & greet. We track your flight and ensure a driver is waiting for you when you arrive. Includes help with luggage and city orientation tips.',
        category: 'Transportation',
        price: 75,
        delivery_days: 1,
        features: [
            'Flight tracking included',
            'Meet & greet at arrivals',
            'Luggage assistance',
            'City orientation tips',
            'Direct drop to accommodation',
        ],
        is_active: true,
        rating: 4.9,
        reviews_count: 312,
    },
    {
        id: 'srv_003',
        title: 'Student Housing Package',
        description: 'Find your perfect student accommodation with our housing assistance. We help you search, verify, and secure housing near your university with no hidden fees.',
        category: 'Accommodation',
        price: 199,
        delivery_days: 7,
        features: [
            'Personalized housing search',
            'Virtual property tours',
            'Lease review and negotiation',
            'Move-in checklist',
            '30-day support after move-in',
        ],
        is_active: true,
        rating: 4.7,
        reviews_count: 89,
    },
    {
        id: 'srv_004',
        title: 'Student Bank Account Setup',
        description: 'Easy bank account opening for international students. We guide you through the documentation, help you choose the best bank for students, and schedule your appointment.',
        category: 'Financial',
        price: 49,
        delivery_days: 5,
        features: [
            'Bank comparison and recommendation',
            'Document preparation',
            'Appointment scheduling',
            'Form filling assistance',
            'First month banking guide',
        ],
        is_active: true,
        rating: 4.6,
        reviews_count: 234,
    },
    {
        id: 'srv_005',
        title: 'Health Insurance Enrollment',
        description: 'Get comprehensive health insurance that meets your university requirements. We compare plans, explain coverage, and help you enroll in the best option for your needs.',
        category: 'Healthcare',
        price: 79,
        delivery_days: 3,
        features: [
            'Plan comparison (5+ providers)',
            'Coverage explanation',
            'Enrollment assistance',
            'ID card delivery tracking',
            'Claims filing guide',
        ],
        is_active: true,
        rating: 4.5,
        reviews_count: 167,
    },
    {
        id: 'srv_006',
        title: 'SIM Card & Phone Setup',
        description: 'Stay connected from day one. We help you choose the best mobile plan, get your SIM activated, and set up your phone with all essential apps and services.',
        category: 'Connectivity',
        price: 35,
        delivery_days: 1,
        features: [
            'Plan comparison',
            'SIM card procurement',
            'Number activation',
            'Essential apps setup',
            'International calling setup',
        ],
        is_active: true,
        rating: 4.8,
        reviews_count: 445,
    },
    {
        id: 'srv_007',
        title: 'Monthly Transit Pass',
        description: 'Get your monthly transit pass without the hassle. We help you understand the transit system, apply for student discounts, and get your pass delivered.',
        category: 'Transportation',
        price: 25,
        delivery_days: 2,
        features: [
            'Transit system orientation',
            'Student discount application',
            'Pass procurement',
            'Route planning assistance',
            'Digital pass setup (if available)',
        ],
        is_active: true,
        rating: 4.7,
        reviews_count: 198,
    },
    {
        id: 'srv_008',
        title: 'Legal Document Translation',
        description: 'Certified translation of your official documents. We handle academic transcripts, certificates, and legal documents with notarized translations accepted by all institutions.',
        category: 'Legal',
        price: 149,
        delivery_days: 5,
        features: [
            'Certified translators',
            'Notarized translations',
            'Academic documents',
            'Legal certificates',
            'Express delivery available',
        ],
        is_active: true,
        rating: 4.9,
        reviews_count: 276,
    },
];

export function getServiceById(id: string): Service | undefined {
    return services.find((service) => service.id === id);
}

export function getServicesByCategory(category: string): Service[] {
    return services.filter((service) => service.category === category);
}

export function getActiveServices(): Service[] {
    return services.filter((service) => service.is_active);
}

export function searchServices(query: string): Service[] {
    const lowerQuery = query.toLowerCase();
    return services.filter(
        (service) =>
            service.title.toLowerCase().includes(lowerQuery) ||
            service.description.toLowerCase().includes(lowerQuery) ||
            service.category.toLowerCase().includes(lowerQuery)
    );
}
