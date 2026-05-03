
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Register() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== passwordConfirmation) {
            setError('Konfirmasi password tidak cocok!');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation
            });

            if (response.data.access_token) {
                localStorage.setItem('TOKEN', response.data.access_token);
                router.push('/dashboard');
            } else {
                router.push('/login');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Gagal mendaftar, cek kembali data kamu!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8faf8] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Blobs Mirrored */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full max-w-md"
            >
                <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/60">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#111a11] rounded-2xl shadow-xl mb-4">
                            <span className="text-[#4ade80] font-display font-black text-2xl">T</span>
                        </div>
                        <h2 className="text-3xl font-display font-black text-stone-800 tracking-tight">Buat Akun</h2>
                        <p className="text-stone-500 font-medium mt-2">Mulai pantau lahan tanaman kamu</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-bold rounded-2xl text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-stone-700 ml-1 mb-1.5">Nama Lengkap</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Masukkan nama"
                                className="w-full px-6 py-3.5 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all text-stone-800"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-stone-700 ml-1 mb-1.5">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="name@example.com"
                                className="w-full px-6 py-3.5 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all text-stone-800"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-stone-700 ml-1 mb-1.5">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                                className="w-full px-6 py-3.5 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all text-stone-800"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-stone-700 ml-1 mb-1.5">Konfirmasi Password</label>
                            <input
                                type="password"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                required
                                placeholder="••••••••"
                                className="w-full px-6 py-3.5 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all text-stone-800"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full mt-4 bg-green-600 text-white py-4 rounded-2xl font-display font-black text-lg transition-all shadow-xl shadow-green-200 active:scale-[0.98] ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                        >
                            {loading ? 'Sedang diproses...' : 'Daftar Sekarang'}
                        </button>
                    </form>

                    <p className="text-center mt-8 text-sm font-medium text-stone-500">
                        Sudah punya akun?
                        <Link href="/login" className="text-green-600 font-bold hover:underline ml-1">Login Disini</Link>
                    </p>
                </div>

                <div className="text-center mt-8">
                    <Link href="/" className="text-stone-400 text-sm font-bold hover:text-stone-600 transition">
                        &larr; Kembali ke Beranda
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
