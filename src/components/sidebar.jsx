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
        <aside className="fixed top-0 left-0 w-[230px] h-screen bg-white border-r border-gray-200 shadow-sm p-5 flex flex-col justify-between">

            <div>
                {/* LOGO */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-green-400 shadow-sm"></div>
                    <div>
                        <h1 className="text-gray-800 font-semibold">TaniSmart</h1>
                        <p className="text-gray-400 text-xs font-mono">
                            IOT NUTRISI TANAMAN
                        </p>
                    </div>
                </div>

                {/* MENU */}
                <div className="space-y-1">
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            to={item.path}
                            className={`block px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === item.path
                                    ? "bg-green-50 text-green-600 border-l-4 border-green-500"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* DEVICE STATUS */}
            <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-2">Devices</p>
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
        <span className="text-gray-700">{name}</span>
        <span
            className={`w-2 h-2 rounded-full ${status === "online" ? "bg-green-500" : "bg-red-500"
                }`}
        ></span>
    </div>
);

export default Sidebar;