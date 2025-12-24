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
    GraduationCap,
    X,
    Zap,
    Globe,
    Users,
    Shield,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCard } from '@/components/ui/animated-card';
import { GlowButton } from '@/components/ui/glow-button';
import { FloatingElements, ParticleField, AuroraBackground } from '@/components/ui/floating-elements';
import { AnimatedCounter, StatsCounter } from '@/components/ui/animated-counter';

// 5 Core Services
const coreServices = [
    {
        icon: Home,
        title: 'Verified Housing',
        description: 'Premium student accommodations verified for safety and quality across 50+ European cities.',
        cta: 'Find Your Home',
        ctaLink: '/services?category=housing',
        features: ['500+ Properties', 'Virtual Tours', 'Verified Landlords'],
        glowColor: 'gold' as const,
    },
    {
        icon: CreditCard,
        title: 'Banking & SIM',
        description: 'Get connected in 24 hours. Fast-tracked bank accounts and instant SIM activation.',
        cta: 'Get Connected',
        ctaLink: '/services?category=banking',
        features: ['24hr Setup', 'Top Banks', 'Instant SIM'],
        glowColor: 'navy' as const,
    },
    {
        icon: FileText,
        title: 'Admin Support',
        description: 'Expert assistance for visas, permits, and all official documentation requirements.',
        cta: 'Simplify Paperwork',
        ctaLink: '/services?category=admin',
        features: ['100% Accuracy', 'Fast Processing', 'Expert Team'],
        glowColor: 'gold' as const,
    },
    {
        icon: Briefcase,
        title: 'Job Placement',
        description: 'Launch your career with access to part-time jobs and internships from 500+ partners.',
        cta: 'Launch Career',
        ctaLink: '/services?category=jobs',
        features: ['500+ Partners', 'Part-time Jobs', 'Career Support'],
        glowColor: 'beige' as const,
    },
    {
        icon: HeadphonesIcon,
        title: 'Personal Assistance',
        description: 'Dedicated 24/7 support to help you navigate any challenge in your new city.',
        cta: '24/7 Support',
        ctaLink: '/services?category=assistance',
        features: ['Always Available', 'Dedicated Agent', 'Any Issue'],
        glowColor: 'gold' as const,
    },
];

const journeySteps = [
    { step: 1, title: 'Apply & Verify', description: 'Quick registration', icon: Users },
    { step: 2, title: 'Choose Services', description: 'Pick what you need', icon: GraduationCap },
    { step: 3, title: 'We Handle It', description: 'Relax, we got you', icon: Shield },
    { step: 4, title: 'Welcome!', description: 'Start your journey', icon: Globe },
];

const testimonials = [
    {
        name: 'Priya Sharma',
        university: 'TU Munich',
        country: 'India → Germany',
        text: 'StudyNest transformed my move to Germany. From finding my apartment to opening a bank account, everything was seamless.',
        rating: 5,
    },
    {
        name: 'Wei Chen',
        university: 'University of Amsterdam',
        country: 'China → Netherlands',
        text: 'The personal assistant service is incredible. They helped me with everything from registration to finding a part-time job.',
        rating: 5,
    },
    {
        name: 'Carlos Rodriguez',
        university: 'Sciences Po Paris',
        country: 'Mexico → France',
        text: 'I found my dream apartment and started working within my first week. StudyNest is a game-changer for international students.',
        rating: 5,
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
            if (scrollPercent > 35 && !dismissedCTA) {
                setShowFloatingCTA(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dismissedCTA]);

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <AuroraBackground />
                <ParticleField className="opacity-30" count={40} />

                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="secondary" className="mb-6 px-4 py-2">
                                <Zap className="w-3 h-3 mr-1" />
                                Your Complete European Student Solution
                            </Badge>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9]"
                        >
                            Your Journey to
                            <br />
                            <span className="gradient-text">Europe</span> Starts Here
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        >
                            End-to-end support from verified housing to career launch.
                            We simplify your transition and help you thrive in Europe.
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
                            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
                        >
                            {['Verified Partners', '24/7 Support', '10,000+ Students'].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-gold" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-gold"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-navy/10" />
                <div className="container-custom relative z-10">
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
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4">
                            Complete Solutions
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Everything You Need for
                            <br />
                            <span className="gradient-text">Your European Journey</span>
                        </h2>
                        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
                            From finding your perfect home to launching your career,
                            we've got every aspect of your transition covered.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {coreServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <AnimatedCard
                                    className="h-full p-6 lg:p-8"
                                    glowColor={service.glowColor}
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-6 shadow-lg">
                                        <service.icon className="h-7 w-7 text-navy-dark" />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.features.map((feature) => (
                                            <Badge key={feature} variant="outline" className="text-xs">
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link href={service.ctaLink} className="block">
                                        <Button className="w-full group">
                                            {service.cta}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </AnimatedCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/3 to-transparent" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold">
                            How It <span className="gradient-text">Works</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            From registration to your new life in Europe
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gold/20 -translate-y-1/2">
                            <motion.div
                                className="h-full bg-gradient-to-r from-gold via-gold-mid to-gold"
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
                                    <motion.div
                                        className="relative inline-flex mb-6"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 400 }}
                                    >
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-glow-gold">
                                            <item.icon className="h-8 w-8 text-navy-dark" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-gold flex items-center justify-center text-sm font-bold text-gold">
                                            {item.step}
                                        </div>
                                    </motion.div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Loved by <span className="gradient-text">Students</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            Join thousands who've made Europe their new home
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
                                <AnimatedCard className="h-full p-8" glowColor="beige">
                                    <Quote className="h-10 w-10 text-gold/30 mb-6" />
                                    <p className="text-foreground leading-relaxed mb-6">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex gap-1 mb-6">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                                        ))}
                                    </div>
                                    <div className="border-t border-gold/10 pt-6">
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                                        <p className="text-xs text-gold mt-1">{testimonial.country}</p>
                                    </div>
                                </AnimatedCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section-padding relative overflow-hidden">
                <AuroraBackground />
                <ParticleField count={50} />

                <div className="container-custom text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to Start Your
                            <br />
                            <span className="gradient-text">European Adventure?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                            Join 10,000+ international students who trust StudyNest for their
                            complete transition support. Your journey starts with one click.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/signup">
                                <GlowButton size="lg" variant="gold" enablePulse>
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </GlowButton>
                            </Link>
                            <Link href="/services">
                                <GlowButton size="lg" variant="outline">
                                    Browse All Services
                                </GlowButton>
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
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 glass-strong border-t border-gold/10"
                >
                    <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-foreground text-center sm:text-left">
                            <strong>Ready to start?</strong>{' '}
                            <span className="text-muted-foreground hidden sm:inline">Join 10,000+ students today.</span>
                        </p>
                        <div className="flex items-center gap-3">
                            <Link href="/signup">
                                <Button size="sm">
                                    Start Now <ArrowRight className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                            <button
                                onClick={() => setDismissedCTA(true)}
                                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Dismiss"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
