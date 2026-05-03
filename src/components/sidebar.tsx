
'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard 🌿", path: "/dashboard" },
        { name: "Sensor Realtime 📡", path: "/sensor" },
        { name: "Diagnosa 🧪", path: "/diagnosa" },
        { name: "Riwayat Data 📊", path: "/riwayat" },
        { name: "Lahan Saya 🌾", path: "/lahan" },
        { name: "Perangkat IoT 🔌", path: "/iot" },
        { name: "Notifikasi 🔔", path: "/notifikasi" },
        { name: "Laporan 📄", path: "/laporan" },
        { name: "Pengaturan ⚙️", path: "/settings" },
    ];

    return (
        <aside className="hidden md:flex fixed top-0 left-0 w-[230px] h-screen bg-white border-r border-gray-200 shadow-sm p-5 flex-col justify-between z-50">
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-green-400 shadow-sm"></div>
                    <div>
                        <h1 className="text-gray-800 font-bold">TaniSmart</h1>
                        <p className="text-gray-400 text-[10px] font-mono leading-tight">
                            IOT NUTRISI TANAMAN
                        </p>
                    </div>
                </div>

                <div className="space-y-1">
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.path}
                            className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${pathname === item.path
                                    ? "bg-green-50 text-green-600 border-l-4 border-green-500"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-wider">Devices</p>
                <div className="space-y-2 text-xs">
                    <Device name="Sensor A" status="online" />
                    <Device name="Sensor B" status="offline" />
                    <Device name="Sensor C" status="online" />
                </div>
            </div>
        </aside>
    );
};

const Device = ({ name, status }: { name: string, status: 'online' | 'offline' }) => (
    <div className="flex items-center justify-between">
        <span className="text-gray-700 font-medium">{name}</span>
        <span
            className={`w-2 h-2 rounded-full ${status === "online" ? "bg-green-500" : "bg-red-500"
                }`}
        ></span>
    </div>
);

export default Sidebar;
