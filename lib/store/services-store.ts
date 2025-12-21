import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Service } from '@/lib/types';
import { services as mockServices } from '@/lib/mock-data/services';

interface ServicesState {
    services: Service[];

    // Actions
    addService: (service: Omit<Service, 'id'>) => Service;
    updateService: (id: string, updates: Partial<Service>) => void;
    deleteService: (id: string) => void;
    toggleServiceStatus: (id: string) => void;
    getServiceById: (id: string) => Service | undefined;
    getActiveServices: () => Service[];
}

export const useServicesStore = create<ServicesState>()(
    persist(
        (set, get) => ({
            services: mockServices,

            addService: (serviceData) => {
                const newService: Service = {
                    ...serviceData,
                    id: `srv_${Math.random().toString(36).substring(2, 6)}`,
                };

                set((state) => ({
                    services: [...state.services, newService],
                }));

                console.log('Service added:', newService.id);
                return newService;
            },

            updateService: (id, updates) => {
                set((state) => ({
                    services: state.services.map((service) =>
                        service.id === id ? { ...service, ...updates } : service
                    ),
                }));
                console.log('Service updated:', id);
            },

            deleteService: (id) => {
                set((state) => ({
                    services: state.services.filter((service) => service.id !== id),
                }));
                console.log('Service deleted:', id);
            },

            toggleServiceStatus: (id) => {
                set((state) => ({
                    services: state.services.map((service) =>
                        service.id === id
                            ? { ...service, is_active: !service.is_active }
                            : service
                    ),
                }));
            },

            getServiceById: (id) => {
                return get().services.find((service) => service.id === id);
            },

            getActiveServices: () => {
                return get().services.filter((service) => service.is_active);
            },
        }),
        {
            name: 'services-storage',
        }
    )
);
