import React from "react";

export default function WhyChooseSection() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10">Why Organizations Choose Bisly</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-6 w-6 text-[#B30000]">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold">Innovative Tech</h4>
                                    <p className="text-gray-600">
                                        We leverage cutting-edge frameworks and methodologies to keep you ahead of the curve.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-6 w-6 text-[#B30000]">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold">Professional Experts</h4>
                                    <p className="text-gray-600">
                                        Our team consists of certified engineers and industry veterans with proven track records.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-6 w-6 text-[#B30000]">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold">Reliable Support</h4>
                                    <p className="text-gray-600">
                                        We don't just build and leave; we provide ongoing 24/7 technical support and maintenance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Consultants having a discussion"
                            className="rounded-2xl border-8 border-gray-50 shadow-xl"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUiOub8aZv_ZAIvTKOjWrht75meX6ISnwaT9fn_DYWhDDYoOGaPdJPNzVRAoMMjNfi3GrH4spKGu6DCc9c7ufoeF6RidqDjsju0Hfea1QwIYJfgw46L23VtHlM1yx77llRlYSWbjJk6B594ty4fqAEnqb5EpBk_P2DLCTuBgJPkrA7RLfPvll1pzcaPwbUI8_inB7Tnr9XH_v_4tM00Vo8a0rew1AhSro6n4v4xJ8IlYum45SeLuLYQ5BUqu_289Py2UN9J5nrk7ii"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
