import { Metadata } from 'next';
import { Smartphone } from 'lucide-react';
import { PartnerHero } from '@/components/partners/partner-hero';
import { PricingTierCard } from '@/components/partners/pricing-tier-card';
import { getPartnerServiceBySlug } from '@/lib/mock-data/partners';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'SIM & Transportation',
    description: 'Stay connected and mobile from day one with our comprehensive SIM and transport packages.',
};

export default function SimTransportPage() {
    const service = getPartnerServiceBySlug('sim-transport');

    if (!service) {
        notFound();
    }

    return (
        <>
            <PartnerHero
                title={service.title}
                description={service.longDescription}
                Icon={Smartphone}
                benefits={service.benefits}
            />

            {/* Pricing Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
                        <p className="mt-2 text-muted-foreground">
                            Select the connectivity and mobility package that suits you
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
                            { step: 1, title: 'Choose Your Plan', desc: 'Select your connectivity needs' },
                            { step: 2, title: 'Arrival Coordination', desc: 'We prepare everything before you land' },
                            { step: 3, title: 'SIM Activation', desc: 'Get connected immediately' },
                            { step: 4, title: 'Start Moving', desc: 'Transit pass ready to go' },
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
