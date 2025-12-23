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
    shape: 'circle' | 'blob' | 'ring' | 'square';
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
    duration = 6,
    delay = 0,
    blur = 0,
    opacity = 0.3,
}: FloatingShapeProps) {
    const colorMap = {
        gold: 'bg-gold',
        navy: 'bg-primary',
        beige: 'bg-secondary',
    };

    const shapeStyles = {
        circle: 'rounded-full',
        blob: 'rounded-[40%_60%_70%_30%/40%_50%_60%_50%]',
        ring: 'rounded-full bg-transparent border-4 border-current',
        square: 'rounded-lg rotate-45',
    };

    return (
        <motion.div
            className={cn(
                'absolute',
                shape !== 'ring' && colorMap[color],
                shapeStyles[shape],
                shape === 'ring' && (color === 'gold' ? 'text-gold' : color === 'navy' ? 'text-primary' : 'text-secondary')
            )}
            style={{
                width: size,
                height: size,
                ...position,
                filter: blur ? `blur(${blur}px)` : undefined,
                opacity,
            }}
            animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: shape === 'blob' ? [0, 5, -5, 0] : [0, 2, -2, 0],
                scale: [1, 1.05, 1],
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
    // Large blurred circles for depth
    { shape: 'circle', size: 400, color: 'gold', position: { top: '10%', right: '-5%' }, blur: 100, opacity: 0.15, duration: 8 },
    { shape: 'circle', size: 300, color: 'navy', position: { bottom: '20%', left: '-5%' }, blur: 80, opacity: 0.1, duration: 10 },

    // Medium floating shapes
    { shape: 'blob', size: 120, color: 'gold', position: { top: '15%', left: '10%' }, opacity: 0.2, duration: 7, delay: 0.5 },
    { shape: 'circle', size: 80, color: 'navy', position: { top: '60%', right: '15%' }, opacity: 0.15, duration: 6 },
    { shape: 'ring', size: 100, color: 'gold', position: { bottom: '30%', left: '20%' }, opacity: 0.2, duration: 8, delay: 1 },

    // Small accent shapes
    { shape: 'circle', size: 40, color: 'gold', position: { top: '25%', right: '25%' }, opacity: 0.3, duration: 5 },
    { shape: 'square', size: 30, color: 'navy', position: { top: '45%', left: '5%' }, opacity: 0.15, duration: 6, delay: 2 },
    { shape: 'circle', size: 20, color: 'gold', position: { bottom: '15%', right: '30%' }, opacity: 0.25, duration: 4, delay: 1.5 },
];

const sectionElements: FloatingShapeProps[] = [
    { shape: 'circle', size: 200, color: 'gold', position: { top: '-10%', right: '-5%' }, blur: 60, opacity: 0.1, duration: 8 },
    { shape: 'blob', size: 80, color: 'navy', position: { bottom: '10%', left: '5%' }, opacity: 0.1, duration: 7 },
    { shape: 'ring', size: 60, color: 'gold', position: { top: '30%', left: '10%' }, opacity: 0.15, duration: 6 },
];

const minimalElements: FloatingShapeProps[] = [
    { shape: 'circle', size: 150, color: 'gold', position: { top: '0', right: '0' }, blur: 50, opacity: 0.08, duration: 10 },
    { shape: 'circle', size: 100, color: 'navy', position: { bottom: '0', left: '0' }, blur: 40, opacity: 0.05, duration: 8 },
];

// Particle effect for premium sections
export function ParticleField({ className }: { className?: string }) {
    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gold rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
