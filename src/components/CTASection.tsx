import React from 'react';
import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-20 bg-[#B30000] text-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Partner with Bisly Nigeria Limited to leverage technology as your strategic advantage. Let's discuss your next project.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="mailto:info@bislynig.com.ng" className="px-8 py-4 bg-white text-[#B30000] font-bold rounded shadow-lg hover:bg-gray-100 transition">
                        Email Us Now
                    </Link>
                    <Link href="tel:+234" className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition">
                        Call a Consultant
                    </Link>
                </div>
            </div>
        </section>
    );
}
