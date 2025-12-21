'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { OrderStatusBadge } from '@/components/orders/order-status-badge';
import { OrderTimeline } from '@/components/orders/order-timeline';
import { FileUploadZone } from '@/components/files/file-upload-zone';
import { FileList } from '@/components/files/file-list';
import { useOrdersStore } from '@/lib/store/orders-store';
import { formatPrice, formatDate } from '@/lib/utils';

export default function StudentOrderDetailPage() {
    const params = useParams();
    const { getOrderById, addDocument } = useOrdersStore();

    const order = getOrderById(params.id as string);

    if (!order) {
        return (
            <div className="text-center py-12">
                <h1 className="text-2xl font-bold">Order Not Found</h1>
                <p className="text-muted-foreground mt-2">
                    The order you're looking for doesn't exist.
                </p>
                <Link href="/student" className="mt-4 inline-block">
                    <Button>Back to Dashboard</Button>
                </Link>
            </div>
        );
    }

    const handleFilesChange = (files: any[]) => {
        files.forEach((uploadedFile) => {
            addDocument(order.id, {
                name: uploadedFile.file.name,
                size: uploadedFile.file.size,
                type: uploadedFile.file.type,
                url: URL.createObjectURL(uploadedFile.file),
                uploaded_by: 'student',
            });
        });
    };

    return (
        <div className="space-y-6">
            {/* Back Button */}
            <Link
                href="/student"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
            </Link>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">{order.service_title}</h1>
                    <p className="text-muted-foreground mt-1">Order ID: {order.id}</p>
                </div>
                <OrderStatusBadge status={order.status} />
            </div>

            {/* Order Timeline */}
            <Card>
                <CardHeader>
                    <CardTitle>Order Progress</CardTitle>
                </CardHeader>
                <CardContent>
                    <OrderTimeline status={order.status} />
                </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Order Details */}
                <Card>
                    <CardHeader>
                        <CardTitle>Order Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Service</span>
                            <span className="font-medium">{order.service_title}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Amount</span>
                            <span className="font-medium">{formatPrice(order.total_amount)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Order Date</span>
                            <span className="font-medium">{formatDate(order.created_at)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Last Updated</span>
                            <span className="font-medium">{formatDate(order.updated_at)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Payment ID</span>
                            <span className="font-mono text-sm">{order.payment_id}</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Notes */}
                <Card>
                    <CardHeader>
                        <CardTitle>Admin Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {order.notes ? (
                            <p className="text-muted-foreground">{order.notes}</p>
                        ) : (
                            <p className="text-muted-foreground italic">No notes yet</p>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Documents Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Upload Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <FileUploadZone onFilesChange={handleFilesChange} />

                    {order.documents.length > 0 && (
                        <>
                            <Separator />
                            <FileList files={order.documents} title="Uploaded Documents" />
                        </>
                    )}
                </CardContent>
            </Card>

            {/* Deliverables Section */}
            {order.status === 'completed' && order.deliverables.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-600">Deliverables Ready</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FileList files={order.deliverables} title="Download your files" />
                    </CardContent>
                </Card>
            )}

            {/* Contact Support */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <h3 className="font-semibold">Need Help?</h3>
                            <p className="text-sm text-muted-foreground">
                                Contact our support team for assistance with this order.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                                <Mail className="h-4 w-4 mr-2" />
                                Email Support
                            </Button>
                            <Button variant="outline" size="sm">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                WhatsApp
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
