"use client";

import React from "react";
import ContactSection from "@/components/ContactSection";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

export default function TestContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <MainHeader />
            <div className="py-12 bg-gray-50 text-center border-b border-gray-200">
                <h1 className="text-3xl font-bold text-bislyRed">Contact Form Test Page</h1>
                <p className="text-gray-600 mt-2">Use this page to verify the contact form submission logic and API connectivity.</p>
            </div>
            <ContactSection />
            <Footer />
        </main>
    );
}
