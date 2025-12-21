'use client';

import { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/lib/store/auth-store';
import { useServicesStore } from '@/lib/store/services-store';
import { useOrdersStore } from '@/lib/store/orders-store';
import { formatPrice, delay } from '@/lib/utils';

const checkoutSchema = z.object({
    card_number: z.string().min(19, 'Please enter a valid card number'),
    expiry: z.string().regex(/^\d{2}\/\d{2}$/, 'Use MM/YY format'),
    cvc: z.string().length(3, 'CVC must be 3 digits'),
    name_on_card: z.string().min(2, 'Please enter the name on your card'),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

function CheckoutContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const serviceId = searchParams.get('serviceId');

    const { user, isAuthenticated } = useAuthStore();
    const { getServiceById } = useServicesStore();
    const { addOrder } = useOrdersStore();

    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const service = serviceId ? getServiceById(serviceId) : null;

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            card_number: '4242 4242 4242 4242',
            expiry: '12/28',
            cvc: '123',
            name_on_card: user?.full_name || '',
        },
    });

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/checkout?serviceId=' + serviceId);
        }
    }, [isAuthenticated, router, serviceId]);

    useEffect(() => {
        if (user?.full_name) {
            setValue('name_on_card', user.full_name);
        }
    }, [user, setValue]);

    if (!service) {
        return (
            <div className="section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-2xl font-bold">Service Not Found</h1>
                    <p className="mt-2 text-muted-foreground">
                        Please select a service to purchase.
                    </p>
                    <Link href="/services" className="mt-4 inline-block">
                        <Button>Browse Services</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        return parts.length ? parts.join(' ') : value;
    };

    const onSubmit = async (data: CheckoutFormData) => {
        if (!user) return;

        setIsProcessing(true);

        // Simulate payment processing
        await delay(2000);

        // Create order
        addOrder(service.id, service.title, service.price, user.id);

        setIsProcessing(false);
        setIsComplete(true);

        // Redirect after showing success
        await delay(1500);
        router.push('/student');
    };

    if (isComplete) {
        return (
            <div className="section-padding">
                <div className="container-custom max-w-md mx-auto text-center">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold">Payment Successful!</h1>
                    <p className="mt-2 text-muted-foreground">
                        Your order has been placed. Redirecting to your dashboard...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="section-padding">
            <div className="container-custom max-w-4xl">
                {/* Back Button */}
                <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Service
                </Link>

                <h1 className="text-3xl font-bold mb-8">Checkout</h1>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Payment Form */}
                    <div className="lg:col-span-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <CreditCard className="h-5 w-5" />
                                    Payment Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    {/* Card Number */}
                                    <div className="space-y-2">
                                        <Label htmlFor="card_number">Card Number</Label>
                                        <Input
                                            id="card_number"
                                            placeholder="4242 4242 4242 4242"
                                            {...register('card_number')}
                                            onChange={(e) => {
                                                const formatted = formatCardNumber(e.target.value);
                                                setValue('card_number', formatted);
                                            }}
                                            maxLength={19}
                                        />
                                        {errors.card_number && (
                                            <p className="text-sm text-red-500">{errors.card_number.message}</p>
                                        )}
                                    </div>

                                    {/* Expiry and CVC */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="expiry">Expiry Date</Label>
                                            <Input
                                                id="expiry"
                                                placeholder="MM/YY"
                                                {...register('expiry')}
                                                maxLength={5}
                                            />
                                            {errors.expiry && (
                                                <p className="text-sm text-red-500">{errors.expiry.message}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="cvc">CVC</Label>
                                            <Input
                                                id="cvc"
                                                placeholder="123"
                                                {...register('cvc')}
                                                maxLength={3}
                                            />
                                            {errors.cvc && (
                                                <p className="text-sm text-red-500">{errors.cvc.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Name on Card */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name_on_card">Name on Card</Label>
                                        <Input
                                            id="name_on_card"
                                            placeholder="John Smith"
                                            {...register('name_on_card')}
                                        />
                                        {errors.name_on_card && (
                                            <p className="text-sm text-red-500">{errors.name_on_card.message}</p>
                                        )}
                                    </div>

                                    <Separator className="my-6" />

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        size="lg"
                                        disabled={isProcessing}
                                    >
                                        {isProcessing ? (
                                            'Processing...'
                                        ) : (
                                            <>
                                                <Lock className="h-4 w-4 mr-2" />
                                                Pay {formatPrice(service.price)}
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                                        <Lock className="h-3 w-3" />
                                        Secured by Stripe. Your payment info is encrypted.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-2">
                        <Card className="sticky top-24">
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="font-medium">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {service.category} • {service.delivery_days} day delivery
                                    </p>
                                </div>

                                <Separator />

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span>{formatPrice(service.price)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Processing Fee</span>
                                        <span>$0.00</span>
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex justify-between font-semibold text-lg">
                                    <span>Total</span>
                                    <span>{formatPrice(service.price)}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CheckoutFallback() {
    return (
        <div className="section-padding">
            <div className="container-custom text-center">
                <h1 className="text-2xl font-bold">Loading checkout...</h1>
            </div>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<CheckoutFallback />}>
            <CheckoutContent />
        </Suspense>
    );
}
