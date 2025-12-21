import { Metadata } from 'next';
import { Building2 } from 'lucide-react';
import { PartnerHero } from '@/components/partners/partner-hero';
import { PricingTierCard } from '@/components/partners/pricing-tier-card';
import { getPartnerServiceBySlug } from '@/lib/mock-data/partners';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Banking & Account Activation',
    description: 'Open your bank account hassle-free with expert guidance and support.',
};

export default function BankingPage() {
    const service = getPartnerServiceBySlug('banking');

    if (!service) {
        notFound();
    }

    return (
        <>
            <PartnerHero
                title={service.title}
                description={service.longDescription}
                Icon={Building2}
                benefits={service.benefits}
            />

            {/* Pricing Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
                        <p className="mt-2 text-muted-foreground">
                            Select the package that best fits your banking needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.tiers.map((tier) => (
                            <PricingTierCard
                                key={tier.id}
                                tier={tier}
                                serviceSlug={service.slug}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">How It Works</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: 1, title: 'Choose Your Plan', desc: 'Select the tier that matches your needs' },
                            { step: 2, title: 'Document Collection', desc: 'We help gather required documents' },
                            { step: 3, title: 'Bank Appointment', desc: 'We schedule and accompany you' },
                            { step: 4, title: 'Account Active', desc: 'Your account is ready to use' },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
