'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
    services: [
        { label: 'Verified Housing', href: '/services?category=housing' },
        { label: 'Banking & SIM', href: '/services?category=banking' },
        { label: 'Admin Support', href: '/services?category=admin' },
        { label: 'Job Placement', href: '/services?category=jobs' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
    ],
};

const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Discord', href: 'https://discord.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-gold/10">
            {/* Background effect */}
            <div className="absolute inset-0 brand-bg opacity-30" />

            <div className="container-custom py-16 relative z-10">
                {/* Newsletter Section */}
                <motion.div
                    className="glass-card rounded-2xl p-8 md:p-12 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Stay in the <span className="gradient-text">Loop</span>
                            </h3>
                            <p className="text-muted-foreground">
                                Get updates on new cities, services, and exclusive student offers.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Input
                                placeholder="Enter your email"
                                className="flex-1"
                            />
                            <Button>
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                                <GraduationCap className="h-5 w-5 text-navy-dark" />
                            </div>
                            <span className="text-xl font-bold">
                                <span className="text-foreground">Study</span>
                                <span className="gradient-text">Nest</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-4">
                            Your complete European student solution. From verified housing to career launch.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-gold" />
                            <span>50+ European Cities</span>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-gold transition-colors group flex items-center gap-1"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-gold transition-colors group flex items-center gap-1"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-gold transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
                        <a
                            href="mailto:hello@studynest.com"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
                        >
                            <Mail className="h-4 w-4" />
                            hello@studynest.com
                        </a>
                        <div className="flex gap-3 mt-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all"
                                    aria-label={social.label}
                                >
                                    <span className="text-xs font-medium">{social.label.charAt(0)}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} StudyNest. Crafted with 💛 for students.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-xs text-muted-foreground/50">
                            10,000+ Students Helped
                        </span>
                        <span className="text-xs text-muted-foreground/50">
                            50+ Cities
                        </span>
                        <span className="text-xs text-muted-foreground/50">
                            500+ Partners
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
