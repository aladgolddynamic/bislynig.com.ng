import React from 'react';
import Link from 'next/link';

export default function OperationsStrip() {
    return (
        <section className="relative py-24 lg:py-32 flex items-center justify-center" id="operations">
            {/* Background Image: Represents Data Protection/Infrastructure */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920')" }}
            >
                {/* Dark overlay to make text pop */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content Container (Smaller Centered Red Box) */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex justify-center py-6">
                <div className="bg-[#B30000] px-8 py-8 md:px-12 md:py-10 rounded-2xl shadow-2xl text-center max-w-[600px] w-full transform hover:scale-110 transition-all duration-150 hover:ring-1 hover:ring-white/50">
                    <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold mb-4 text-white leading-tight">
                        Scalable Infrastructure for Growing Enterprises
                    </h2>
                    <p className="text-sm md:text-base text-white/95 mb-6 max-w-2xl mx-auto font-medium leading-normal">
                        Ensure your operations never skip a beat with our high-availability infrastructure setups and managed IT services.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-block px-8 py-3 bg-white text-[#B30000] font-bold text-sm md:text-base rounded shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 animate-bounce"
                    >
                        Optimize Your IT Today
                    </Link>
                </div>
            </div>
        </section>
    );
}
