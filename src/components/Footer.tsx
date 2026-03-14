import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-gray-300 py-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="mb-4 bg-white p-2 inline-block rounded">
                            <Image
                                src="/logo.png"
                                alt="Bisly Logo"
                                width={120}
                                height={40}
                            />
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Bisly Nigeria Limited provides premium technology consulting, software development, and ICT solutions for modern enterprises.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white hover:text-[#B30000] transition">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </Link>
                            <Link href="#" className="text-white hover:text-[#B30000] transition">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </Link>
                            <Link href="#" className="text-white hover:text-[#B30000] transition">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </Link>
                            <Link href="mailto:info@bislynig.com.ng" className="text-white hover:text-[#B30000] transition">
                                <span className="sr-only">Email</span>
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </Link>
                            <Link href="#" className="text-white hover:text-[#B30000] transition">
                                <span className="sr-only">YouTube</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[#B30000] font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="#services" className="hover:text-[#B30000] transition text-sm">ERP Systems</Link></li>
                            <li><Link href="#services" className="hover:text-[#B30000] transition text-sm">Software Development</Link></li>
                            <li><Link href="#services" className="hover:text-[#B30000] transition text-sm">Data Protection Audit</Link></li>
                            <li><Link href="#services" className="hover:text-[#B30000] transition text-sm">Cybersecurity Services</Link></li>
                            <li><Link href="#services" className="hover:text-[#B30000] transition text-sm">IT Consultancy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[#B30000] font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="#about" className="hover:text-[#B30000] transition text-sm">About Us</Link></li>
                            <li><Link href="#expertise" className="hover:text-[#B30000] transition text-sm">Our Expertise</Link></li>
                            <li><Link href="#industries" className="hover:text-[#B30000] transition text-sm">Industries</Link></li>
                            <li><Link href="#contact" className="hover:text-[#B30000] transition text-sm">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[#B30000] font-bold mb-4 uppercase tracking-wider text-sm">Contact Info</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-[#B30000] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Abuja Office</p>
                                    <p className="text-xs leading-relaxed mb-2">No 8 Suez Crescent, Abacha estate, Zone 4, Abuja.</p>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Lagos Office</p>
                                    <p className="text-xs leading-relaxed">No 10, Mende Lane, Maryland, Lagos.</p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-[#B30000] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path></svg>
                                <Link href="mailto:info@bislynig.com.ng" className="text-sm hover:text-white transition">info@bislynig.com.ng</Link>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-[#B30000] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <Link href="tel:+234" className="text-sm hover:text-white transition">07067799450
                                    09068879277</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-800 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Bisly Nigeria Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
