'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Shield, Smartphone, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-green-100">
      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full blur-[100px] opacity-40 animate-blob" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-200 rounded-full blur-[100px] opacity-40 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full shadow-sm mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-stone-600 uppercase tracking-widest">Inovasi Tani Digital 4.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-stone-900">
            Monitor Kebun Anda <br />
            <span className="text-green-600">Lebih Cerdas.</span>
          </h1>
          
          <p className="text-stone-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Optimalkan pertumbuhan tanaman dengan data sensor real-time. Pantau nutrisi NPK, kelembaban, dan pH tanah langsung dari smartphone Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register" 
              className="bg-stone-900 text-white px-10 py-4 rounded-2xl hover:bg-stone-800 transition shadow-xl shadow-stone-200 font-bold flex items-center justify-center gap-2 group"
            >
              Mulai Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/dashboard"
              className="bg-white border border-stone-200 text-stone-700 px-10 py-4 rounded-2xl hover:bg-stone-50 transition font-bold shadow-sm"
            >
              Lihat Demo
            </Link>
          </div>
        </div>
      </header>

      {/* Stats/Features Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <FeatureCard 
            icon={Leaf} 
            title="Presisi Nutrisi" 
            desc="Dapatkan rekomendasi pemupukan yang akurat berdasarkan sensor NPK."
            color="text-green-600"
            bgColor="bg-green-50"
          />
          <FeatureCard 
            icon={Smartphone} 
            title="Pantauan Real-time" 
            desc="Akses data lahan Anda kapan saja dan di mana saja melalui dashboard digital."
            color="text-blue-600"
            bgColor="bg-blue-50"
          />
          <FeatureCard 
            icon={Shield} 
            title="Keamanan Lahan" 
            desc="Sistem peringatan dini untuk kondisi tanah yang ekstrim atau kekurangan air."
            color="text-orange-600"
            bgColor="bg-orange-50"
          />
        </div>

        {/* Highlight Section */}
        <section className="bg-white rounded-[3rem] p-8 md:p-16 border border-stone-100 shadow-2xl shadow-green-50 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-6 leading-tight">
                        Teknologi IoT yang <br/> Memahami Tanaman Anda
                    </h2>
                    <ul className="space-y-4 mb-8">
                        {['Sensor NPK Digital', 'Monitoring pH Presisi', 'Analisis Data Historis', 'Notifikasi Cerdas'].map((item) => (
                            <li key={item} className="flex items-center gap-3 font-bold text-stone-600">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-green-600" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button className="text-green-600 font-black flex items-center gap-2 hover:gap-3 transition-all">
                        Pelajari Arsitektur Perangkat <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
                <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://picsum.photos/seed/agriculture/800/600" 
                        alt="Smart Agriculture" 
                        className="object-cover w-full h-full"
                        data-ai-hint="smart farming"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </div>
        </section>
      </main>

      <footer className="py-20 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
                    <Leaf className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-black text-stone-900 tracking-tighter">
                    TANI<span className="text-stone-400 font-medium">SMART</span>
                </span>
              </div>
              <p className="text-stone-500 font-medium mb-8 max-w-md mx-auto">
                  Solusi digitalisasi pertanian untuk masa depan ketahanan pangan Indonesia yang lebih baik.
              </p>
              <div className="flex justify-center gap-8 text-sm font-bold text-stone-400">
                  <a href="#" className="hover:text-stone-800 transition">Instagram</a>
                  <a href="#" className="hover:text-stone-800 transition">Twitter</a>
                  <a href="#" className="hover:text-stone-800 transition">LinkedIn</a>
              </div>
              <p className="mt-12 text-xs font-bold text-stone-300 uppercase tracking-widest">© 2024 TaniSmart Indonesia. All Rights Reserved.</p>
          </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, color, bgColor }: any) {
    return (
        <div className="bg-white p-8 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default">
            <div className={`w-14 h-14 ${bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <Icon className={`w-7 h-7 ${color}`} />
            </div>
            <h3 className="text-xl font-black mb-3 text-stone-900 leading-tight">{title}</h3>
            <p className="text-stone-500 font-medium text-sm leading-relaxed">{desc}</p>
        </div>
    );
}