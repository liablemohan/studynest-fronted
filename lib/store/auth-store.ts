import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/lib/types';
import { mockUsers, mockCredentials } from '@/lib/mock-data/users';
import { delay } from '@/lib/utils';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // Actions
    login: (email: string, password: string) => Promise<boolean>;
    signup: (userData: Partial<User> & { password: string }) => Promise<boolean>;
    logout: () => void;
    clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (email: string, password: string) => {
                set({ isLoading: true, error: null });

                // Simulate API delay
                await delay(800);

                // Check credentials
                const storedPassword = mockCredentials[email];

                if (!storedPassword) {
                    set({ isLoading: false, error: 'User not found' });
                    return false;
                }

                if (storedPassword !== password) {
                    set({ isLoading: false, error: 'Invalid password' });
                    return false;
                }

                // Find user
                const user = email === 'admin@studynest.com'
                    ? mockUsers.admin
                    : mockUsers.student;

                set({
                    user,
                    isAuthenticated: true,
                    isLoading: false,
                    error: null
                });

                console.log('Login successful:', user.email, user.role);
                return true;
            },

            signup: async (userData) => {
                set({ isLoading: true, error: null });

                // Simulate API delay
                await delay(1000);

                // Check if email already exists
                if (mockCredentials[userData.email!]) {
                    set({ isLoading: false, error: 'Email already registered' });
                    return false;
                }

                // Create new user (in real app, this would be saved to database)
                const newUser: User = {
                    id: `usr_${Math.random().toString(36).substring(2, 9)}`,
                    email: userData.email!,
                    full_name: userData.full_name!,
                    role: userData.role || 'student',
                    phone: userData.phone,
                    university: userData.university,
                    country_of_origin: userData.country_of_origin,
                    created_at: new Date().toISOString(),
                };

                // Add to mock credentials (won't persist after refresh in this demo)
                mockCredentials[userData.email!] = userData.password;

                set({
                    user: newUser,
                    isAuthenticated: true,
                    isLoading: false,
                    error: null
                });

                console.log('Signup successful:', newUser.email);
                return true;
            },

            logout: () => {
                set({
                    user: null,
                    isAuthenticated: false,
                    error: null
                });
                console.log('Logged out');
            },

            clearError: () => {
                set({ error: null });
            },
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated
            }),
        }
    )
);
