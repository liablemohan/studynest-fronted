import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'StudyNest Terms of Service - Read our terms and conditions for using our platform.',
};

export default function TermsPage() {
    return (
        <div className="section-padding">
            <div className="container-custom max-w-3xl">
                <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

                <div className="prose prose-gray max-w-none space-y-6">
                    <p className="text-muted-foreground">
                        Last updated: December 21, 2025
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground">
                            By accessing and using StudyNest, you accept and agree to be bound by the terms
                            and provision of this agreement. If you do not agree to abide by the above,
                            please do not use this service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Service</h2>
                        <p className="text-muted-foreground">
                            StudyNest is a marketplace platform that connects international students with
                            local service vendors. We facilitate transactions but are not responsible for
                            the quality of services provided by vendors.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
                        <p className="text-muted-foreground">
                            Users are responsible for maintaining the confidentiality of their account
                            information and for all activities that occur under their account. Users agree
                            to provide accurate and complete information when creating an account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">4. Payment Terms</h2>
                        <p className="text-muted-foreground">
                            All payments are processed through secure third-party payment processors.
                            Refunds are subject to our refund policy and the specific terms of each service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
                        <p className="text-muted-foreground">
                            StudyNest shall not be liable for any indirect, incidental, special, consequential,
                            or punitive damages resulting from your use of or inability to use the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">6. Contact</h2>
                        <p className="text-muted-foreground">
                            For any questions regarding these terms, please contact us at legal@studynest.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
