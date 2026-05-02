import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { name: "Dashboard 🌿", path: "/" },
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
        <aside className="fixed top-0 left-0 w-[220px] h-screen bg-[#0a0f0a] border-r border-[#1e2e1e] p-5 flex flex-col justify-between">

            <div>
                {/* LOGO */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-[#4ade80]"></div>
                    <div>
                        <h1 className="text-[#e8f5e8] font-bold">TaniSmart</h1>
                        <p className="text-[#6b8f6b] text-xs font-mono">
                            IOT NUTRISI TANAMAN
                        </p>
                    </div>
                </div>

                {/* MENU */}
                <div className="space-y-2">
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            to={item.path}
                            className={`block px-3 py-2 rounded-lg text-sm transition ${location.pathname === item.path
                                    ? "bg-[#4ade8044] text-[#4ade80]"
                                    : "text-[#6b8f6b] hover:text-[#e8f5e8]"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* DEVICE STATUS */}
            <div>
                <p className="text-xs text-[#6b8f6b] mb-2">Devices</p>
                <div className="space-y-2 text-sm">
                    <Device name="Sensor A" status="online" />
                    <Device name="Sensor B" status="offline" />
                    <Device name="Sensor C" status="online" />
                </div>
            </div>
        </aside>
    );
};

const Device = ({ name, status }) => (
    <div className="flex items-center justify-between">
        <span className="text-[#e8f5e8]">{name}</span>
        <span
            className={`w-2 h-2 rounded-full ${status === "online" ? "bg-green-400" : "bg-red-400"
                }`}
        ></span>
    </div>
);

export default Sidebar;