import React from "react";
import Sidebar from "../../components/Sidebar";

const Card = ({ children, className }) => (
  <div className={`bg-white border border-gray-200 rounded-xl p-5 shadow-sm ${className}`}>
    {children}
  </div>
);

const SensorCard = ({ title, value, color }) => (
  <Card className="border-t-4" style={{ borderTopColor: color }}>
    <p className="text-xs text-gray-500 font-mono uppercase mb-2">
      {title}
    </p>
    <h2 className="text-3xl font-bold" style={{ color }}>
      {value}
    </h2>
    <span className="text-xs mt-2 inline-block px-2 py-1 rounded bg-gray-100 text-gray-500">
      Stable
    </span>
  </Card>
);

const NPKCard = ({ name, value, color }) => (
  <Card>
    <div className="flex justify-between mb-3">
      <h3 className="text-gray-800">{name}</h3>
      <span>🌱</span>
    </div>
    <h2 className="text-4xl font-bold mb-3" style={{ color }}>
      {value}
    </h2>
    <div className="h-1 bg-gray-200 rounded">
      <div className="h-1 rounded" style={{ width: "60%", background: color }} />
    </div>
  </Card>
);

function Dashboard() {
  return (
    <div className="flex bg-gray-50 min-h-screen text-gray-800">

      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 p-8 pl-[240px] space-y-7">

        {/* TOP */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Dashboard Nutrisi 🌿</h1>
            <p className="text-sm text-gray-500">Last update: 21:04</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm">
              ● LIVE
            </span>
            <button className="px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition">
              Refresh
            </button>
          </div>
        </div>

        {/* ALERT */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-700">
          ⚠ Nitrogen rendah, segera lakukan pemupukan
        </div>

        {/* SENSOR */}
        <div className="grid grid-cols-4 gap-4">
          <SensorCard title="🌡 Suhu Tanah" value="27°C" color="#22c55e" />
          <SensorCard title="💧 Kelembaban" value="68%" color="#22c55e" />
          <SensorCard title="🧪 pH Tanah" value="6.2" color="#3b82f6" />
          <SensorCard title="⚡ EC Tanah" value="1.8" color="#f59e0b" />
        </div>

        {/* NPK */}
        <div className="grid grid-cols-3 gap-4">
          <NPKCard name="Nitrogen" value="42 mg/kg" color="#ef4444" />
          <NPKCard name="Fosfor" value="74 mg/kg" color="#22c55e" />
          <NPKCard name="Kalium" value="58 mg/kg" color="#f59e0b" />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;