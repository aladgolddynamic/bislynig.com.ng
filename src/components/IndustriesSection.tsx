import React from "react";

const industries = [
    {
        name: "Government",
        desc: "Secure, scalable IT infrastructure for public sector operations.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
        ),
    },
    {
        name: "NGOs",
        desc: "Transparency and scalable data management for Non-Governmental Organizations.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
        ),
    },
    {
        name: "Finance",
        desc: "High-security payment gateways and fintech digital transformations.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        ),
    },
    {
        name: "Education",
        desc: "E-learning platforms and institutional management systems.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
        ),
    },
    {
        name: "Corporate",
        desc: "Enterprise resource planning and automated business workflows.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
        ),
    },
    {
        name: "Startups",
        desc: "Agile product development and scalable cloud architecture.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
        ),
    },
];

export default function IndustriesSection() {
    return (
        <section className="py-24 bg-gray-100 relative overflow-hidden" id="industries">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B30000]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">Trusted By Leading Organizations</h2>
                    <p className="text-gray-600 text-lg">
                        We've built long-term partnerships with government ministries, agencies, and development partners across Nigeria.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, index) => (
                        <div
                            key={index}
                            className="flex items-start p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-[0_15px_40px_rgba(179,0,0,0.08)] transform hover:-translate-y-2 transition-all duration-300 group cursor-default relative overflow-hidden"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {/* Animated left border on hover */}
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#B30000] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            
                            <div className="w-16 h-16 rounded-xl bg-[#B30000]/10 flex items-center justify-center text-[#B30000] mr-6 group-hover:bg-[#B30000] group-hover:text-white transition-colors duration-300 flex-shrink-0 shadow-inner">
                                {ind.icon}
                            </div>
                            
                            <div className="pt-2">
                                <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#B30000] transition-colors mb-2">
                                    {ind.name}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                                    {ind.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
