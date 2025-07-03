import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const FloatingButton: React.FC = () => {
    const [showArrow, setShowArrow] = useState(false);

    // Show scroll-to-top button after scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* WhatsApp Button (Always visible) */}
            <a
                href="https://wa.me/9686202046" // Replace with your number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-24 right-3 z-50"
            >
                <div className="w-[50px] h-[50px] bg-green-600 text-white flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
                    <FaWhatsapp size={24} />
                </div>
            </a>

            {/* Scroll To Top Arrow (Appears on scroll) */}
            {showArrow && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-3.5 z-50"
                >
                    <div className="w-[45px] h-[45px] bg-gradient-to-b from-blue-500 to-blue-900 text-white flex items-center justify-center rounded-md shadow-lg hover:scale-110 transition-transform duration-300">
                        <FaArrowUp size={20} />
                    </div>
                </button>
            )}
        </>
    );
}

export default FloatingButton