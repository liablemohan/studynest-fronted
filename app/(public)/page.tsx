import Link from 'next/link';
import { ArrowRight, Shield, Clock, HeadphonesIcon, CheckCircle, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceCard } from '@/components/services/service-card';
import { services } from '@/lib/mock-data/services';

const features = [
    {
        icon: Shield,
        title: 'Verified Vendors',
        description: 'All our service providers are thoroughly vetted and verified for your safety.',
    },
    {
        icon: Clock,
        title: 'Fast & Easy',
        description: 'Get services delivered quickly with our streamlined process.',
    },
    {
        icon: HeadphonesIcon,
        title: '24/7 Support',
        description: 'Our support team is always available to help you with any questions.',
    },
];

const howItWorks = [
    { step: 1, title: 'Browse Services', description: 'Explore our wide range of services for international students.' },
    { step: 2, title: 'Choose & Purchase', description: 'Select the service you need and complete a secure checkout.' },
    { step: 3, title: 'Upload Documents', description: 'Submit any required documents through our secure portal.' },
    { step: 4, title: 'Receive Delivery', description: 'Get your service delivered on time, every time.' },
];

const testimonials = [
    {
        name: 'Priya Sharma',
        university: 'Stanford University',
        country: 'India',
        text: 'StudyNest made my transition to the US so much easier. The visa assistance was invaluable!',
        rating: 5,
    },
    {
        name: 'Wei Chen',
        university: 'MIT',
        country: 'China',
        text: 'The airport pickup service was fantastic. My driver was waiting right when I landed.',
        rating: 5,
    },
    {
        name: 'Carlos Rodriguez',
        university: 'UC Berkeley',
        country: 'Mexico',
        text: 'Found my perfect apartment through their housing package. Highly recommended!',
        rating: 5,
    },
];

export default function HomePage() {
    const popularServices = services.slice(0, 4);

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fadeIn">
                            Your Journey Abroad,{' '}
                            <span className="text-primary">Made Simple</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground animate-fadeIn">
                            StudyNest connects international students with trusted local service
                            vendors for everything you need – from visa assistance to housing,
                            transportation, and beyond.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
                            <Link href="/services">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Explore Services
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                    Create Account
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </section>

            {/* Features Section */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Why Choose StudyNest?</h2>
                        <p className="mt-2 text-muted-foreground">
                            We're dedicated to making your international student experience seamless.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <Card key={feature.title} className="text-center card-hover">
                                <CardContent className="pt-8 pb-6">
                                    <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <feature.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Services Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl font-bold">Popular Services</h2>
                            <p className="mt-2 text-muted-foreground">
                                Most requested services by international students.
                            </p>
                        </div>
                        <Link href="/services">
                            <Button variant="outline">
                                View All Services
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">How It Works</h2>
                        <p className="mt-2 text-muted-foreground">
                            Get started in just a few simple steps.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {howItWorks.map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">What Students Say</h2>
                        <p className="mt-2 text-muted-foreground">
                            Hear from students who've used our services.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.name} className="card-hover">
                                <CardContent className="pt-6">
                                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                                    <p className="text-muted-foreground italic">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex gap-1 mt-4">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t">
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.university} • {testimonial.country}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary text-primary-foreground">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                    <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
                        Join thousands of international students who trust StudyNest for their
                        essential services. Sign up today and make your journey easier.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup">
                            <Button size="lg" variant="secondary">
                                Create Free Account
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                            >
                                Browse Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
