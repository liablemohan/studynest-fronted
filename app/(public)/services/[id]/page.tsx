'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Star, Clock, CheckCircle, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useServicesStore } from '@/lib/store/services-store';
import { useAuthStore } from '@/lib/store/auth-store';
import { formatPrice, getCategoryColor } from '@/lib/utils';

const howItWorksSteps = [
    { step: 1, title: 'Purchase Service', description: 'Complete checkout with secure payment.' },
    { step: 2, title: 'Upload Documents', description: 'Submit any required documents.' },
    { step: 3, title: 'We Get to Work', description: 'Our team processes your request.' },
    { step: 4, title: 'Receive Delivery', description: 'Get your deliverables on time.' },
];

export default function ServiceDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { getServiceById } = useServicesStore();
    const { isAuthenticated } = useAuthStore();

    const service = getServiceById(params.id as string);

    if (!service) {
        return (
            <div className="section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-2xl font-bold">Service Not Found</h1>
                    <p className="mt-2 text-muted-foreground">
                        The service you're looking for doesn't exist.
                    </p>
                    <Link href="/services" className="mt-4 inline-block">
                        <Button>Back to Services</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const handlePurchase = () => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/checkout?serviceId=' + service.id);
        } else {
            router.push('/checkout?serviceId=' + service.id);
        }
    };

    return (
        <div className="section-padding">
            <div className="container-custom">
                {/* Back Button */}
                <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Services
                </Link>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header */}
                        <div>
                            <Badge className={getCategoryColor(service.category)} variant="secondary">
                                {service.category}
                            </Badge>
                            <h1 className="mt-4 text-3xl font-bold">{service.title}</h1>

                            <div className="mt-4 flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium">{service.rating}</span>
                                    <span className="text-muted-foreground">
                                        ({service.reviews_count} reviews)
                                    </span>
                                </div>
                                <Separator orientation="vertical" className="h-5" />
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <Clock className="h-5 w-5" />
                                    <span>{service.delivery_days} day delivery</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-semibold mb-3">Description</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* What's Included */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">What's Included</h2>
                            <ul className="space-y-3">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* How It Works */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {howItWorksSteps.map((item) => (
                                    <Card key={item.step}>
                                        <CardContent className="pt-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                    {item.step}
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">{item.title}</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">
                                        {formatPrice(service.price)}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Delivery Time</span>
                                        <span className="font-medium">{service.delivery_days} days</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Category</span>
                                        <span className="font-medium">{service.category}</span>
                                    </div>
                                    <Separator />
                                    <Button className="w-full" size="lg" onClick={handlePurchase}>
                                        <ShoppingCart className="h-5 w-5 mr-2" />
                                        Purchase Now
                                    </Button>
                                    {!isAuthenticated && (
                                        <p className="text-xs text-center text-muted-foreground">
                                            You'll need to log in to complete your purchase
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
