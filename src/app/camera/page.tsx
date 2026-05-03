
'use client';

import React, { useRef, useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import { Camera, RefreshCw, StopCircle, Download, Image as ImageIcon, Sparkles } from "lucide-react";

export default function CameraPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    const [isCameraOn, setIsCameraOn] = useState(false);
    const [photo, setPhoto] = useState<string | null>(null);
    const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");
    const [error, setError] = useState<string | null>(null);

    const startCamera = async (mode = facingMode) => {
        try {
            setError(null);
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }

            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: mode, width: { ideal: 1280 }, height: { ideal: 720 } },
            });

            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsCameraOn(true);
        } catch (err) {
            console.error("Kamera akses gagal:", err);
            setError("Gagal mengakses kamera. Pastikan izin telah diberikan.");
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        setIsCameraOn(false);
    };

    const flipCamera = () => {
        const newMode = facingMode === "environment" ? "user" : "environment";
        setFacingMode(newMode);
        startCamera(newMode);
    };

    const takePhoto = () => {
        if (!videoRef.current || !canvasRef.current) return;
        
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        setPhoto(canvas.toDataURL("image/png"));
    };

    useEffect(() => {
        return () => stopCamera();
    }, []);

    return (
        <div className="flex bg-[#0a0f0a] min-h-screen text-[#e8f5e8] selection:bg-[#4ade8022]">
            <Sidebar />

            <main className="flex-1 pl-[220px] p-8 dark-scroll overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-display font-bold">Kamera Tanaman 📷</h1>
                    <p className="text-xs font-mono text-[#4a6b4a] mt-1 uppercase tracking-widest">Identifikasi Defisiensi Nutrisi via AI</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Left: Live Camera */}
                    <div className="bg-[#111a11] border border-[#1e2e1e] rounded-[2.5rem] p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4 px-2">
                            <h3 className="font-bold">Live Kamera</h3>
                            {isCameraOn && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-[#4ade8022] rounded-full">
                                    <div className="pulse-dot" />
                                    <span className="text-[10px] font-bold text-[#4ade80] uppercase tracking-widest">Live</span>
                                </div>
                            )}
                        </div>

                        <div className="relative aspect-video bg-[#0a0f0a] rounded-2xl overflow-hidden flex items-center justify-center border border-[#1e2e1e]">
                            {isCameraOn ? (
                                <>
                                    <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 camera-grid pointer-events-none" />
                                </>
                            ) : (
                                <div className="text-center">
                                    <Camera className="w-12 h-12 text-[#1e2e1e] mx-auto mb-4" />
                                    <p className="text-[#4a6b4a] text-sm font-medium">Kamera belum aktif</p>
                                </div>
                            )}
                        </div>

                        {error && (
                            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-mono">
                                {error}
                            </div>
                        )}

                        <div className="mt-6 flex gap-3">
                            {!isCameraOn ? (
                                <button 
                                    onClick={() => startCamera()}
                                    className="flex-1 py-4 bg-[#4ade8022] text-[#4ade80] rounded-2xl font-bold hover:bg-[#4ade8033] transition flex items-center justify-center gap-2"
                                >
                                    ▶ Nyalakan Kamera
                                </button>
                            ) : (
                                <>
                                    <button 
                                        onClick={takePhoto}
                                        className="flex-1 py-4 bg-[#4ade80] text-[#0a0f0a] rounded-2xl font-black hover:bg-[#3cd070] transition flex items-center justify-center gap-2"
                                    >
                                        📸 Ambil Foto
                                    </button>
                                    <button 
                                        onClick={flipCamera}
                                        className="w-16 flex items-center justify-center bg-[#1e2e1e] text-[#e8f5e8] rounded-2xl hover:bg-[#2d3d2d] transition"
                                    >
                                        <RefreshCw className="w-5 h-5" />
                                    </button>
                                    <button 
                                        onClick={stopCamera}
                                        className="w-16 flex items-center justify-center bg-red-500/10 text-red-500 rounded-2xl hover:bg-red-500/20 transition"
                                    >
                                        <StopCircle className="w-5 h-5" />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right: Results */}
                    <div className="bg-[#111a11] border border-[#1e2e1e] rounded-[2.5rem] p-6 flex flex-col">
                        <h3 className="font-bold mb-4 px-2">Hasil Foto & Analisis</h3>
                        
                        <div className="flex-1 flex flex-col">
                            {photo ? (
                                <div className="space-y-6">
                                    <img src={photo} alt="Capture" className="w-full rounded-2xl border border-[#1e2e1e] aspect-video object-cover" />
                                    
                                    <div className="bg-[#0a0f0a] border border-[#1e2e1e] rounded-2xl p-6">
                                        <p className="text-[10px] font-mono text-[#4a6b4a] uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Sparkles className="w-3 h-3 text-[#4ade80]" />
                                            Hasil Analisis AI
                                        </p>
                                        <div className="space-y-4">
                                            <AnalysisRow label="Warna Daun" status="Normal" />
                                            <AnalysisRow label="Kondisi Fisik" status="Optimal" />
                                            <AnalysisRow label="Nutrisi" status="Cukup" />
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button 
                                            onClick={() => setPhoto(null)}
                                            className="flex-1 py-3 bg-[#1e2e1e] text-[#e8f5e8] rounded-xl font-bold hover:bg-[#2d3d2d] transition"
                                        >
                                            🔄 Foto Ulang
                                        </button>
                                        <a 
                                            href={photo} 
                                            download="tanismart-check.png"
                                            className="flex-1 py-3 bg-[#4ade8022] text-[#4ade80] rounded-xl font-bold hover:bg-[#4ade8033] transition text-center flex items-center justify-center gap-2"
                                        >
                                            <Download className="w-4 h-4" /> Simpan Foto
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
                                    <ImageIcon className="w-16 h-16 mb-4 text-[#4a6b4a]" />
                                    <p className="text-[#4a6b4a] font-medium max-w-[200px]">Ambil foto untuk melihat hasil analisis AI</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tips Section */}
                <div className="bg-[#111a11] border border-[#1e2e1e] rounded-[2rem] p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">☀️</span>
                            <p className="text-xs font-medium text-[#6b8f6b]">Gunakan pencahayaan yang terang untuk hasil maksimal.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">🎯</span>
                            <p className="text-xs font-medium text-[#6b8f6b]">Pastikan fokus pada area daun yang memiliki gejala.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">📐</span>
                            <p className="text-xs font-medium text-[#6b8f6b]">Jarak ideal pemotretan adalah sekitar 20-30 cm.</p>
                        </div>
                    </div>
                </div>

                <canvas ref={canvasRef} className="hidden" />
            </main>
        </div>
    );
}

const AnalysisRow = ({ label, status }: { label: string, status: string }) => (
    <div className="flex items-center justify-between border-b border-[#1e2e1e] pb-3">
        <span className="text-[#6b8f6b] text-xs font-medium">{label}</span>
        <span className="px-2 py-0.5 bg-[#1e2e1e] text-[#4a6b4a] text-[10px] font-mono font-bold rounded uppercase">
            {status} — menunggu api
        </span>
    </div>
);
