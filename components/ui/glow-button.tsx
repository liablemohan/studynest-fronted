'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
    children: React.ReactNode;
    variant?: 'gold' | 'navy' | 'outline';
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
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const variantStyles = {
        gold: 'bg-gold-gradient text-navy-dark font-semibold',
        navy: 'bg-navy-gradient text-white font-semibold',
        outline: 'bg-transparent border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-navy-dark',
    };

    return (
        <motion.button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                'relative rounded-lg overflow-hidden',
                'transition-all duration-300',
                'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                sizeStyles[size],
                variantStyles[variant],
                enablePulse && 'animate-glow-pulse',
                className
            )}
            whileHover={disabled ? {} : {
                scale: 1.02,
                y: -2,
            }}
            whileTap={disabled ? {} : {
                scale: 0.98,
                y: 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
            }}
        >
            {/* Shimmer effect overlay */}
            {enableShimmer && (variant === 'gold' || variant === 'navy') && (
                <motion.span
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{
                        x: '100%',
                        transition: { duration: 0.6, ease: 'easeInOut' },
                    }}
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    }}
                />
            )}

            {/* Glow effect on hover */}
            <motion.span
                className="absolute inset-0 rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                    boxShadow: variant === 'gold'
                        ? '0 10px 30px -10px rgba(212, 160, 18, 0.5)'
                        : '0 10px 30px -10px rgba(26, 58, 110, 0.5)',
                }}
            />

            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}

// Icon button variant
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
                'p-3 rounded-full',
                'bg-card border border-border',
                'transition-all duration-300',
                'hover:bg-gold hover:border-gold hover:text-navy-dark',
                'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2',
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
