"use client";

import React, { useState, useEffect } from "react";

const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCakximu_L3KUisf5D6IGcjvGbODr9NUTXfY0--rVi1YXpSzhB6ggb_arE6Dl1_5UnSwBRlC2omTwJl9y-cxxXVoGuasbGkOX1KWdsHc3cbyPBH_4mjnm_jz_i4Ulu3OKUHJVXfRWL6ZgGrDpa9Z1qOo7SAMGWfznEcOA27tzVpJ937t99kjFhDdntzYrs20siqmrkwKbJEGCOJOXzmThmgOWPnCEKkgN-36LOhoW2atwPFU9g_7G4g7MON2F_BIueJOickl9uGULMC",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDUiOub8aZv_ZAIvTKOjWrht75meX6ISnwaT9fn_DYWhDDYoOGaPdJPNzVRAoMMjNfi3GrH4spKGu6DCc9c7ufoeF6RidqDjsju0Hfea1QwIYJfgw46L23VtHlM1yx77llRlYSWbjJk6B594ty4fqAEnqb5EpBk_P2DLCTuBgJPkrA7RLfPvll1pzcaPwbUI8_inB7Tnr9XH_v_4tM00Vo8a0rew1AhSro6n4v4xJ8IlYum45SeLuLYQ5BUqu_289Py2UN9J5nrk7ii"
];

export default function AboutSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setActiveIndex((current) => (current === 0 ? 1 : 0));
        }, 5000); // Switch every 5 seconds
        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        // Simple placeholder for SSR to avoid mismatch
        return <section className="py-20 bg-gray-100" id="about" />;
    }

    return (
        <section className="py-20 bg-gray-100" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 group/text transition-all duration-500 hover:scale-[1.01]">
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 border-l-4 border-[#B30000] pl-4 transition-colors duration-300">
                            About Bisly Nigeria Limited
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-600 text-lg leading-relaxed transition-colors duration-300 group-hover/text:text-[#1A1A1A]">
                                Founded on the principles of excellence and innovation, Bisly Nigeria Limited is a premier technology
                                partner dedicated to solving complex business challenges. We bridge the gap between vision and reality
                                through technical expertise and strategic insight.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed transition-colors duration-300 group-hover/text:text-[#1A1A1A]">
                                Our mission is to lead the charge in Nigeria's digital revolution, providing organizations of all
                                sizes with the tools they need to thrive in a hyper-connected global economy.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 bg-white rounded-lg shadow-sm border-t-2 border-[#B30000] transform transition-all duration-700 hover:-translate-y-4 hover:shadow-xl animate-slide-up cursor-default">
                                <span className="block text-2xl font-bold text-[#B30000]">150+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Projects Delivered</span>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-sm border-t-2 border-[#B30000] transform transition-all duration-700 hover:-translate-y-4 hover:shadow-xl animate-slide-up delay-150 cursor-default">
                                <span className="block text-2xl font-bold text-[#B30000]">20+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Technologies Used</span>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-sm border-t-2 border-[#B30000] transform transition-all duration-700 hover:-translate-y-4 hover:shadow-xl animate-slide-up delay-300 cursor-default">
                                <span className="block text-2xl font-bold text-[#B30000]">6+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Industries Served</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl group/slider">
                        {images.map((img, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                                        isActive 
                                            ? "translate-x-0 z-10" 
                                            : idx < activeIndex 
                                                ? "-translate-x-full z-0" 
                                                : "translate-x-full z-0"
                                    }`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Corporate Strategy Meeting"
                                        className={`w-full h-full object-cover transform transition-transform duration-[6s] ease-linear ${
                                            isActive ? "scale-105" : "scale-100"
                                        }`}
                                        src={img}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#B30000]/10 to-transparent"></div>
                                </div>
                            );
                        })}
                        
                        {/* Static Overlay Decorations to emphasize slider */}
                        <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                            {images.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? "w-8 bg-[#B30000]" : "w-2 bg-white/50"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
