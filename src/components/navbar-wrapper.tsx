
'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  // Routes where navbar should be hidden
  const hideNavbar = ['/login', '/register', '/dashboard', '/camera', '/sensor', '/diagnosa', '/riwayat', '/lahan', '/iot', '/notifikasi', '/laporan', '/settings'];
  
  if (hideNavbar.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}
