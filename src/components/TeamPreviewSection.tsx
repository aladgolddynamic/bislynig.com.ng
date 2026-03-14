import React from 'react';

const team = [
    {
        name: "Morufu Tosin Ibrahim",
        role: "Chief Executive Officer",
        img: "/team/ceo.jpg",
        desc: "Over 15 years in tech leadership and strategic business development."
    },
    {
        name: "Yunus Agboola",
        role: "Managing Director",
        img: "/team/md.png",
        desc: "A visionary leader with a proven track record in driving operational excellence and strategic growth in the technology sector."
    },
    {
        name: "Akeem Abdulkareem",
        role: "Chief Financial Officer",
        img: "https://placehold.co/400x400/1A1A1A/FFFFFF.png?text=AA",
        desc: "Accomplished finance executive with expertise in fiscal strategy, risk management, and organizational transparency."
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center p-6 hover:shadow-md transition">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gray-50">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1A1A1A]">{member.name}</h3>
                            <p className="text-[#B30000] font-semibold text-sm mb-3">{member.role}</p>
                            <p className="text-gray-600 text-sm">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
