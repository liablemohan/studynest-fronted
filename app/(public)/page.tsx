'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Home,
    CreditCard,
    FileText,
    Briefcase,
    HeadphonesIcon,
    CheckCircle,
    Star,
    Quote,
    Sparkles,
    X,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCard } from '@/components/ui/animated-card';
import { GlowButton } from '@/components/ui/glow-button';
import { FloatingElements, ParticleField } from '@/components/ui/floating-elements';
import { AnimatedCounter, StatsCounter } from '@/components/ui/animated-counter';

// 5 Core Services based on StudyNest vision
const coreServices = [
    {
        icon: Home,
        title: 'Verified Housing',
        description: 'Find your perfect home with properties verified for safety, quality, and student-friendly amenities across European cities.',
        cta: 'Find Your Perfect Home',
        ctaLink: '/services?category=housing',
        features: ['500+ Properties', 'All Major Cities', 'Verified Landlords'],
        color: 'from-amber-500 to-orange-500',
    },
    {
        icon: CreditCard,
        title: 'Banking & SIM',
        description: 'Get connected in 24 hours with fast-tracked bank account setup and SIM activation. Same-day processing available.',
        cta: 'Get Connected Fast',
        ctaLink: '/services?category=banking',
        features: ['24hr Setup', 'Top Banks', 'Instant SIM'],
        color: 'from-blue-500 to-indigo-500',
    },
    {
        icon: FileText,
        title: 'Admin Support',
        description: 'Simplify your paperwork with expert assistance for visas, residence permits, and all official documentation.',
        cta: 'Simplify Paperwork',
        ctaLink: '/services?category=admin',
        features: ['100% Accuracy', 'Fast Processing', 'Expert Guidance'],
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: Briefcase,
        title: 'Job Placement',
        description: 'Launch your career with access to part-time jobs, internships, and career counseling from 500+ partner companies.',
        cta: 'Launch Your Career',
        ctaLink: '/services?category=jobs',
        features: ['500+ Partners', 'Part-time Jobs', 'Career Support'],
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: HeadphonesIcon,
        title: 'Personal Assistance',
        description: 'Get dedicated support with a personal assistant available 24/7 to help with any challenges you face.',
        cta: 'Get Support 24/7',
        ctaLink: '/services?category=assistance',
        features: ['24/7 Available', 'Dedicated Agent', 'Any Issue'],
        color: 'from-rose-500 to-red-500',
    },
];

const journeySteps = [
    { step: 1, title: 'Apply & Verify', description: 'Quick registration with document verification' },
    { step: 2, title: 'Choose Services', description: 'Select from our 5 core service categories' },
    { step: 3, title: 'We Handle It', description: 'Our team manages all the details' },
    { step: 4, title: 'Welcome to Europe!', description: 'Start your new life stress-free' },
];

const testimonials = [
    {
        name: 'Priya Sharma',
        university: 'TU Munich',
        country: 'India → Germany',
        text: 'StudyNest made my transition to Germany seamless. From housing to banking, everything was handled perfectly!',
        rating: 5,
        services: ['Housing', 'Banking'],
    },
    {
        name: 'Wei Chen',
        university: 'University of Amsterdam',
        country: 'China → Netherlands',
        text: 'The personal assistant service is incredible. They helped me navigate Dutch bureaucracy like a pro.',
        rating: 5,
        services: ['Admin Support', 'Personal Assistance'],
    },
    {
        name: 'Carlos Rodriguez',
        university: 'Sciences Po Paris',
        country: 'Mexico → France',
        text: 'Found my dream apartment and a part-time job within my first week. StudyNest is a game-changer!',
        rating: 5,
        services: ['Housing', 'Job Placement'],
    },
];

const stats = [
    { value: 10000, label: 'Students Helped', suffix: '+' },
    { value: 50, label: 'European Cities', suffix: '+' },
    { value: 500, label: 'Partner Companies', suffix: '+' },
    { value: 98, label: 'Satisfaction Rate', suffix: '%' },
];

export default function HomePage() {
    const [showFloatingCTA, setShowFloatingCTA] = useState(false);
    const [dismissedCTA, setDismissedCTA] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 40 && !dismissedCTA) {
                setShowFloatingCTA(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dismissedCTA]);

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
                {/* Floating Background Elements */}
                <FloatingElements variant="hero" />
                <ParticleField className="opacity-50" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-sm text-gold mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            Your Complete European Student Solution
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight"
                        >
                            Your Journey to{' '}
                            <span className="gradient-text-gold">Europe</span>
                            <br />
                            <span className="text-primary">Starts Here</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            End-to-end support from verified housing to job placement.
                            We simplify your transition and enrich your educational experience.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link href="/signup">
                                <GlowButton size="lg" variant="gold" className="w-full sm:w-auto">
                                    Start Your Journey
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </GlowButton>
                            </Link>
                            <Link href="/services">
                                <GlowButton size="lg" variant="outline" className="w-full sm:w-auto">
                                    Explore Services
                                </GlowButton>
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
                        >
                            {['Verified Partners', '24/7 Support', '10,000+ Students Helped'].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-gold" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container-custom">
                    <StatsCounter stats={stats} />
                </div>
            </section>

            {/* 5 Core Services Section */}
            <section className="section-padding relative overflow-hidden">
                <FloatingElements variant="section" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                            Complete Solutions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Everything You Need for Your{' '}
                            <span className="gradient-text-gold">European Journey</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            From finding your perfect home to launching your career,
                            we've got every aspect of your transition covered.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <AnimatedCard className="h-full">
                                    <CardContent className="p-6">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                                            <service.icon className="h-7 w-7 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                                        {/* Description */}
                                        <p className="text-muted-foreground text-sm mb-4">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-2 py-1 bg-secondary rounded-md text-xs font-medium"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <Link href={service.ctaLink}>
                                            <Button className="w-full group bg-primary hover:bg-primary/90">
                                                {service.cta}
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </AnimatedCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline Section */}
            <section className="section-padding bg-secondary/30 relative overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            How It <span className="gradient-text-gold">Works</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            From registration to your new life in Europe, here's your journey.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0">
                            <motion.div
                                className="h-full bg-gold-gradient"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative z-10">
                            {journeySteps.map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.15 }}
                                    className="text-center"
                                >
                                    <div className="relative inline-flex mb-4">
                                        <motion.div
                                            className="w-16 h-16 mx-auto bg-gold-gradient rounded-full flex items-center justify-center text-2xl font-bold text-navy-dark shadow-glow-gold"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 400 }}
                                        >
                                            {item.step}
                                        </motion.div>
                                    </div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding relative overflow-hidden">
                <FloatingElements variant="minimal" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            What Students <span className="gradient-text-gold">Say</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Hear from students who've made Europe their new home with StudyNest.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <AnimatedCard glowColor="navy" className="h-full">
                                    <CardContent className="pt-6 pb-6">
                                        <Quote className="h-8 w-8 text-gold/30 mb-4" />
                                        <p className="text-muted-foreground italic">
                                            "{testimonial.text}"
                                        </p>
                                        <div className="flex gap-1 mt-4">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-4 border-t">
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.university}
                                            </p>
                                            <p className="text-xs text-gold mt-1">
                                                {testimonial.country}
                                            </p>
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {testimonial.services.map((service) => (
                                                <span
                                                    key={service}
                                                    className="px-2 py-1 bg-gold/10 text-gold rounded-md text-xs"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </AnimatedCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section-padding bg-navy-gradient text-white relative overflow-hidden">
                <ParticleField />

                <div className="container-custom text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to Start Your{' '}
                            <span className="text-gold">European Adventure?</span>
                        </h2>
                        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                            Join thousands of international students who trust StudyNest for their
                            complete transition support. Your journey to Europe starts with one click.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/signup">
                                <GlowButton size="lg" variant="gold" enablePulse>
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </GlowButton>
                            </Link>
                            <Link href="/services">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10"
                                >
                                    Browse All Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Floating CTA Banner */}
            {showFloatingCTA && !dismissedCTA && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-primary border-t border-primary/20 shadow-lg"
                >
                    <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-primary-foreground text-center sm:text-left">
                            <strong>Ready to start your European journey?</strong>{' '}
                            <span className="hidden sm:inline">Join 10,000+ students today.</span>
                        </p>
                        <div className="flex items-center gap-3">
                            <Link href="/signup">
                                <GlowButton size="sm" variant="gold">
                                    Start Now <ArrowRight className="ml-1 h-4 w-4" />
                                </GlowButton>
                            </Link>
                            <button
                                onClick={() => setDismissedCTA(true)}
                                className="p-2 text-primary-foreground/60 hover:text-primary-foreground"
                                aria-label="Dismiss"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}
