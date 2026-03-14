"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <section className="sticky top-0 z-50">
            <header className="bg-white border-b border-gray-100 shadow-sm relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="block">
                                <Image
                                    alt="Bisly Nigeria Limited Logo"
                                    className="h-12 w-auto object-contain"
                                    src="/logo.png"
                                    width={150}
                                    height={48}
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8 items-center" data-purpose="desktop-nav">
                            <Link href="#about" className="text-sm font-semibold text-[#1A1A1A] hover:text-[#B30000] nav-link-hover">
                                About
                            </Link>
                            <Link href="#services" className="text-sm font-semibold text-[#1A1A1A] hover:text-[#B30000] nav-link-hover">
                                Services
                            </Link>
                            <Link href="#expertise" className="text-sm font-semibold text-[#1A1A1A] hover:text-[#B30000] nav-link-hover">
                                Expertise
                            </Link>
                            <Link href="#industries" className="text-sm font-semibold text-[#1A1A1A] hover:text-[#B30000] nav-link-hover">
                                Industries
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-md text-white bg-[#B30000] hover:bg-[#8B0000] transition shadow-md"
                            >
                                Get Started
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="text-[#1A1A1A] hover:text-[#B30000] focus:outline-none"
                                type="button"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0 z-40">
                        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
                            <Link
                                href="#about"
                                className="block px-3 py-3 rounded-md text-base font-medium text-[#1A1A1A] hover:text-[#B30000] hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#services"
                                className="block px-3 py-3 rounded-md text-base font-medium text-[#1A1A1A] hover:text-[#B30000] hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="#expertise"
                                className="block px-3 py-3 rounded-md text-base font-medium text-[#1A1A1A] hover:text-[#B30000] hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Expertise
                            </Link>
                            <Link
                                href="#industries"
                                className="block px-3 py-3 rounded-md text-base font-medium text-[#1A1A1A] hover:text-[#B30000] hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Industries
                            </Link>
                            <div className="pt-4 pb-2">
                                <Link
                                    href="#contact"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-white bg-[#B30000] hover:bg-[#8B0000] shadow-sm"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </section>
    );
}
