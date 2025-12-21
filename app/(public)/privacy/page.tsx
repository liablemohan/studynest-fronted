import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'StudyNest Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
    return (
        <div className="section-padding">
            <div className="container-custom max-w-3xl">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

                <div className="prose prose-gray max-w-none space-y-6">
                    <p className="text-muted-foreground">
                        Last updated: December 21, 2025
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                        <p className="text-muted-foreground">
                            We collect information you provide directly to us, such as when you create an account,
                            make a purchase, or contact us for support. This may include your name, email address,
                            phone number, university information, and country of origin.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                        <p className="text-muted-foreground">
                            We use the information we collect to provide, maintain, and improve our services,
                            process transactions, send you technical notices and support messages, and respond
                            to your comments and questions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
                        <p className="text-muted-foreground">
                            We do not sell, trade, or otherwise transfer your personally identifiable information
                            to outside parties except to trusted third parties who assist us in operating our
                            website, conducting our business, or servicing you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
                        <p className="text-muted-foreground">
                            We implement a variety of security measures to maintain the safety of your personal
                            information. Your personal information is contained behind secured networks and is
                            only accessible by a limited number of persons who have special access rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact Us</h2>
                        <p className="text-muted-foreground">
                            If you have any questions about this Privacy Policy, please contact us at
                            privacy@studynest.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
