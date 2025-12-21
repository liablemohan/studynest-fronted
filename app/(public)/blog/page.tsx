import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Tips, guides, and news for international students.',
};

const blogPosts = [
    {
        id: 1,
        title: '10 Things Every International Student Should Know Before Arriving',
        excerpt: 'Essential tips to prepare for your study abroad journey, from visa requirements to cultural adjustments.',
        category: 'Getting Started',
        date: '2025-12-15',
        readTime: '5 min read',
    },
    {
        id: 2,
        title: 'How to Open a Bank Account as an International Student',
        excerpt: 'A step-by-step guide to setting up your finances in your new country, including the best banks for students.',
        category: 'Finance',
        date: '2025-12-10',
        readTime: '4 min read',
    },
    {
        id: 3,
        title: 'Finding Your First Apartment: A Complete Guide',
        excerpt: 'Everything you need to know about renting as a student, from searching to signing the lease.',
        category: 'Housing',
        date: '2025-12-05',
        readTime: '7 min read',
    },
    {
        id: 4,
        title: 'Navigating the US Visa Process in 2025',
        excerpt: 'Latest updates and requirements for F-1 student visas, plus tips for a successful interview.',
        category: 'Legal',
        date: '2025-11-28',
        readTime: '6 min read',
    },
];

export default function BlogPage() {
    return (
        <div className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold">StudyNest Blog</h1>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                        Tips, guides, and resources to help international students succeed in their study abroad journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Badge variant="secondary">{post.category}</Badge>
                                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </span>
                                </div>

                                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>

                                <p className="mt-2 text-muted-foreground line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read More
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
