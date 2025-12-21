import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PartnerHeroProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    benefits: string[];
}

export function PartnerHero({ title, description, Icon, benefits }: PartnerHeroProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-16 lg:py-24">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                        <Icon className="h-10 w-10 text-primary" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {title}
                    </h1>

                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                        {description}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {benefits.map((benefit, index) => (
                            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                                {benefit}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </section>
    );
}
