'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    ShoppingBag,
    User,
    CreditCard,
    LogOut,
    Package,
    Users,
    BarChart3,
    Settings,
    ChevronLeft,
    Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/lib/store/auth-store';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface SidebarProps {
    role: 'student' | 'admin';
}

const studentLinks = [
    { href: '/student', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/student/profile', label: 'Profile', icon: User },
    { href: '/student/transactions', label: 'Transactions', icon: CreditCard },
];

const adminLinks = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/orders', label: 'Orders', icon: ShoppingBag },
    { href: '/admin/services', label: 'Services', icon: Package },
    { href: '/admin/users', label: 'Users', icon: Users },
];

export function Sidebar({ role }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuthStore();
    const [collapsed, setCollapsed] = useState(false);

    const links = role === 'admin' ? adminLinks : studentLinks;

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <aside
            className={cn(
                'h-screen bg-card border-r flex flex-col transition-all duration-300',
                collapsed ? 'w-16' : 'w-64'
            )}
        >
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
                {!collapsed && (
                    <Link href="/" className="font-bold text-lg">
                        StudyNest
                    </Link>
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCollapsed(!collapsed)}
                    className="ml-auto"
                >
                    {collapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                </Button>
            </div>

            <Separator />

            {/* User Info */}
            {user && (
                <div className={cn('p-4', collapsed && 'flex justify-center')}>
                    <div className={cn('flex items-center gap-3', collapsed && 'flex-col')}>
                        <Avatar>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.full_name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {!collapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{user.full_name}</p>
                                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <Separator />

            {/* Navigation Links */}
            <nav className="flex-1 p-2 space-y-1">
                {links.map((link) => {
                    const isActive = pathname === link.href ||
                        (link.href !== '/student' && link.href !== '/admin' && pathname.startsWith(link.href));

                    return (
                        <Link key={link.href} href={link.href}>
                            <Button
                                variant={isActive ? 'secondary' : 'ghost'}
                                className={cn(
                                    'w-full justify-start gap-3',
                                    collapsed && 'justify-center px-2'
                                )}
                            >
                                <link.icon className="h-5 w-5" />
                                {!collapsed && <span>{link.label}</span>}
                            </Button>
                        </Link>
                    );
                })}
            </nav>

            <Separator />

            {/* Logout */}
            <div className="p-2">
                <Button
                    variant="ghost"
                    className={cn(
                        'w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10',
                        collapsed && 'justify-center px-2'
                    )}
                    onClick={handleLogout}
                >
                    <LogOut className="h-5 w-5" />
                    {!collapsed && <span>Logout</span>}
                </Button>
            </div>
        </aside>
    );
}
