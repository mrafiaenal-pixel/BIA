
'use client';

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import { 
  Thermometer, 
  Droplets, 
  FlaskConical, 
  Zap, 
  AlertTriangle, 
  RefreshCw,
  ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";

const SensorCard = ({ title, value, status, color }: { title: string, value: string, status: string, color: string }) => (
  <div className="bg-[#111a11] border border-[#1e2e1e] rounded-2xl p-6 relative overflow-hidden group hover:border-[#2d3d2d] transition-colors">
    <div className="absolute top-0 left-0 w-full h-[2px]" style={{ backgroundColor: color }} />
    <p className="text-[11px] font-mono font-medium text-[#4a6b4a] uppercase tracking-widest mb-3">{title}</p>
    <h3 className="text-3xl font-display font-bold mb-4" style={{ color }}>{value}</h3>
    <div 
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold" 
        style={{ backgroundColor: `${color}22`, color }}
    >
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
        {status}
    </div>
  </div>
);

const NPKCard = ({ name, sub, emoji, value, color, percent }: any) => (
  <div className="bg-[#111a11] rounded-2xl p-6 border border-transparent hover:border-[#2d3d2d] transition-all">
    <div className="flex justify-between items-start mb-6">
        <div>
            <h4 className="text-[#e8f5e8] font-bold">{name}</h4>
            <p className="text-[10px] font-mono text-[#4a6b4a] uppercase mt-1">{sub}</p>
        </div>
        <span className="text-xl">{emoji}</span>
    </div>
    
    <div className="flex items-baseline gap-2 mb-6">
        <h2 className="text-4xl font-display font-black" style={{ color }}>{value}</h2>
        <span className="text-[#4a6b4a] font-mono text-xs">mg/kg</span>
    </div>

    <div className="space-y-2">
        <div className="h-1.5 bg-[#1e2e1e] rounded-full overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                className="h-full rounded-full" 
                style={{ backgroundColor: color }}
            />
        </div>
        <div className="flex justify-between text-[9px] font-mono text-[#4a6b4a]">
            <span>0</span>
            <span>100</span>
        </div>
    </div>
  </div>
);

export default function Dashboard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div className="flex bg-[#0a0f0a] min-h-screen text-[#e8f5e8] selection:bg-[#4ade8022]">
      <Sidebar />

      <main className="flex-1 pl-[220px] p-8 dark-scroll overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-display font-bold text-[#e8f5e8]">Dashboard Nutrisi 🌿</h1>
            <p className="text-xs font-mono text-[#4a6b4a] mt-1">Update terakhir: {time || "Loading..."}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#111a11] border border-[#1e2e1e] rounded-full">
                <div className="pulse-dot" />
                <span className="text-[10px] font-bold text-[#4ade80] uppercase tracking-widest">Live</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-[#111a11] border border-[#1e2e1e] rounded-xl cursor-pointer hover:bg-[#162016]">
                <span className="text-xs font-bold text-[#6b8f6b]">Lahan Utama (Sektor A)</span>
                <ChevronDown className="w-4 h-4 text-[#4a6b4a]" />
            </div>

            <button className="p-2.5 bg-[#4ade8022] text-[#4ade80] rounded-xl hover:bg-[#4ade8033] transition-all">
                <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-[#1a0f00] border border-[#3d2200] border-l-4 border-l-[#fbbf24] p-5 rounded-2xl flex items-center gap-4 mb-10">
            <AlertTriangle className="text-[#fbbf24] w-6 h-6" />
            <div>
                <p className="text-sm font-bold text-[#fbbf24]">Peringatan Nutrisi!</p>
                <p className="text-xs text-[#6b8f6b] opacity-80">Kandungan Nitrogen berada di bawah ambang batas optimal (42 mg/kg). Disarankan pemupukan urea segera.</p>
            </div>
        </div>

        {/* Sensor Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <SensorCard title="🌡 Suhu Tanah" value="27°C" status="Normal" color="#4ade80" />
            <SensorCard title="💧 Kelembaban" value="68%" status="Optimal" color="#4ade80" />
            <SensorCard title="⚗️ pH Tanah" value="6.2" status="Ideal" color="#60a5fa" />
            <SensorCard title="⚡ EC Tanah" value="1.8" status="Normal" color="#fbbf24" />
        </div>

        {/* NPK Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <NPKCard 
                name="Nitrogen (N)" 
                sub="Pertumbuhan daun & batang" 
                emoji="🍃" 
                value="42" 
                color="#f87171" 
                percent={42} 
            />
            <NPKCard 
                name="Fosfor (P)" 
                sub="Perkembangan akar & bunga" 
                emoji="🌸" 
                value="74" 
                color="#4ade80" 
                percent={74} 
            />
            <NPKCard 
                name="Kalium (K)" 
                sub="Ketahanan & kualitas buah" 
                emoji="🌾" 
                value="58" 
                color="#fbbf24" 
                percent={58} 
            />
        </div>

        {/* Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#111a11] border border-[#1e2e1e] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center">
                <span className="text-5xl mb-6">📊</span>
                <h4 className="text-[#e8f5e8] font-bold mb-2">Statistik Pertumbuhan</h4>
                <p className="text-[#4a6b4a] text-sm max-w-xs">Chart akan tampil di sini. Sambungkan dengan Recharts + API Historis.</p>
            </div>
            <div className="bg-[#111a11] border border-[#1e2e1e] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center">
                <span className="text-5xl mb-6">🤖</span>
                <h4 className="text-[#e8f5e8] font-bold mb-2">Diagnosa AI</h4>
                <p className="text-[#4a6b4a] text-sm max-w-xs">Hasil diagnosa otomatis akan muncul di sini. Hubungkan ke endpoint /api/recommendations.</p>
            </div>
        </div>
      </main>
    </div>
  );
}
