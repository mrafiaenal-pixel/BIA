
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
    const router = useRouter();
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handle = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handle);
        return () => window.removeEventListener('scroll', handle);
    }, []);

    const isScrolled = scroll > 100;

    return (
        <header className="fixed top-0 left-0 w-full flex justify-center z-[9999] pointer-events-none">
            <nav
                className={`
                    flex justify-between items-center px-6 
                    bg-white h-[60px] rounded-full border border-stone-100
                    transition-all duration-500 ease-in-out pointer-events-auto
                    ${isScrolled ? 'w-[67%] mt-4 shadow-xl' : 'w-[85%] md:w-[50%] mt-10 shadow-2xl'}
                `}
                style={{
                    boxShadow: isScrolled
                        ? '0 20px 25px -5px rgba(0, 0, 0, 0.05)'
                        : '0 35px 60px -15px rgba(22, 163, 74, 0.2)'
                }}
            >
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-200">
                            <span className="text-white font-bold text-xs">P</span>
                        </div>
                        <span className="text-lg font-black text-green-800 tracking-tighter">
                            PLANT<span className="text-stone-400 font-medium">LOG</span>
                        </span>
                    </Link>
                </div>

                <ul className="hidden md:flex gap-8 items-center font-semibold text-stone-500 text-sm">
                    <li><Link href="/dashboard" className="hover:text-green-600 transition">Dashboard</Link></li>
                    <li><Link href="#laporan" className="hover:text-green-600 transition">Laporan</Link></li>
                    <li><Link href="#katalog" className="hover:text-green-600 transition">Katalog</Link></li>
                </ul>

                <button
                    onClick={() => router.push('/login')}
                    className="bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 active:scale-95 transition-all shadow-md shadow-green-100 text-sm"
                >
                    Login
                </button>
            </nav>
        </header>
    );
}
