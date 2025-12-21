import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'StudyNest - Services for International Students',
        template: '%s | StudyNest',
    },
    description:
        'StudyNest connects international students with verified local service vendors for visa assistance, housing, transportation, and more.',
    keywords: [
        'international students',
        'student services',
        'visa assistance',
        'student housing',
        'airport pickup',
        'foreign students',
    ],
    openGraph: {
        title: 'StudyNest - Services for International Students',
        description:
            'Find trusted local services for your study abroad journey.',
        url: 'https://studynest.com',
        siteName: 'StudyNest',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
