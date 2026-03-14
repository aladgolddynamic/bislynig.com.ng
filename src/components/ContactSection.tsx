"use client";

import React, { useState, useEffect, useMemo } from "react";

export default function ContactSection() {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    // Memoize particles to satisfy React purity rules (Math.random in render is forbidden in React 19)
    const particles = useMemo(() => {
        return [...Array(50)].map((_, i) => ({
            id: i,
            r: Math.random() * 3 + 1.5,
            cx: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            cy: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            dur: `${Math.random() * 30 + 30}s`,
            opacityDur: `${Math.random() * 10 + 10}s`,
            opacity: Math.random() * 0.3 + 0.1
        }));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    company: "",
                    service: "",
                    message: ""
                });
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage("Failed to send message. Please check your connection.");
        }
    };

    return (
        <section className="relative py-24 bg-gray-100 overflow-hidden" id="contact">
            {/* Improved Red Particle Animation Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {mounted && particles.map((p) => (
                        <circle
                            key={p.id}
                            r={p.r}
                            fill="#B30000"
                            opacity={p.opacity}
                        >
                            <animate
                                attributeName="cx"
                                values={p.cx.join(';')}
                                dur={p.dur}
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="cy"
                                values={p.cy.join(';')}
                                dur={p.dur}
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="opacity"
                                values="0;0.4;0.2;0.5;0"
                                dur={p.opacityDur}
                                repeatCount="indefinite"
                            />
                        </circle>
                    ))}
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6 tracking-tight">
                        Start Your Next Project With Us
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                        Speak with our experts about technology solutions, infrastructure deployment, cybersecurity, or procurement
                        services for your organization.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                    {/* Left Column: Contact Details */}
                    <div className="w-full lg:w-1/3 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#B30000] opacity-5 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 border-b border-gray-100 pb-4">
                            Get In Touch
                        </h3>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 bg-[#B30000]/10 p-3 rounded-xl text-[#B30000]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-[#1A1A1A] font-bold mb-1">Office Addresses</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-[#B30000] text-xs font-bold uppercase tracking-wider mb-0.5">Corporate Office</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">No 8 Suez Crescent, Abacha estate, Zone 4, Abuja.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 bg-[#B30000]/10 p-3 rounded-xl text-[#B30000]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-[#1A1A1A] font-bold mb-1">Phone</h4>
                                    <p className="text-gray-600 block hover:text-[#B30000] transition">07067799450</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 bg-[#B30000]/10 p-3 rounded-xl text-[#B30000]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-[#1A1A1A] font-bold mb-1">Email</h4>
                                    <a href="mailto:info@bislynig.com.ng" className="text-gray-600 hover:text-[#B30000] transition group block">
                                        <span className="border-b border-transparent group-hover:border-[#B30000] pb-0.5">
                                            info@bislynig.com.ng
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 bg-white/50 border border-gray-100 rounded-2xl p-6 space-y-4 relative z-10">
                            <div className="flex items-center text-sm text-[#1A1A1A] font-medium">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                Response within 24 hours
                            </div>
                            <div className="flex items-center text-sm text-[#1A1A1A] font-medium">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                Free consultation available
                            </div>
                            <div className="flex items-center text-sm text-[#1A1A1A] font-medium">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                Confidentiality guaranteed
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="w-full lg:w-2/3 bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 relative">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Message Sent Successfully!</h3>
                                <p className="text-gray-600 mb-8">
                                    Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-[#B30000] font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                                            Full Name <span className="text-[#B30000]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 text-[#1A1A1A] placeholder-gray-500 focus:ring-2 focus:ring-[#B30000] focus:border-transparent transition outline-none"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                                            Email Address <span className="text-[#B30000]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 text-[#1A1A1A] placeholder-gray-500 focus:ring-2 focus:ring-[#B30000] focus:border-transparent transition outline-none"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 text-[#1A1A1A] placeholder-gray-500 focus:ring-2 focus:ring-[#B30000] focus:border-transparent transition outline-none"
                                            placeholder="+234 ..."
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                                            Organization / Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 text-[#1A1A1A] placeholder-gray-500 focus:ring-2 focus:ring-[#B30000] focus:border-transparent transition outline-none"
                                            placeholder="Your Company Ltd"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                                        Service of Interest <span className="text-[#B30000]">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 text-[#1A1A1A] focus:ring-2 focus:ring-[#B30000] focus:border-transparent transition outline-none appearance-none [&>option]:text-[#1A1A1A]"
                                            required
                                        >
                                            <option value="" disabled className="text-gray-500">Select a service...</option>
                                            <option value="Data Protection & Compliance">Data Protection & Compliance</option>
                                            <option value="Software Development">Software Development</option>
                                            <option value="Web & Mobile Apps">Web & Mobile Apps</option>
                                            <option value="Cybersecurity Solutions">Cybersecurity Solutions</option>
                                            <option value="ICT Infrastructure">ICT Infrastructure</option>
                                            <option value="Procurement & Supply">Procurement & Supply</option>
                                            <option value="IT Consultancy">IT Consultancy</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                                        Message <span className="text-[#B30000]">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 text-[#1A1A1A] placeholder-gray-500 focus:ring-2 focus:ring-[#B30000] focus:border-transparent transition outline-none resize-y"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>

                                {status === "error" && (
                                    <div className="p-4 bg-red-50 border border-red-100 text-[#B30000] text-sm rounded-xl">
                                        {errorMessage}
                                    </div>
                                )}

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full px-8 py-5 bg-[#B30000] hover:bg-[#8B0000] disabled:bg-gray-400 text-white font-bold text-lg rounded-xl shadow-[0_4px_14px_0_rgba(179,0,0,0.39)] hover:shadow-[0_6px_25px_rgba(179,0,0,0.4)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : "Request Consultation"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
