
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 px-4 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mb-6">
        <span className="text-4xl">🌵</span>
      </div>
      <h1 className="text-4xl font-black text-stone-800 mb-4">Halaman Tidak Ditemukan</h1>
      <p className="text-stone-500 mb-8 max-w-md">
        Sepertinya tanaman yang Anda cari tidak ada di kebun kami atau link yang Anda tuju salah.
      </p>
      <Link 
        href="/"
        className="bg-green-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-200"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
