import React from "react";

export default function ServicesSection() {
    return (
        <section className="py-24 bg-[#1A1A1A] text-white relative" id="services">
            {/* Background Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://placehold.co/1920x1080?text=Data+Center+Abstract')] bg-cover bg-fixed"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4">Our Services</h2>
                    <div className="w-24 h-1 mx-auto mb-4 animate-premium-line rounded-full"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive end-to-end technology solutions designed to elevate your business operations and efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service Card 1: ERP */}
                    <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-700 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-bislyRed/20 text-bislyRed flex items-center justify-center rounded-lg mb-6 group-hover:bg-bislyRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Enterprise Resource Planning (ERP)</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Cloud-based ERP systems that provide automation and real-time insights.
                        </p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Business process automation</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Data-driven decision making</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Integration with existing systems</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Real-time business insights</li>
                        </ul>

                    </div>

                    {/* Service Card 2: Software Development */}
                    <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-700 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-bislyRed/20 text-bislyRed flex items-center justify-center rounded-lg mb-6 group-hover:bg-bislyRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Software Development</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Customized software solutions designed for high performance and scalability.
                        </p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Application design and development</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Business software systems</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Legacy system modernization</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Enterprise applications</li>
                        </ul>
                    </div>

                    {/* Service Card 3: Data Protection */}
                    <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-700 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-bislyRed/20 text-bislyRed flex items-center justify-center rounded-lg mb-6 group-hover:bg-bislyRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Data Protection Audit</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Ensuring compliance with global standards through rigorous evaluation.
                        </p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Risk assessment & Compliance</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Gap analysis & security auditing</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Standards: GDPR, CCPA, HIPAA</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> NDPR Compliance Audit</li>
                        </ul>
                    </div>

                    {/* Service Card 4: IT Consultancy */}
                    <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-700 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-bislyRed/20 text-bislyRed flex items-center justify-center rounded-lg mb-6 group-hover:bg-bislyRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">IT Consultancy Services</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Strategic advisory to align technology with your organizational roadmap.
                        </p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> IT Strategy development</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Cloud migration strategies</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Cybersecurity advisory</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Infrastructure optimization</li>
                        </ul>
                    </div>

                    {/* Service Card 5: Cybersecurity */}
                    <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-700 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-bislyRed/20 text-bislyRed flex items-center justify-center rounded-lg mb-6 group-hover:bg-bislyRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Cybersecurity Services</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Advanced threat detection and incident response for maximum protection.
                        </p>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Threat detection & monitoring</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Risk assessment & mitigation</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Security implementation</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-bislyRed rounded-full mr-2"></span> Incident response & recovery</li>
                        </ul>
                    </div>

                    {/* Service Card 6: General Contracting */}
                    <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-700 card-hover cursor-pointer group" data-purpose="service-card">
                        <div className="w-12 h-12 bg-bislyRed/20 text-bislyRed flex items-center justify-center rounded-lg mb-6 group-hover:bg-bislyRed group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">General Contracting Services</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-bislyRed text-xs font-bold uppercase mb-1">Supply & Procurement</h4>
                                <ul className="space-y-1 text-gray-400 text-[13px]">
                                    <li>Supply and Distribution services</li>
                                    <li>Procurement and Logistics</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-bislyRed text-xs font-bold uppercase mb-1">ICT Infrastructure</h4>
                                <ul className="space-y-1 text-gray-400 text-[13px]">
                                    <li>Network & Data center installs</li>
                                    <li>Facility Support & Maintenance</li>
                                    <li>Technical infrastructure upgrades</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
