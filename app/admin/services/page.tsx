'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useServicesStore } from '@/lib/store/services-store';
import { ServiceCategory } from '@/lib/types';
import { formatPrice, getCategoryColor } from '@/lib/utils';

const categories: ServiceCategory[] = [
    'Legal',
    'Transportation',
    'Accommodation',
    'Financial',
    'Healthcare',
    'Connectivity',
];

export default function AdminServicesPage() {
    const { services, addService, updateService, deleteService, toggleServiceStatus } = useServicesStore();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingService, setEditingService] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Legal' as ServiceCategory,
        price: '',
        delivery_days: '',
        features: '',
    });

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            category: 'Legal',
            price: '',
            delivery_days: '',
            features: '',
        });
        setEditingService(null);
    };

    const handleEdit = (serviceId: string) => {
        const service = services.find((s) => s.id === serviceId);
        if (service) {
            setFormData({
                title: service.title,
                description: service.description,
                category: service.category,
                price: service.price.toString(),
                delivery_days: service.delivery_days.toString(),
                features: service.features.join('\n'),
            });
            setEditingService(serviceId);
            setIsDialogOpen(true);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const serviceData = {
            title: formData.title,
            description: formData.description,
            category: formData.category,
            price: parseFloat(formData.price),
            delivery_days: parseInt(formData.delivery_days),
            features: formData.features.split('\n').filter((f) => f.trim()),
            is_active: true,
            rating: 4.5,
            reviews_count: 0,
        };

        if (editingService) {
            updateService(editingService, serviceData);
        } else {
            addService(serviceData);
        }

        setIsDialogOpen(false);
        resetForm();
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Services Management</h1>
                    <p className="text-muted-foreground mt-1">
                        Add, edit, and manage your service offerings.
                    </p>
                </div>

                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) resetForm();
                }}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Service
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                        <DialogHeader>
                            <DialogTitle>
                                {editingService ? 'Edit Service' : 'Add New Service'}
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={3}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Category</Label>
                                    <Select
                                        value={formData.category}
                                        onValueChange={(v: ServiceCategory) => setFormData({ ...formData, category: v })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((cat) => (
                                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="price">Price ($)</Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="delivery_days">Delivery Days</Label>
                                <Input
                                    id="delivery_days"
                                    type="number"
                                    value={formData.delivery_days}
                                    onChange={(e) => setFormData({ ...formData, delivery_days: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="features">Features (one per line)</Label>
                                <Textarea
                                    id="features"
                                    value={formData.features}
                                    onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                                    rows={4}
                                    placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                {editingService ? 'Update Service' : 'Add Service'}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Services Table */}
            <Card>
                <CardHeader>
                    <CardTitle>All Services ({services.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 font-medium">Title</th>
                                    <th className="text-left py-3 px-4 font-medium">Category</th>
                                    <th className="text-left py-3 px-4 font-medium">Price</th>
                                    <th className="text-left py-3 px-4 font-medium">Delivery</th>
                                    <th className="text-left py-3 px-4 font-medium">Status</th>
                                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service) => (
                                    <tr key={service.id} className="border-b last:border-0 hover:bg-muted/50">
                                        <td className="py-4 px-4 font-medium">{service.title}</td>
                                        <td className="py-4 px-4">
                                            <Badge className={getCategoryColor(service.category)} variant="secondary">
                                                {service.category}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-4">{formatPrice(service.price)}</td>
                                        <td className="py-4 px-4">{service.delivery_days} days</td>
                                        <td className="py-4 px-4">
                                            <Badge variant={service.is_active ? 'success' : 'secondary'}>
                                                {service.is_active ? 'Active' : 'Inactive'}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleEdit(service.id)}
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => toggleServiceStatus(service.id)}
                                                >
                                                    <Power className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-destructive"
                                                    onClick={() => deleteService(service.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
