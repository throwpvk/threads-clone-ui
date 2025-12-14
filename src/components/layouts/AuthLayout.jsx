import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-56 md:h-130 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('/src/assets/threadLogin.png')] bg-no-repeat bg-top bg-cover"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
      <footer className="absolute bottom-6 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-500 dark:text-gray-600">
            <span>© 2025</span>
            <a href="#" className="hover:underline">
              Threads Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookies Policy
            </a>
            <a href="#" className="hover:underline">
              Report a problem
            </a>
          </div>
        </div>
      </footer>
      <div className="hidden lg:block absolute bottom-8 right-8 z-20">
        <div className="text-center">
          <div className="w-32 h-32 bg-white dark:bg-neutral-900 rounded-lg p-2 mb-2 shadow-lg border border-gray-200 dark:border-neutral-800">
            <div className="w-full h-full bg-[url('/src/assets/qr.jpg')] bg-no-repeat bg-cover opacity-90"></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-600">
            Scan to get the app
          </p>
        </div>
      </div>
    </div>
  );
}
