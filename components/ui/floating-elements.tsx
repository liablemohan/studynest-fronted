'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingElementsProps {
    className?: string;
    variant?: 'hero' | 'section' | 'minimal';
}

export function FloatingElements({ className, variant = 'hero' }: FloatingElementsProps) {
    const elements = variant === 'hero' ? heroElements : variant === 'section' ? sectionElements : minimalElements;

    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
            {elements.map((element, index) => (
                <FloatingShape key={index} {...element} />
            ))}
        </div>
    );
}

interface FloatingShapeProps {
    shape: 'circle' | 'blob' | 'ring' | 'orb';
    size: number;
    color: 'gold' | 'navy' | 'beige';
    position: { top?: string; left?: string; right?: string; bottom?: string };
    duration?: number;
    delay?: number;
    blur?: number;
    opacity?: number;
}

function FloatingShape({
    shape,
    size,
    color,
    position,
    duration = 8,
    delay = 0,
    blur = 0,
    opacity = 0.4,
}: FloatingShapeProps) {
    const colorMap = {
        gold: '#d4a012',
        navy: '#1f2b47',
        beige: '#d4c4a8',
    };

    const bgGradient = shape === 'orb'
        ? `radial-gradient(circle, ${colorMap[color]}40 0%, transparent 70%)`
        : colorMap[color];

    return (
        <motion.div
            className={cn(
                'absolute',
                shape === 'circle' && 'rounded-full',
                shape === 'blob' && 'rounded-[40%_60%_70%_30%/40%_50%_60%_50%]',
                shape === 'ring' && 'rounded-full border-2',
                shape === 'orb' && 'rounded-full'
            )}
            style={{
                width: size,
                height: size,
                ...position,
                filter: blur ? `blur(${blur}px)` : undefined,
                opacity,
                background: shape !== 'ring' ? bgGradient : 'transparent',
                borderColor: shape === 'ring' ? colorMap[color] : undefined,
            }}
            animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: shape === 'blob' ? [0, 10, -10, 0] : [0, 5, -5, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
}

const heroElements: FloatingShapeProps[] = [
    // Large orbs
    { shape: 'orb', size: 600, color: 'gold', position: { top: '-10%', right: '-10%' }, opacity: 0.15, duration: 12 },
    { shape: 'orb', size: 500, color: 'navy', position: { bottom: '-15%', left: '-10%' }, opacity: 0.2, duration: 15 },
    { shape: 'orb', size: 400, color: 'beige', position: { top: '30%', left: '50%' }, opacity: 0.1, duration: 10 },

    // Medium floating shapes
    { shape: 'blob', size: 150, color: 'gold', position: { top: '20%', left: '15%' }, opacity: 0.2, duration: 8, delay: 0.5 },
    { shape: 'circle', size: 80, color: 'beige', position: { top: '60%', right: '20%' }, opacity: 0.15, duration: 7 },
    { shape: 'ring', size: 120, color: 'gold', position: { bottom: '25%', left: '25%' }, opacity: 0.2, duration: 9, delay: 1 },

    // Small accent shapes
    { shape: 'circle', size: 40, color: 'gold', position: { top: '30%', right: '30%' }, opacity: 0.25, duration: 5 },
    { shape: 'circle', size: 30, color: 'beige', position: { top: '50%', left: '10%' }, opacity: 0.2, duration: 6, delay: 2 },
    { shape: 'circle', size: 25, color: 'gold', position: { bottom: '20%', right: '35%' }, opacity: 0.25, duration: 4, delay: 1.5 },
];

const sectionElements: FloatingShapeProps[] = [
    { shape: 'orb', size: 300, color: 'gold', position: { top: '-20%', right: '-10%' }, opacity: 0.08, duration: 10 },
    { shape: 'orb', size: 200, color: 'navy', position: { bottom: '-10%', left: '-5%' }, opacity: 0.1, duration: 12 },
    { shape: 'ring', size: 80, color: 'gold', position: { top: '40%', left: '10%' }, opacity: 0.15, duration: 8 },
];

const minimalElements: FloatingShapeProps[] = [
    { shape: 'orb', size: 200, color: 'gold', position: { top: '0', right: '0' }, opacity: 0.06, duration: 15 },
    { shape: 'orb', size: 150, color: 'navy', position: { bottom: '0', left: '0' }, opacity: 0.08, duration: 12 },
];

// Animated particles
export function ParticleField({ className, count = 30 }: { className?: string; count?: number }) {
    const colors = ['#d4a012', '#d4c4a8', '#e6b422', '#1f2b47'];

    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: Math.random() * 4 + 2,
                        height: Math.random() * 4 + 2,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: colors[Math.floor(Math.random() * colors.length)],
                    }}
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0.15, 0.5, 0.15],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 4,
                        delay: Math.random() * 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}

// Brand background component
export function AuroraBackground({ className }: { className?: string }) {
    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
            <div className="brand-bg brand-hero absolute inset-0" />
        </div>
    );
}
