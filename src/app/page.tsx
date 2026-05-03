
'use client';

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <header className="pt-48 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Pantau Pertumbuhan <br />
            <span className="text-green-600">Tanaman Anda</span> Secara Real-time
          </h1>
          <p className="text-stone-500 text-lg mb-8">
            Sistem laporan digital untuk mencatat kelembapan, suhu, dan perkembangan harian koleksi botani Anda.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-stone-800 text-white px-8 py-3 rounded-xl hover:bg-stone-900 transition active:scale-95 font-bold">
              Mulai Laporan
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="border border-stone-300 px-8 py-3 rounded-xl hover:bg-stone-100 transition active:scale-95 font-bold"
            >
              Klik Dihitung: {count}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              🌿
            </div>
            <h3 className="text-xl font-bold mb-2 text-stone-800">Monstera Deliciosa</h3>
            <p className="text-sm text-stone-500 mb-4">Laporan terakhir: 2 jam yang lalu</p>
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-blue-500">💦 80% Lembap</span>
              <span className="text-orange-500">☀️ 25°C</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              🌵
            </div>
            <h3 className="text-xl font-bold mb-2 text-stone-800">Cactus Echinopsis</h3>
            <p className="text-sm text-stone-500 mb-4">Laporan terakhir: 1 hari yang lalu</p>
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-blue-500">💦 20% Kering</span>
              <span className="text-orange-500">☀️ 30°C</span>
            </div>
          </div>

          <div className="border-2 border-dashed border-stone-300 p-6 rounded-3xl flex flex-col items-center justify-center text-stone-400 hover:border-green-500 hover:text-green-500 cursor-pointer transition-all active:scale-95">
            <span className="text-4xl mb-2">+</span>
            <span className="font-bold">Tambah Tanaman</span>
          </div>
        </div>
      </main>
    </div>
  );
}
