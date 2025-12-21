// User types
export interface User {
    id: string;
    email: string;
    full_name: string;
    role: 'student' | 'admin' | 'vendor';
    phone?: string;
    university?: string;
    country_of_origin?: string;
    avatar?: string;
    created_at: string;
}

// Service types
export interface Service {
    id: string;
    title: string;
    description: string;
    category: ServiceCategory;
    price: number;
    delivery_days: number;
    features: string[];
    is_active: boolean;
    rating: number;
    reviews_count: number;
    image?: string;
}

export type ServiceCategory =
    | 'Legal'
    | 'Transportation'
    | 'Accommodation'
    | 'Financial'
    | 'Healthcare'
    | 'Connectivity';

// Order types
export interface Order {
    id: string;
    student_id: string;
    service_id: string;
    service_title: string;
    status: OrderStatus;
    total_amount: number;
    payment_id: string;
    created_at: string;
    updated_at: string;
    notes?: string;
    documents: Document[];
    deliverables: Document[];
}

export type OrderStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';

// Document types
export interface Document {
    id: string;
    name: string;
    size: number;
    type: string;
    url: string;
    uploaded_at: string;
    uploaded_by: 'student' | 'admin';
}

// Transaction types
export interface Transaction {
    id: string;
    order_id: string;
    service_title: string;
    amount: number;
    status: 'completed' | 'pending' | 'failed' | 'refunded';
    date: string;
    invoice_url?: string;
}

// Form types
export interface LoginFormData {
    email: string;
    password: string;
    remember?: boolean;
}

export interface SignupFormData {
    full_name: string;
    email: string;
    password: string;
    confirm_password: string;
    role: 'student' | 'vendor';
    phone?: string;
    university?: string;
    country_of_origin?: string;
    terms_accepted: boolean;
}

export interface CheckoutFormData {
    card_number: string;
    expiry: string;
    cvc: string;
    name_on_card: string;
}

// API Response types (for future use)
export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}

// Pagination
export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    per_page: number;
    total_pages: number;
}
