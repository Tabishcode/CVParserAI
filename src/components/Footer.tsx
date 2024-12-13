import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-10">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:gap-12 lg:px-0">
                {/* Logo and Description */}
                <div>
                    <img
                        src="/logo.png" // Replace with your logo path
                        alt="Logo"
                        className="mb-4 h-10"
                    />
                    <p className="text-sm">
                        Bringing innovative solutions to streamline your workflow and boost
                        productivity. Your satisfaction is our priority.
                    </p>
                </div>

                {/* Section 1 */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/features" className="hover:underline">Features</a></li>
                        <li><a href="/pricing" className="hover:underline">Pricing</a></li>
                        <li><a href="/testimonials" className="hover:underline">Testimonials</a></li>
                    </ul>
                </div>

                {/* Section 2 */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/careers" className="hover:underline">Careers</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/blog" className="hover:underline">Blog</a></li>
                        <li><a href="/help" className="hover:underline">Help Center</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm">
                © 2024 Your Company Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
