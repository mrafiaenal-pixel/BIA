
'use client';

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Sprout, 
  FlaskConical, 
  History, 
  Map as MapIcon, 
  PlugZap, 
  Camera,
  Bell, 
  FileText, 
  Settings,
  LogOut
} from "lucide-react";

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard, emoji: "📊" },
        { name: "Sensor Realtime", path: "/sensor", icon: Sprout, emoji: "📡" },
        { name: "Diagnosa", path: "/diagnosa", icon: FlaskConical, emoji: "🔬" },
        { name: "Riwayat Data", path: "/riwayat", icon: History, emoji: "📈" },
        { name: "Lahan Saya", path: "/lahan", icon: MapIcon, emoji: "🌾" },
        { name: "Perangkat IoT", path: "/iot", icon: PlugZap, emoji: "🔌" },
        { name: "Find Physic", path: "/find-physic", icon: Camera, emoji: "📷" },
        { name: "Notifikasi", path: "/notifikasi", icon: Bell, emoji: "🔔", badge: "2" },
        { name: "Laporan", path: "/laporan", icon: FileText, emoji: "📄" },
        { name: "Pengaturan", path: "/settings", icon: Settings, emoji: "⚙️" },
    ];

    const handleLogout = () => {
        localStorage.removeItem('TOKEN');
        router.push('/login');
    };

    return (
        <aside className="fixed top-0 left-0 w-[220px] h-screen bg-[#0a0f0a] border-r border-[#1e2e1e] flex flex-col z-50 dark-scroll overflow-y-auto">
            <div className="p-6 border-b border-[#1e2e1e]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#111a11] border border-[#1e2e1e] flex items-center justify-center">
                        <span className="text-[#4ade80] font-display font-bold text-xl">T</span>
                    </div>
                    <div>
                        <h1 className="text-[#e8f5e8] font-display font-bold text-lg leading-none">TaniSmart</h1>
                        <p className="text-[#4a6b4a] font-mono text-[9px] uppercase tracking-widest mt-1">
                            IoT Nutrisi
                        </p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1">
                <p className="px-4 text-[10px] font-mono font-medium text-[#4a6b4a] uppercase tracking-widest mb-4">Menu</p>
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                            pathname === item.path
                                ? "bg-[#4ade8022] text-[#4ade80] border border-[#2d4a2d]"
                                : "text-[#6b8f6b] hover:bg-[#1e2e1e] hover:text-[#e8f5e8]"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-base">{item.emoji}</span>
                            <span>{item.name}</span>
                        </div>
                        {item.badge && (
                            <span className="bg-red-500/20 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                {item.badge}
                            </span>
                        )}
                    </Link>
                ))}
            </nav>

            <div className="p-6 border-t border-[#1e2e1e] space-y-4">
                <p className="text-[10px] font-mono font-medium text-[#4a6b4a] uppercase tracking-widest">Perangkat</p>
                <div className="space-y-3">
                    <DeviceItem name="Sensor Lahan A" status="online" />
                    <DeviceItem name="Sensor Lahan B" status="online" />
                    <DeviceItem name="Sensor Lahan C" status="offline" />
                </div>

                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-bold text-[#6b8f6b] hover:text-red-400 transition-colors mt-4"
                >
                    <LogOut className="w-4 h-4" />
                    Keluar
                </button>
            </div>
        </aside>
    );
};

const DeviceItem = ({ name, status }: { name: string, status: 'online' | 'offline' }) => (
    <div className="flex items-center justify-between">
        <span className="text-[#6b8f6b] text-[11px] font-medium">{name}</span>
        <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'pulse-dot' : 'bg-[#4a6b4a]'}`} />
    </div>
);

export default Sidebar;
