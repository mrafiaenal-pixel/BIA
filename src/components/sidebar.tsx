'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Sprout, 
  FlaskConical, 
  History, 
  Map as MapIcon, 
  PlugZap, 
  Bell, 
  FileText, 
  Settings,
  Circle
} from "lucide-react";

const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
        { name: "Sensor Realtime", path: "/sensor", icon: Sprout },
        { name: "Diagnosa AI", path: "/diagnosa", icon: FlaskConical },
        { name: "Riwayat Data", path: "/riwayat", icon: History },
        { name: "Lahan Saya", path: "/lahan", icon: MapIcon },
        { name: "Perangkat IoT", path: "/iot", icon: PlugZap },
        { name: "Notifikasi", path: "/notifikasi", icon: Bell },
        { name: "Laporan", path: "/laporan", icon: FileText },
        { name: "Pengaturan", path: "/settings", icon: Settings },
    ];

    return (
        <aside className="hidden md:flex fixed top-0 left-0 w-[260px] h-screen bg-white border-r border-stone-200 shadow-sm p-6 flex-col justify-between z-50">
            <div>
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center shadow-lg shadow-green-200">
                        <Sprout className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-stone-900 font-bold text-lg leading-tight">TaniSmart</h1>
                        <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                            IoT Agriculture
                        </p>
                    </div>
                </div>

                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                pathname === item.path
                                    ? "bg-green-600 text-white shadow-md shadow-green-100"
                                    : "text-stone-500 hover:bg-stone-50 hover:text-stone-900"
                            }`}
                        >
                            <item.icon className={`w-5 h-5 ${pathname === item.path ? "text-white" : "text-stone-400"}`} />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100">
                <p className="text-[10px] uppercase font-bold text-stone-400 mb-3 tracking-wider px-1">Status Perangkat</p>
                <div className="space-y-3">
                    <Device name="Gateway Utama" status="online" />
                    <Device name="Node Sensor A1" status="online" />
                    <Device name="Node Sensor B2" status="offline" />
                </div>
            </div>
        </aside>
    );
};

const Device = ({ name, status }: { name: string, status: 'online' | 'offline' }) => (
    <div className="flex items-center justify-between px-1">
        <span className="text-stone-600 text-xs font-bold">{name}</span>
        <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full animate-pulse ${status === "online" ? "bg-green-500" : "bg-red-500"}`} />
            <span className="text-[10px] font-bold text-stone-400 uppercase">{status}</span>
        </div>
    </div>
);

export default Sidebar;