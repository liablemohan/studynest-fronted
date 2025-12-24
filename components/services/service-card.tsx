'use client';

import Link from 'next/link';
import { Star, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Service } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface ServiceCardProps {
    service: Service;
    index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
    const glowColors: Array<'gold' | 'navy' | 'beige'> = ['gold', 'navy', 'beige'];
    const glowColor = glowColors[index % 3];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <AnimatedCard className="h-full" glowColor={glowColor}>
                <CardContent className="p-6">
                    {/* Category Badge */}
                    <Badge variant="secondary">
                        {service.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="mt-4 text-lg font-bold line-clamp-2 group-hover:text-gold transition-colors">
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {service.description}
                    </p>

                    {/* Rating and Delivery */}
                    <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-gold text-gold" />
                            <span className="font-medium">{service.rating}</span>
                            <span className="text-muted-foreground">({service.reviews_count})</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{service.delivery_days} day{service.delivery_days > 1 ? 's' : ''}</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold gradient-text">
                            {formatPrice(service.price)}
                        </span>
                    </div>
                    <Link href={`/services/${service.id}`}>
                        <Button size="sm" className="group">
                            View Details
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </CardFooter>
            </AnimatedCard>
        </motion.div>
    );
}
