import React from "react";
import Sidebar from "../../components/Sidebar";

const Card = ({ children, className }) => (
  <div className={`bg-[#111a11] border border-[#1e2e1e] rounded-xl p-5 ${className}`}>
    {children}
  </div>
);

const SensorCard = ({ title, value, color }) => (
  <Card className="border-t-2" style={{ borderTopColor: color }}>
    <p className="text-xs text-[#6b8f6b] font-mono uppercase mb-2">
      {title}
    </p>
    <h2 className="text-3xl font-bold" style={{ color }}>
      {value}
    </h2>
    <span className="text-xs mt-2 inline-block px-2 py-1 rounded bg-[#1e2e1e] text-[#6b8f6b]">
      Stable
    </span>
  </Card>
);

const NPKCard = ({ name, value, color }) => (
  <Card>
    <div className="flex justify-between mb-3">
      <h3 className="text-[#e8f5e8]">{name}</h3>
      <span>🌱</span>
    </div>
    <h2 className="text-4xl font-bold mb-3" style={{ color }}>
      {value}
    </h2>
    <div className="h-1 bg-[#1e2e1e] rounded">
      <div className="h-1 rounded" style={{ width: "60%", background: color }} />
    </div>
  </Card>
);

function Dashboard() {
  return (
    <div className="flex bg-[#0a0f0a] min-h-screen text-[#e8f5e8]">

      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 p-8 pl-[240px] space-y-7">

        {/* TOP */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Dashboard Nutrisi 🌿</h1>
            <p className="text-sm text-[#6b8f6b]">Last update: 21:04</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#4ade8022] text-[#4ade80] text-sm">
              ● LIVE
            </span>
            <button className="px-3 py-2 rounded-lg bg-[#4ade8022] text-[#4ade80]">
              Refresh
            </button>
          </div>
        </div>

        {/* ALERT */}
        <div className="bg-[#1a0f00] border-l-4 border-[#fbbf24] p-4 rounded">
          ⚠ Nitrogen rendah, segera lakukan pemupukan
        </div>

        {/* SENSOR */}
        <div className="grid grid-cols-4 gap-4">
          <SensorCard title="🌡 Suhu Tanah" value="27°C" color="#4ade80" />
          <SensorCard title="💧 Kelembaban" value="68%" color="#4ade80" />
          <SensorCard title="🧪 pH Tanah" value="6.2" color="#60a5fa" />
          <SensorCard title="⚡ EC Tanah" value="1.8" color="#fbbf24" />
        </div>

        {/* NPK */}
        <div className="grid grid-cols-3 gap-4">
          <NPKCard name="Nitrogen" value="42 mg/kg" color="#f87171" />
          <NPKCard name="Fosfor" value="74 mg/kg" color="#4ade80" />
          <NPKCard name="Kalium" value="58 mg/kg" color="#fbbf24" />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;