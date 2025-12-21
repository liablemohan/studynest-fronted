import Link from 'next/link';
import { Star, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/types';
import { formatPrice, getCategoryColor } from '@/lib/utils';

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
                {/* Category Badge */}
                <Badge className={getCategoryColor(service.category)} variant="secondary">
                    {service.category}
                </Badge>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {service.description}
                </p>

                {/* Rating and Delivery */}
                <div className="mt-4 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
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
                    <span className="text-2xl font-bold text-primary">
                        {formatPrice(service.price)}
                    </span>
                </div>
                <Link href={`/services/${service.id}`}>
                    <Button size="sm">View Details</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
