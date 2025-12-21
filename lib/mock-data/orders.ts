import { Order, Transaction } from '@/lib/types';

export const mockOrders: Order[] = [
    {
        id: 'ord_001',
        student_id: 'usr_student_001',
        service_id: 'srv_001',
        service_title: 'Student Visa Assistance',
        status: 'completed',
        total_amount: 299,
        payment_id: 'pay_abc123xyz',
        created_at: '2024-01-20T10:30:00Z',
        updated_at: '2024-02-03T15:45:00Z',
        notes: 'All documents verified. Visa approved on Feb 3rd.',
        documents: [
            {
                id: 'doc_001',
                name: 'passport_scan.pdf',
                size: 2048576,
                type: 'application/pdf',
                url: '/uploads/passport_scan.pdf',
                uploaded_at: '2024-01-21T09:00:00Z',
                uploaded_by: 'student',
            },
            {
                id: 'doc_002',
                name: 'admission_letter.pdf',
                size: 1536000,
                type: 'application/pdf',
                url: '/uploads/admission_letter.pdf',
                uploaded_at: '2024-01-21T09:15:00Z',
                uploaded_by: 'student',
            },
        ],
        deliverables: [
            {
                id: 'del_001',
                name: 'visa_approval_letter.pdf',
                size: 512000,
                type: 'application/pdf',
                url: '/deliverables/visa_approval_letter.pdf',
                uploaded_at: '2024-02-03T15:30:00Z',
                uploaded_by: 'admin',
            },
        ],
    },
    {
        id: 'ord_002',
        student_id: 'usr_student_001',
        service_id: 'srv_002',
        service_title: 'Airport Pickup Service',
        status: 'in_progress',
        total_amount: 75,
        payment_id: 'pay_def456uvw',
        created_at: '2024-02-25T14:00:00Z',
        updated_at: '2024-02-26T10:00:00Z',
        notes: 'Driver assigned. Flight details confirmed. Pickup scheduled for March 1st.',
        documents: [],
        deliverables: [],
    },
    {
        id: 'ord_003',
        student_id: 'usr_student_001',
        service_id: 'srv_004',
        service_title: 'Student Bank Account Setup',
        status: 'pending',
        total_amount: 49,
        payment_id: 'pay_ghi789rst',
        created_at: '2024-02-28T16:30:00Z',
        updated_at: '2024-02-28T16:30:00Z',
        notes: undefined,
        documents: [],
        deliverables: [],
    },
    {
        id: 'ord_004',
        student_id: 'usr_student_002',
        service_id: 'srv_003',
        service_title: 'Student Housing Package',
        status: 'in_progress',
        total_amount: 199,
        payment_id: 'pay_jkl012mno',
        created_at: '2024-02-20T11:00:00Z',
        updated_at: '2024-02-27T09:30:00Z',
        notes: 'Property viewings scheduled for this week.',
        documents: [
            {
                id: 'doc_003',
                name: 'university_id.jpg',
                size: 1024000,
                type: 'image/jpeg',
                url: '/uploads/university_id.jpg',
                uploaded_at: '2024-02-21T10:00:00Z',
                uploaded_by: 'student',
            },
        ],
        deliverables: [],
    },
    {
        id: 'ord_005',
        student_id: 'usr_student_003',
        service_id: 'srv_006',
        service_title: 'SIM Card & Phone Setup',
        status: 'completed',
        total_amount: 35,
        payment_id: 'pay_pqr345stu',
        created_at: '2024-02-15T08:00:00Z',
        updated_at: '2024-02-16T14:00:00Z',
        notes: 'SIM activated. Number: +1 555-999-8888',
        documents: [],
        deliverables: [
            {
                id: 'del_002',
                name: 'activation_confirmation.pdf',
                size: 256000,
                type: 'application/pdf',
                url: '/deliverables/activation_confirmation.pdf',
                uploaded_at: '2024-02-16T14:00:00Z',
                uploaded_by: 'admin',
            },
        ],
    },
];

export const mockTransactions: Transaction[] = [
    {
        id: 'txn_001',
        order_id: 'ord_001',
        service_title: 'Student Visa Assistance',
        amount: 299,
        status: 'completed',
        date: '2024-01-20T10:30:00Z',
        invoice_url: '/invoices/inv_001.pdf',
    },
    {
        id: 'txn_002',
        order_id: 'ord_002',
        service_title: 'Airport Pickup Service',
        amount: 75,
        status: 'completed',
        date: '2024-02-25T14:00:00Z',
        invoice_url: '/invoices/inv_002.pdf',
    },
    {
        id: 'txn_003',
        order_id: 'ord_003',
        service_title: 'Student Bank Account Setup',
        amount: 49,
        status: 'completed',
        date: '2024-02-28T16:30:00Z',
        invoice_url: '/invoices/inv_003.pdf',
    },
];

export function getOrderById(id: string): Order | undefined {
    return mockOrders.find((order) => order.id === id);
}

export function getOrdersByStudentId(studentId: string): Order[] {
    return mockOrders.filter((order) => order.student_id === studentId);
}

export function getOrdersByStatus(status: string): Order[] {
    return mockOrders.filter((order) => order.status === status);
}
