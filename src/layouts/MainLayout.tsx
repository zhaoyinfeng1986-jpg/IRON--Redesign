import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import { ToastProvider } from '../components/common/Toast/ToastContext';

export default function MainLayout() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 980); // custom breakpoint
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <ToastProvider>
      <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden selection:bg-primary/30">
        {/* Background Glows */}
        <div className="bg-glow-purple -top-1/4 -left-1/4 scale-125 opacity-80"></div>
        <div className="bg-glow-cyan top-1/2 -right-1/4 scale-110 opacity-70"></div>
        <div className="bg-glow-purple bottom-0 left-1/3 opacity-40 scale-150"></div>
        <div className="bg-glow-cyan -bottom-1/4 -right-1/4 opacity-30"></div>

        <Sidebar />

        <main className={`min-h-screen relative z-10 transition-all duration-300 ease-in-out ${isSmallScreen ? 'ml-20' : 'ml-64'}`}>
          <div className="max-w-[1920px] mx-auto px-12 pt-10 pb-12">
            <Outlet />
          </div>
        </main>
      </div>
    </ToastProvider>
  );
}
