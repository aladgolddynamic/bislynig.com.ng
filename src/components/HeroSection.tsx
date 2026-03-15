import React from "react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gray-100 py-16 lg:py-24" id="hero">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    <div className="lg:col-span-6 text-left" data-purpose="hero-content">
                        <h1 className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl lg:leading-tight">
                            Empowering Businesses Through <span className="text-bislyRed">Innovative Technology</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            Driving digital transformation and sustainable growth with world-class IT solutions, robust
                            infrastructure, and strategic consultancy tailored for the Nigerian market and beyond.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link
                                className="w-full sm:w-auto px-8 py-4 bg-bislyRed text-white font-bold rounded shadow-lg hover:bg-[#7F1D1D] text-center transition"
                                href="#services"
                            >
                                Explore Services
                            </Link>
                            <Link
                                className="w-full sm:w-auto px-8 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold rounded hover:bg-[#1A1A1A] hover:text-white text-center transition"
                                href="#contact"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-6" data-purpose="hero-image">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt="African technology team working in a modern workspace"
                                className="w-full h-auto object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwRVxQ8h1TBb3c1VFlEAMGJl7Bwx8jen9i6B_1i1v0JJ9Cz7ktiAb_BFPD9H8ziBjNMKHkRbML5t8YkAjWSu3itFkBTEfXMUYMAVw-O8K6xkwsKcFggpjybuDiTXjcoG2tNXGTWi2dqlBmW5Clj1ZGeNepksDfUmEccxR9JDRROkPLRsANviUIUIIFszuN-kQ85jX_NTt2FV6Mcq05SKrT9EwKescM5b2gERN7wUpt_uDgqNwScyXztsZn3N-hQ2o4oaPyayShD0Qh"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-bislyRed/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
