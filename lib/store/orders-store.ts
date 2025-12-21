import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order, OrderStatus, Document } from '@/lib/types';
import { mockOrders } from '@/lib/mock-data/orders';
import { generateOrderId, generatePaymentId } from '@/lib/utils';

interface OrdersState {
    orders: Order[];

    // Actions
    addOrder: (serviceId: string, serviceTitle: string, amount: number, studentId: string) => Order;
    updateOrderStatus: (orderId: string, status: OrderStatus, notes?: string) => void;
    addDocument: (orderId: string, document: Omit<Document, 'id' | 'uploaded_at'>) => void;
    addDeliverable: (orderId: string, document: Omit<Document, 'id' | 'uploaded_at'>) => void;
    getOrderById: (orderId: string) => Order | undefined;
    getOrdersByStudentId: (studentId: string) => Order[];
    getOrdersByStatus: (status: OrderStatus) => Order[];
}

export const useOrdersStore = create<OrdersState>()(
    persist(
        (set, get) => ({
            orders: mockOrders,

            addOrder: (serviceId, serviceTitle, amount, studentId) => {
                const newOrder: Order = {
                    id: generateOrderId(),
                    student_id: studentId,
                    service_id: serviceId,
                    service_title: serviceTitle,
                    status: 'pending',
                    total_amount: amount,
                    payment_id: generatePaymentId(),
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    documents: [],
                    deliverables: [],
                };

                set((state) => ({
                    orders: [newOrder, ...state.orders],
                }));

                console.log('Order created:', newOrder.id);
                return newOrder;
            },

            updateOrderStatus: (orderId, status, notes) => {
                set((state) => ({
                    orders: state.orders.map((order) =>
                        order.id === orderId
                            ? {
                                ...order,
                                status,
                                notes: notes || order.notes,
                                updated_at: new Date().toISOString(),
                            }
                            : order
                    ),
                }));
                console.log('Order updated:', orderId, status);
            },

            addDocument: (orderId, document) => {
                const newDocument: Document = {
                    ...document,
                    id: `doc_${Math.random().toString(36).substring(2, 9)}`,
                    uploaded_at: new Date().toISOString(),
                };

                set((state) => ({
                    orders: state.orders.map((order) =>
                        order.id === orderId
                            ? {
                                ...order,
                                documents: [...order.documents, newDocument],
                                updated_at: new Date().toISOString(),
                            }
                            : order
                    ),
                }));
                console.log('Document added to order:', orderId);
            },

            addDeliverable: (orderId, document) => {
                const newDocument: Document = {
                    ...document,
                    id: `del_${Math.random().toString(36).substring(2, 9)}`,
                    uploaded_at: new Date().toISOString(),
                };

                set((state) => ({
                    orders: state.orders.map((order) =>
                        order.id === orderId
                            ? {
                                ...order,
                                deliverables: [...order.deliverables, newDocument],
                                updated_at: new Date().toISOString(),
                            }
                            : order
                    ),
                }));
                console.log('Deliverable added to order:', orderId);
            },

            getOrderById: (orderId) => {
                return get().orders.find((order) => order.id === orderId);
            },

            getOrdersByStudentId: (studentId) => {
                return get().orders.filter((order) => order.student_id === studentId);
            },

            getOrdersByStatus: (status) => {
                return get().orders.filter((order) => order.status === status);
            },
        }),
        {
            name: 'orders-storage',
        }
    )
);
