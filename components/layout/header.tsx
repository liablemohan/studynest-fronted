'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuthStore } from '@/lib/store/auth-store';
import { cn } from '@/lib/utils';

const publicNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/partners', label: 'Partners' },
    { href: '/blog', label: 'Blog' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { user, isAuthenticated, logout } = useAuthStore();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        setMobileMenuOpen(false);
    };

    const getDashboardLink = () => {
        if (!user) return '/login';
        return user.role === 'admin' ? '/admin' : '/student';
    };

    return (
        <motion.header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                scrolled
                    ? 'glass-strong shadow-lg'
                    : 'bg-transparent'
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div
                className={cn(
                    'container-custom flex items-center justify-between transition-all duration-300',
                    scrolled ? 'h-16' : 'h-20'
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-navy-dark" />
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold to-gold-dark blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                    </motion.div>
                    <span className="text-xl font-bold">
                        <span className="text-foreground">Study</span>
                        <span className="gradient-text">Nest</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {publicNavLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 group"
                        >
                            <span
                                className={cn(
                                    'text-sm font-medium transition-colors',
                                    pathname === link.href
                                        ? 'text-foreground'
                                        : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                {link.label}
                            </span>
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-gold to-gold-dark rounded-full"
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    {isAuthenticated && user ? (
                        <div className="flex items-center gap-3">
                            <Link href={getDashboardLink()}>
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Avatar className="h-7 w-7 ring-2 ring-gold/30">
                                        <AvatarImage src={user.avatar} />
                                        <AvatarFallback className="bg-gradient-to-br from-gold to-gold-dark text-navy-dark text-xs">
                                            {user.full_name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="hidden lg:inline">{user.full_name}</span>
                                </Button>
                            </Link>
                            <Button variant="outline" size="sm" onClick={handleLogout}>
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button variant="ghost" size="sm">
                                    Login
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button size="sm">
                                    Get Started
                                </Button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2 rounded-xl glass"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {mobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="h-6 w-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="h-6 w-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass-strong overflow-hidden"
                    >
                        <nav className="container-custom py-6 flex flex-col gap-2">
                            {publicNavLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            'block px-4 py-3 rounded-xl text-sm font-medium transition-all',
                                            pathname === link.href
                                                ? 'bg-gradient-to-r from-gold/20 to-gold-dark/20 text-foreground'
                                                : 'text-muted-foreground hover:bg-white/5'
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="border-t border-gold/10 mt-4 pt-4 flex flex-col gap-3"
                            >
                                {isAuthenticated && user ? (
                                    <>
                                        <Link href={getDashboardLink()} onClick={() => setMobileMenuOpen(false)}>
                                            <Button variant="outline" className="w-full justify-start gap-2">
                                                <User className="h-4 w-4" />
                                                Dashboard
                                            </Button>
                                        </Link>
                                        <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleLogout}>
                                            <LogOut className="h-4 w-4" />
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                            <Button variant="outline" className="w-full">
                                                Login
                                            </Button>
                                        </Link>
                                        <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                                            <Button className="w-full">
                                                Get Started
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
