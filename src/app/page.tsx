
'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, LayoutDashboard, Microscope, Camera, Bell, History, Trees } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const stats = [
    { label: "Uptime", value: "99.9%" },
    { label: "Delay", value: "<1s" },
    { label: "Sensor", value: "6+" },
    { label: "Monitoring", value: "24/7" },
  ];

  const features = [
    { icon: "📡", title: "Monitor Real-time", desc: "Pantau kondisi tanah secara langsung detik demi detik." },
    { icon: "🧪", title: "Analisis NPK Otomatis", desc: "Kalkulasi kebutuhan nutrisi tanaman dengan presisi tinggi." },
    { icon: "📷", title: "Deteksi via Kamera", desc: "Identifikasi gejala defisiensi nutrisi hanya melalui foto." },
    { icon: "🔔", title: "Alert Pintar", desc: "Notifikasi otomatis saat kondisi tanah kritis atau abnormal." },
    { icon: "📊", title: "Riwayat & Laporan", desc: "Data historis lengkap untuk evaluasi pertumbuhan musiman." },
    { icon: "🌾", title: "Multi Lahan", desc: "Kelola banyak lahan pertanian dalam satu dashboard terpusat." },
  ];

  return (
    <div className="min-h-screen bg-[#f8faf8] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-green-200/40 rounded-full blur-[100px] animate-blob" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-stone-200 rounded-full shadow-sm mb-10"
          >
            <div className="pulse-dot" />
            <span className="text-[10px] font-mono font-bold text-stone-600 uppercase tracking-widest">IoT + React + MySQL</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black mb-8 leading-[1.05] tracking-tight text-stone-900"
          >
            Pantau Nutrisi <br />
            <span className="text-green-600">Tanaman</span> Anda Secara Real-time
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium"
          >
            Optimalkan pertumbuhan hasil tani dengan sistem monitoring cerdas. Data akurat, keputusan tepat, panen meningkat.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button 
              onClick={() => router.push('/register')}
              className="bg-green-600 text-white px-10 py-4 rounded-2xl hover:bg-green-700 transition shadow-xl shadow-green-100 font-bold flex items-center justify-center gap-2 group"
            >
              Mulai Gratis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => router.push('/dashboard')}
              className="bg-white border border-stone-200 text-stone-800 px-10 py-4 rounded-2xl hover:bg-stone-50 transition font-bold"
            >
              Lihat Dashboard
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white border border-stone-200 p-8 rounded-2xl shadow-sm text-center"
            >
                <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mb-2">{stat.label}</p>
                <h3 className="text-3xl font-display font-black text-green-600">{stat.value}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-black text-stone-900 mb-4">Fitur Unggulan TaniSmart</h2>
            <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">{feat.title}</h3>
              <p className="text-stone-500 font-medium text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Dark Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#0a0f0a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#e8f5e8] mb-8 relative z-10">
                Siap Modernisasi <br /> Lahan Pertanian Anda?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <button 
                  onClick={() => router.push('/register')}
                  className="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-700 transition"
                >
                    Daftar Sekarang
                </button>
                <button 
                  onClick={() => router.push('/login')}
                  className="bg-transparent border border-[#1e2e1e] text-[#e8f5e8] px-10 py-4 rounded-2xl font-bold hover:bg-[#111a11] transition"
                >
                    Masuk Akun
                </button>
            </div>
        </div>
      </section>

      <footer className="py-20 border-t border-stone-200 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-display font-bold">T</span>
              </div>
              <span className="text-lg font-display font-extrabold text-stone-900">TaniSmart</span>
          </div>
          <p className="text-stone-400 font-medium text-sm">© 2024 TaniSmart Indonesia. Digitalizing Agriculture for Better Future.</p>
      </footer>
    </div>
  );
}
