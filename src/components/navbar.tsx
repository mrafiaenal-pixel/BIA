
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full flex justify-center z-[9999] pointer-events-none p-4">
            <motion.nav
                initial={false}
                animate={{
                    width: scrolled ? "70%" : "90%",
                    marginTop: scrolled ? "0.5rem" : "1.5rem",
                    padding: scrolled ? "0.5rem 1.5rem" : "1rem 2rem",
                }}
                className={`
                    flex justify-between items-center 
                    bg-white/90 backdrop-blur-xl rounded-full border border-stone-100
                    pointer-events-auto shadow-2xl transition-all duration-500
                `}
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
                        <span className="text-white font-display font-bold text-xl">T</span>
                    </div>
                    <span className="text-xl font-display font-extrabold text-stone-900 tracking-tighter">
                        Tani<span className="text-green-600">Smart</span>
                    </span>
                </div>

                <ul className="hidden md:flex gap-10 items-center font-semibold text-stone-500 text-sm">
                    <li><Link href="/" className="hover:text-green-600 transition">Beranda</Link></li>
                    <li><Link href="/dashboard" className="hover:text-green-600 transition">Dashboard</Link></li>
                    <li><Link href="/camera" className="hover:text-green-600 transition">Kamera</Link></li>
                </ul>

                <button
                    onClick={() => router.push('/login')}
                    className="bg-green-600 text-white px-8 py-2.5 rounded-full font-bold hover:bg-green-700 active:scale-95 transition-all shadow-md shadow-green-100 text-sm"
                >
                    Masuk
                </button>
            </motion.nav>
        </header>
    );
}
