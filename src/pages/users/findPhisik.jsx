import { useEffect, useRef, useState } from "react";

function FindPhisik() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);

    const [photo, setPhoto] = useState(null);
    const [isCameraOn, setIsCameraOn] = useState(false);

    const isMobile = window.innerWidth <= 768;

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment" },
            });

            streamRef.current = stream;

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }

            setIsCameraOn(true);
        } catch (err) {
            console.error("Gagal akses kamera:", err);
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

    useEffect(() => {
        startCamera();

        // cleanup saat keluar halaman
        return () => stopCamera();
    }, []);

    // 📸 Ambil foto
    const takePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        const width = video.videoWidth;
        const height = video.videoHeight;

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, width, height);

        const imageData = canvas.toDataURL("image/png");
        setPhoto(imageData);
    };

    return (
        <div
            style={{
                textAlign: "center",
                padding: isMobile ? "10px" : "20px",
            }}
        >
            <h1 style={{ fontSize: isMobile ? "20px" : "28px" }}>
                Find Phisik
            </h1>

            {/* Kamera */}
            {isCameraOn && (
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    style={{
                        width: "100%",
                        maxWidth: isMobile ? "100%" : "400px",
                        borderRadius: "12px",
                    }}
                />
            )}

            <br /><br />

            {/* Tombol */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>

                {!isCameraOn ? (
                    <button
                        onClick={startCamera}
                        style={{
                            padding: "10px 20px",
                            borderRadius: "10px",
                            cursor: "pointer"
                        }}
                    >
                        ▶️ Nyalakan Kamera
                    </button>
                ) : (
                    <>
                        <button
                            onClick={takePhoto}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "10px",
                                cursor: "pointer"
                            }}
                        >
                            📸 Ambil Foto
                        </button>

                        <button
                            onClick={stopCamera}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "10px",
                                cursor: "pointer",
                                backgroundColor: "#ff4d4f",
                                color: "#fff"
                            }}
                        >
                            ⛔ Matikan Kamera
                        </button>
                    </>
                )}
            </div>

            {/* Canvas (hidden) */}
            <canvas ref={canvasRef} style={{ display: "none" }} />

            {/* Hasil foto */}
            {photo && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Hasil Foto:</h3>
                    <img
                        src={photo}
                        alt="hasil"
                        style={{
                            width: "100%",
                            maxWidth: isMobile ? "100%" : "400px",
                            borderRadius: "12px"
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default FindPhisik;