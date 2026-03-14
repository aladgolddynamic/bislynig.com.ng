"use client";

import React, { useState, useEffect } from "react";

const expertiseAreas = [
    {
        title: "Software Development",
        desc: "Custom enterprise software, automation platforms, and scalable digital systems built to support modern business operations.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDesjH1efJQwCk5fqyp5QPn6qx_2ym8LkinlA79VBx8nqgW9XWX3LeoG6uJwZKWx0A-FIoNw2KgYA7e_shYuzk1XBtFsgGMwxBITCGjoTmDpHvY9pfebuL0PFUYvO7Y_XXXsbKblpLmMbWKMsd36orYYOLE9bIPWJIcCP8Jh9p6jnaGy7ttPbKU8WezF4vDFKvPyaqupYI2C9SpCNOfmiDhZN0n6Zemat-1d2H53b88uaqmioujCyLCvCjkffJcTY-1L0p3u1My3Z0s",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
        ],
    },
    {
        title: "Cybersecurity Solutions",
        desc: "Advanced security frameworks, threat detection systems, and network protection strategies for enterprise environments.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBMfrNHGM9MYD6yAYAlRCP-KgP73qcY5gLth96xY_jrZYZYCfaJOIm-jONy1Svl2DE5SNq3SFfNM8GK-XVaLTUgxGio-WtPbNg8t8S8WWXRxxF-7a_pSwDE4Dmjb6R-XTnOuZaJDjRBjQf3mg8RVwbzJ4NpfKtfaMg_PlXLfwf2cF3jRMkc_wh6yVPEJtHFO6tIwgg8VXCjrfyIRZ4GyUhGC_68UL4aahGwgdcZv1o9pORAvkEpJJElAyfB9NQCxWD0vTduqezexuj_",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000"
        ],
    },
    {
        title: "Data Protection & Compliance",
        desc: "Data privacy implementation, regulatory compliance advisory, and secure data governance aligned with NDPR.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAdLIPVRjoynJYxSNhlnDlV0Ct7M7702IV29VRCPIU2A6w4qKWku4KyM5QJHk9CoF2PX4c4I5C0AaSTc_r4Qsa5wfYZ8ZtXcLQ3S2-ftOidT_k1fD1oF8UTPhiEQ9V83R_3I6jqcfqepfSBCRj9ByXLapshd_WDxdapXp0wQDUvUi4T5pscFCagP2diKu-RXdDCv0sLDo3ltDS2hnGuy_zoz5bH8fI1LXoOIgW9qJuCkkuPheyG3nbUoIsYyE2ifawfmAqNbawj9qgQ",
            "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1512758017275-da4461109f38?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
        ],
    },
    {
        title: "ICT Infrastructure Deployment",
        desc: "Enterprise networking, data infrastructure deployment, and secure digital environments for modern organizations.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCgdD7SmASmcVv5LUE3ZoSLHYNX9lAb3JVSfAZ2wimbPdlG-aIr5NKCtXFQUS-5XaWA8MHDDnB6n5jH0KnbcgevW2U0C1DtrkKyWrGAOg4yZ2cGazoBsPE9DlXbatgPpRXMtysefH7XUX6__u1BfP-TNx7MnxafrLh3HOkeMoCzvJm2KedQQshU__NWBB7QpJbJGkVgjooqgZB88OtEkDWUdIm5MmoODGoztSeFPx-1tYA_6WCQAm0T5Rf1ApSwr8ogXz9GZbIJQ539",
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1515233157579-272e5052994f?auto=format&fit=crop&q=80&w=1000"
        ],
    },
    {
        title: "Web & Mobile Applications",
        desc: "Modern web platforms and mobile applications designed for performance, usability, and scalability.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAhpwOtoyEX7vCVNcWYVZoF6aHaymTIn9CigknGgobcPjtg9b3Ziw2wXbrYRxKUpsrJ_sp84EPyDuqr3J-YwhSj2SDJLsKvf1h43CR2Kbgf5LBN4eqdmJg0XjwRsyKP8FTTY6DxAlMV1R8dkLx-ihDPmjF2e3YJAmSoZ4zORcHJhFGoKHvU4v5-h5u50lNQ3Q15jVmaHb3jKtpljtsZiPhUHIgvndGPnkXCa4bRUBQ9M0QHYJ0COO0yhEY0ci87XfNnAT1f3l4u73At",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
        ],
    },
    {
        title: "Procurement & Technology Supply",
        desc: "Strategic sourcing and supply of enterprise technology equipment, infrastructure components, and digital tools.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC5-mmlfTYxZFiHrCQ5Jmvm7BSjlMJ53gR6PppMm0QOlNmzUvGYoQR6POHi2vnuNOO-19hUtQk9apmKmLhK5Z0GTtxQ-1UZXABDPinAY84VcvgQTteCeVnanJszrzpHIkEa7VjcoDdn2MkXzwDwzgWJ19wUDBChJjOveG1n-knrOAtPA83tV6v73oJVgkPKs7txS56o1pG0ZQdC2gTN_xP_krhA6u5KqqDmVJkfC7PsP6GN3DZycDRtNrNJLDSL-qvXrsy21ceSwMUf",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1000"
        ],
    },
];

function ExpertiseCard({ area }: { area: typeof expertiseAreas[0] }) {
    const [isHovered, setIsHovered] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let timeout: NodeJS.Timeout;
        
        if (isHovered && area.images.length > 1) {
            // Start the first transition almost immediately
            timeout = setTimeout(() => {
                setImgIndex(1);
                // Then start the regular cycle
                interval = setInterval(() => {
                    setImgIndex((prev) => (prev + 1) % area.images.length);
                }, 1000);
            }, 100); 
        } else {
            setImgIndex(0);
        }
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isHovered, area.images.length]);

    return (
        <div 
            className="group relative h-96 overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-150 hover:scale-110 z-0 hover:z-20 hover:ring-1 hover:ring-[#B30000]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Images */}
            {area.images.map((img, idx) => (
                <img
                    key={idx}
                    alt={area.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ${
                        imgIndex === idx ? "opacity-100 scale-110" : "opacity-0 scale-100"
                    }`}
                    src={img}
                />
            ))}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:via-black/70 transition-colors duration-300"></div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-2 text-[#B30000] group-hover:text-white drop-shadow-sm transition-all duration-300 group-hover:-translate-y-2">
                    {area.title}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-gray-200">
                    {area.desc}
                </p>
            </div>
        </div>
    );
}

export default function TechExpertiseSection() {
    return (
        <section className="py-16 bg-gray-100 overflow-hidden" id="expertise">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4 transition-all duration-500 hover:tracking-tight">
                        Technology Expertise
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-4 animate-premium-line rounded-full"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Our team combines modern technologies and practical industry experience to deliver scalable, secure, and
                        high-performance solutions for organizations.
                    </p>
                </div>

                {/* Large Visual Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseAreas.map((area, index) => (
                        <ExpertiseCard key={index} area={area} />
                    ))}
                </div>
            </div>
        </section>
    );
}
