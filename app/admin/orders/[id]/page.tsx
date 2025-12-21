'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { OrderStatusBadge } from '@/components/orders/order-status-badge';
import { OrderTimeline } from '@/components/orders/order-timeline';
import { FileUploadZone } from '@/components/files/file-upload-zone';
import { FileList } from '@/components/files/file-list';
import { useOrdersStore } from '@/lib/store/orders-store';
import { OrderStatus } from '@/lib/types';
import { formatPrice, formatDate } from '@/lib/utils';

export default function AdminOrderDetailPage() {
    const params = useParams();
    const { getOrderById, updateOrderStatus, addDeliverable } = useOrdersStore();

    const order = getOrderById(params.id as string);
    const [status, setStatus] = useState<OrderStatus>(order?.status || 'pending');
    const [notes, setNotes] = useState(order?.notes || '');
    const [isSaving, setIsSaving] = useState(false);

    if (!order) {
        return (
            <div className="text-center py-12">
                <h1 className="text-2xl font-bold">Order Not Found</h1>
                <Link href="/admin/orders" className="mt-4 inline-block">
                    <Button>Back to Orders</Button>
                </Link>
            </div>
        );
    }

    const handleSave = async () => {
        setIsSaving(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        updateOrderStatus(order.id, status, notes);
        setIsSaving(false);
    };

    const handleDeliverableUpload = (files: any[]) => {
        files.forEach((uploadedFile) => {
            addDeliverable(order.id, {
                name: uploadedFile.file.name,
                size: uploadedFile.file.size,
                type: uploadedFile.file.type,
                url: URL.createObjectURL(uploadedFile.file),
                uploaded_by: 'admin',
            });
        });
    };

    return (
        <div className="space-y-6">
            {/* Back Button */}
            <Link
                href="/admin/orders"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Orders
            </Link>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">{order.service_title}</h1>
                    <p className="text-muted-foreground mt-1">Order ID: {order.id}</p>
                </div>
                <OrderStatusBadge status={order.status} />
            </div>

            {/* Timeline */}
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
                            <span className="text-muted-foreground">Student ID</span>
                            <span className="font-mono text-sm">{order.student_id}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Order Date</span>
                            <span className="font-medium">{formatDate(order.created_at)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Payment ID</span>
                            <span className="font-mono text-sm">{order.payment_id}</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Update Status */}
                <Card>
                    <CardHeader>
                        <CardTitle>Update Order</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Status</Label>
                            <Select value={status} onValueChange={(v: OrderStatus) => setStatus(v)}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="in_progress">In Progress</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Notes</Label>
                            <Textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Add notes for this order..."
                                rows={4}
                            />
                        </div>

                        <Button onClick={handleSave} disabled={isSaving} className="w-full">
                            {isSaving ? 'Saving...' : (
                                <>
                                    <Save className="h-4 w-4 mr-2" />
                                    Update Order
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Student Documents */}
            <Card>
                <CardHeader>
                    <CardTitle>Student Documents</CardTitle>
                </CardHeader>
                <CardContent>
                    {order.documents.length > 0 ? (
                        <FileList files={order.documents} />
                    ) : (
                        <p className="text-muted-foreground text-center py-6">
                            No documents uploaded by student yet.
                        </p>
                    )}
                </CardContent>
            </Card>

            {/* Upload Deliverables */}
            <Card>
                <CardHeader>
                    <CardTitle>Upload Deliverables</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <FileUploadZone onFilesChange={handleDeliverableUpload} />

                    {order.deliverables.length > 0 && (
                        <>
                            <Separator />
                            <FileList files={order.deliverables} title="Uploaded Deliverables" />
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
