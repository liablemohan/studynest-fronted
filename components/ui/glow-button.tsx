'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
    children: React.ReactNode;
    variant?: 'gold' | 'navy' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    enableShimmer?: boolean;
    enablePulse?: boolean;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export function GlowButton({
    children,
    className,
    variant = 'gold',
    size = 'md',
    enableShimmer = true,
    enablePulse = false,
    onClick,
    disabled,
    type = 'button',
}: GlowButtonProps) {
    const sizeStyles = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-2xl',
    };

    const variantStyles = {
        gold: 'bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-semibold',
        navy: 'bg-gradient-to-r from-navy to-navy-dark text-beige-light font-semibold',
        outline: 'bg-transparent border-2 border-gold/50 text-foreground font-semibold hover:bg-gold/10 hover:border-gold',
        ghost: 'bg-transparent text-foreground font-semibold hover:bg-white/5',
    };

    const glowVariant = {
        gold: 'hover:shadow-glow-gold',
        navy: 'hover:shadow-glow-navy',
        outline: '',
        ghost: '',
    };

    return (
        <motion.button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                'relative overflow-hidden',
                'transition-all duration-300',
                'focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-background',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                sizeStyles[size],
                variantStyles[variant],
                glowVariant[variant],
                enablePulse && 'animate-pulse-glow',
                className
            )}
            whileHover={disabled ? {} : {
                scale: 1.03,
                y: -2,
            }}
            whileTap={disabled ? {} : {
                scale: 0.97,
                y: 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
            }}
        >
            {/* Shimmer effect */}
            {enableShimmer && (variant === 'gold' || variant === 'navy') && (
                <motion.span
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{
                        x: '100%',
                        transition: { duration: 0.6, ease: 'easeInOut' },
                    }}
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    }}
                />
            )}

            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}

export function GlowIconButton({
    children,
    className,
    onClick,
    disabled,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}) {
    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                'p-3 rounded-xl glass',
                'transition-all duration-300',
                'hover:bg-gold/20 hover:shadow-glow-gold',
                'focus:outline-none focus:ring-2 focus:ring-gold/50',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                className
            )}
            whileHover={disabled ? {} : { scale: 1.1, y: -2 }}
            whileTap={disabled ? {} : { scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
}
