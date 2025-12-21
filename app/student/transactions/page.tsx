'use client';

import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockTransactions } from '@/lib/mock-data/orders';
import { formatPrice, formatDate } from '@/lib/utils';

export default function StudentTransactionsPage() {
    const transactions = mockTransactions;

    const getStatusBadge = (status: string) => {
        const variants: Record<string, 'success' | 'warning' | 'destructive' | 'default'> = {
            completed: 'success',
            pending: 'warning',
            failed: 'destructive',
            refunded: 'default',
        };
        return (
            <Badge variant={variants[status] || 'default'}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
        );
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Transaction History</h1>
                <p className="text-muted-foreground mt-1">
                    View all your payments and download invoices.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 font-medium">Date</th>
                                    <th className="text-left py-3 px-4 font-medium">Service</th>
                                    <th className="text-left py-3 px-4 font-medium">Order ID</th>
                                    <th className="text-left py-3 px-4 font-medium">Amount</th>
                                    <th className="text-left py-3 px-4 font-medium">Status</th>
                                    <th className="text-right py-3 px-4 font-medium">Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction) => (
                                    <tr key={transaction.id} className="border-b last:border-0">
                                        <td className="py-4 px-4">{formatDate(transaction.date)}</td>
                                        <td className="py-4 px-4">{transaction.service_title}</td>
                                        <td className="py-4 px-4 font-mono text-sm">{transaction.order_id}</td>
                                        <td className="py-4 px-4 font-medium">{formatPrice(transaction.amount)}</td>
                                        <td className="py-4 px-4">{getStatusBadge(transaction.status)}</td>
                                        <td className="py-4 px-4 text-right">
                                            {transaction.invoice_url && (
                                                <Button variant="ghost" size="sm">
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Download
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        {transactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="border rounded-lg p-4 space-y-3"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-medium">{transaction.service_title}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {formatDate(transaction.date)}
                                        </p>
                                    </div>
                                    {getStatusBadge(transaction.status)}
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t">
                                    <p className="font-bold">{formatPrice(transaction.amount)}</p>
                                    {transaction.invoice_url && (
                                        <Button variant="outline" size="sm">
                                            <FileText className="h-4 w-4 mr-2" />
                                            Invoice
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {transactions.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p>No transactions yet</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
