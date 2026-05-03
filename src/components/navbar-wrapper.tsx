
'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  // Routes where navbar should be hidden
  const hideNavbar = ['/login', '/register', '/dashboard', '/find-physic'];
  
  if (hideNavbar.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}
