import { Metadata } from 'next';
import { Zap } from 'lucide-react';
import { PartnerHero } from '@/components/partners/partner-hero';
import { PricingTierCard } from '@/components/partners/pricing-tier-card';
import { getPartnerServiceBySlug } from '@/lib/mock-data/partners';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Fast-Track Processing',
    description: 'Reduce your document processing time from 45 days to just 15 days with our express service.',
};

export default function FastTrackPage() {
    const service = getPartnerServiceBySlug('fast-track');

    if (!service) {
        notFound();
    }

    return (
        <>
            <PartnerHero
                title={service.title}
                description={service.longDescription}
                Icon={Zap}
                benefits={service.benefits}
            />

            {/* Time Comparison */}
            <section className="py-12 bg-primary/5">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-muted-foreground line-through">45 days</div>
                            <p className="text-sm text-muted-foreground mt-2">Standard processing</p>
                        </div>
                        <Zap className="h-12 w-12 text-primary" />
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary">15 days</div>
                            <p className="text-sm text-muted-foreground mt-2">With Fast-Track</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Choose Your Speed</h2>
                        <p className="mt-2 text-muted-foreground">
                            Select how fast you need your documents processed
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
                            { step: 1, title: 'Choose Your Speed', desc: 'Select your processing timeline' },
                            { step: 2, title: 'Submit Documents', desc: 'We review and prepare everything' },
                            { step: 3, title: 'Priority Processing', desc: 'Your case gets expedited handling' },
                            { step: 4, title: 'Fast Delivery', desc: 'Receive your documents on time' },
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
