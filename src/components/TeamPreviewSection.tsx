import React from 'react';

const team = [
    {
        name: "Yunus Agboola",
        role: "Managing Director",
        desc: "A visionary leader with a proven track record in driving operational excellence and strategic growth in the technology sector."
    },
    {
        name: "Kabir Hassan",
        role: "Chief Operating Officer",
        desc: "Expert in optimizing corporate operations and ensuring business alignment with long-term strategic goals."
    },
    {
        name: "Akeem Abdulkareem",
        role: "Chief Financial Officer",
        desc: "Accomplished finance executive with expertise in fiscal strategy, risk management, and organizational transparency."
    },
    {
        name: "HR Manager",
        role: "Human Resource Manager",
        desc: "Dedicated to fostering a high-performance culture and managing talent development at Bisly Nigeria."
    }
];

export default function TeamPreviewSection() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">Meet Our Leadership</h2>
                    <div className="w-24 h-1 mx-auto mb-4 animate-premium-line rounded-full"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Our team of experts is dedicated to delivering excellence and innovation in every project we undertake.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center p-6 hover:shadow-md transition group">
                            <div className="w-24 h-24 mx-auto rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:border-[#B30000]/20 transition-colors">
                                <svg className="w-12 h-12 text-gray-300 group-hover:text-[#B30000]/40 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
                            <p className="text-[#B30000] font-semibold text-xs uppercase tracking-wider mb-4">{member.role}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
