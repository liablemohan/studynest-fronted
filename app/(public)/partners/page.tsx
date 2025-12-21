import Link from 'next/link';
import { Metadata } from 'next';
import { Home, Building2, Zap, Receipt, Smartphone, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { partnerServices } from '@/lib/mock-data/partners';

export const metadata: Metadata = {
    title: 'Partner Services',
    description: 'Comprehensive partner services for international students - Housing, Banking, Fast-Track Processing, and more.',
};

const iconMap = {
    Home,
    Building2,
    Zap,
    Receipt,
    Smartphone,
    Briefcase,
};

export default function PartnersPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-16 lg:py-24">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Partner{' '}
                            <span className="text-primary">Services</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Comprehensive support packages designed specifically for international students.
                            Choose from Starter, Survival, Comfort, or VIP tiers to match your needs and budget.
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partnerServices.map((service) => {
                            const Icon = iconMap[service.icon as keyof typeof iconMap] || Home;
                            const lowestPrice = Math.min(...service.tiers.map(t => t.price));

                            return (
                                <Card key={service.id} className="group card-hover flex flex-col">
                                    <CardHeader>
                                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                            <Icon className="h-7 w-7 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <p className="text-muted-foreground flex-1">
                                            {service.shortDescription}
                                        </p>
                                        <div className="mt-4 pt-4 border-t">
                                            <div className="flex items-baseline justify-between mb-4">
                                                <span className="text-sm text-muted-foreground">Starting from</span>
                                                <span className="text-2xl font-bold">€{lowestPrice}</span>
                                            </div>
                                            <Link href={`/partners/${service.slug}`}>
                                                <Button className="w-full group">
                                                    View Plans
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold">Not Sure Which Plan to Choose?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Our team is here to help you find the perfect package for your needs.
                        Contact us for a free consultation.
                    </p>
                    <div className="mt-8">
                        <Link href="/signup">
                            <Button size="lg" variant="outline">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
