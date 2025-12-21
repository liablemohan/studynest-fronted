import { Metadata } from 'next';
import { ServiceGrid } from '@/components/services/service-grid';
import { services } from '@/lib/mock-data/services';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Browse our range of services designed specifically for international students.',
};

export default function ServicesPage() {
    return (
        <div className="section-padding">
            <div className="container-custom">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Our Services</h1>
                    <p className="mt-2 text-muted-foreground">
                        Find the perfect services to help you settle into your new home.
                    </p>
                </div>

                {/* Services Grid with Filters */}
                <ServiceGrid services={services} />
            </div>
        </div>
    );
}
