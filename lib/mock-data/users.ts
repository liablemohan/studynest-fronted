import { User } from '@/lib/types';

export const mockUsers: Record<string, User> = {
    student: {
        id: 'usr_student_001',
        email: 'student@example.com',
        full_name: 'John Smith',
        role: 'student',
        phone: '+1 555-123-4567',
        university: 'Stanford University',
        country_of_origin: 'India',
        avatar: '/avatars/student.png',
        created_at: '2024-01-15T10:00:00Z',
    },
    admin: {
        id: 'usr_admin_001',
        email: 'admin@studynest.com',
        full_name: 'Sarah Johnson',
        role: 'admin',
        phone: '+1 555-987-6543',
        avatar: '/avatars/admin.png',
        created_at: '2023-06-01T08:00:00Z',
    },
};

export const mockCredentials: Record<string, string> = {
    'student@example.com': 'password123',
    'admin@studynest.com': 'password123',
};

export const allUsers: User[] = [
    mockUsers.student,
    mockUsers.admin,
    {
        id: 'usr_student_002',
        email: 'maria@example.com',
        full_name: 'Maria Garcia',
        role: 'student',
        phone: '+1 555-234-5678',
        university: 'MIT',
        country_of_origin: 'Brazil',
        created_at: '2024-02-10T14:30:00Z',
    },
    {
        id: 'usr_student_003',
        email: 'chen@example.com',
        full_name: 'Chen Wei',
        role: 'student',
        phone: '+1 555-345-6789',
        university: 'UC Berkeley',
        country_of_origin: 'China',
        created_at: '2024-02-15T09:00:00Z',
    },
    {
        id: 'usr_vendor_001',
        email: 'vendor@visahelp.com',
        full_name: 'Visa Help Inc.',
        role: 'vendor',
        phone: '+1 555-456-7890',
        created_at: '2023-08-20T11:00:00Z',
    },
];

export const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia',
    'Bangladesh', 'Brazil', 'Canada', 'China', 'Colombia',
    'Egypt', 'Ethiopia', 'France', 'Germany', 'Ghana',
    'India', 'Indonesia', 'Iran', 'Iraq', 'Italy',
    'Japan', 'Kenya', 'Malaysia', 'Mexico', 'Morocco',
    'Nepal', 'Netherlands', 'Nigeria', 'Pakistan', 'Peru',
    'Philippines', 'Poland', 'Russia', 'Saudi Arabia', 'South Africa',
    'South Korea', 'Spain', 'Sri Lanka', 'Thailand', 'Turkey',
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Venezuela', 'Vietnam', 'Zimbabwe',
];
