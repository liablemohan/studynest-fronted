'use client';

import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PricingTier } from '@/lib/types/partners';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PricingTierCardProps {
    tier: PricingTier;
    serviceSlug: string;
}

export function PricingTierCard({ tier, serviceSlug }: PricingTierCardProps) {
    const tierColors = {
        Starter: 'from-slate-500 to-slate-600',
        Survival: 'from-blue-500 to-blue-600',
        Comfort: 'from-purple-500 to-purple-600',
        VIP: 'from-amber-500 to-amber-600',
    };

    return (
        <Card
            className={cn(
                'relative flex flex-col transition-all duration-300 hover:shadow-xl',
                tier.isPopular && 'border-primary shadow-lg scale-[1.02]'
            )}
        >
            {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Most Popular
                    </Badge>
                </div>
            )}

            <CardHeader className="text-center pb-4">
                <div
                    className={cn(
                        'mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg',
                        tierColors[tier.name]
                    )}
                >
                    {tier.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
            </CardHeader>

            <CardContent className="flex-1">
                <div className="text-center mb-6">
                    <span className="text-4xl font-bold">€{tier.price}</span>
                    <span className="text-muted-foreground ml-1">one-time</span>
                </div>

                <div className="text-center text-sm text-muted-foreground mb-6">
                    Delivery in {tier.deliveryDays} day{tier.deliveryDays > 1 ? 's' : ''}
                </div>

                <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>

            <CardFooter>
                <Link href={`/checkout?partnerId=${serviceSlug}&tier=${tier.id}`} className="w-full">
                    <Button
                        className={cn(
                            'w-full',
                            tier.isPopular && 'bg-primary hover:bg-primary/90'
                        )}
                        variant={tier.isPopular ? 'default' : 'outline'}
                        size="lg"
                    >
                        Get {tier.name}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
