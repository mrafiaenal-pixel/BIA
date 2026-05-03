'use client';

import React from "react";
import Sidebar from "@/components/sidebar";
import { 
  Thermometer, 
  Droplets, 
  FlaskConical, 
  Zap, 
  AlertTriangle, 
  RefreshCw,
  TrendingUp,
  Leaf
} from "lucide-react";

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

const SensorCard = ({ title, value, unit, icon: Icon, color, trend }: { title: string, value: string, unit: string, icon: any, color: string, trend?: string }) => (
  <Card>
    <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl bg-opacity-10`} style={{ backgroundColor: `${color}20` }}>
            <Icon className="w-6 h-6" style={{ color }} />
        </div>
        {trend && (
            <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" /> {trend}
            </span>
        )}
    </div>
    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">{title}</p>
    <div className="flex items-baseline gap-1">
        <h2 className="text-3xl font-black text-stone-800">{value}</h2>
        <span className="text-stone-400 font-bold text-sm">{unit}</span>
    </div>
  </Card>
);

const NPKCard = ({ name, value, percentage, color }: { name: string, value: string, percentage: number, color: string }) => (
  <Card className="relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10">
        <Leaf className="w-12 h-12" style={{ color }} />
    </div>
    <h3 className="text-stone-500 font-bold text-sm mb-1">{name}</h3>
    <h2 className="text-3xl font-black mb-4 text-stone-800">{value} <span className="text-xs text-stone-400 font-medium">mg/kg</span></h2>
    <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold text-stone-400 uppercase">
            <span>Level Nutrisi</span>
            <span>{percentage}%</span>
        </div>
        <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
            <div 
                className="h-full rounded-full transition-all duration-1000" 
                style={{ width: `${percentage}%`, backgroundColor: color }} 
            />
        </div>
    </div>
  </Card>
);

export default function Dashboard() {
  return (
    <div className="flex bg-stone-50 min-h-screen text-stone-800 font-sans">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 md:pl-[300px] space-y-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-stone-900 tracking-tight">Dashboard Nutrisi 🌿</h1>
            <p className="text-sm text-stone-500 font-medium mt-1">Status kebun Anda diperbarui 2 menit yang lalu</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-stone-600 text-xs font-bold uppercase tracking-wider">Sistem Aktif</span>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold shadow-lg shadow-green-100 active:scale-95">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-center gap-4 text-amber-800 shadow-sm">
          <div className="bg-amber-100 p-2 rounded-lg">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold">Peringatan Nutrisi</p>
            <p className="text-xs font-medium opacity-80">Kandungan Nitrogen berada di bawah ambang batas optimal. Disarankan pemupukan urea segera.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SensorCard title="Suhu Tanah" value="27.4" unit="°C" icon={Thermometer} color="#10b981" trend="+0.5%" />
          <SensorCard title="Kelembaban" value="68" unit="%" icon={Droplets} color="#3b82f6" trend="-2.1%" />
          <SensorCard title="pH Tanah" value="6.2" unit="pH" icon={FlaskConical} color="#8b5cf6" />
          <SensorCard title="Konduktivitas" value="1.8" unit="mS/cm" icon={Zap} color="#f59e0b" trend="+0.2%" />
        </div>

        <div>
            <div className="flex items-center justify-between mb-6 px-1">
                <h2 className="text-xl font-black text-stone-800 tracking-tight">Analisis NPK Tanaman</h2>
                <button className="text-xs font-bold text-green-600 hover:underline">Lihat Detail Laporan</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NPKCard name="Nitrogen (N)" value="42" percentage={40} color="#ef4444" />
                <NPKCard name="Fosfor (P)" value="74" percentage={85} color="#10b981" />
                <NPKCard name="Kalium (K)" value="58" percentage={65} color="#f59e0b" />
            </div>
        </div>

        <Card className="p-0 overflow-hidden">
            <div className="p-6 border-b border-stone-100">
                <h3 className="font-black text-stone-800">Riwayat Pengukuran Terakhir</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-stone-50 text-[10px] uppercase font-bold text-stone-400">
                        <tr>
                            <th className="px-6 py-4">Waktu</th>
                            <th className="px-6 py-4">Sensor</th>
                            <th className="px-6 py-4">Nilai</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-stone-100">
                        {[
                            { time: "21:04", sensor: "pH Tanah", value: "6.2", status: "Optimal" },
                            { time: "20:45", sensor: "Kelembaban", value: "68%", status: "Optimal" },
                            { time: "20:30", sensor: "Nitrogen", value: "42 mg/kg", status: "Rendah" },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-stone-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-stone-500">{row.time}</td>
                                <td className="px-6 py-4 font-bold text-stone-800">{row.sensor}</td>
                                <td className="px-6 py-4 font-mono text-stone-600">{row.value}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                                        row.status === "Optimal" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                    }`}>
                                        {row.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
      </main>
    </div>
  );
}