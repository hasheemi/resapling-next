"use client";

import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();
    const pageName = pathname.split('/').pop() || 'Dashboard';
    const formattedTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-8">
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold text-gray-800 capitalize">
                    {pathname === '/dashboard' ? 'Overview' : formattedTitle}
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
                    <i className='bx bx-bell text-xl'></i>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="w-8 h-8 bg-leaf-100 rounded-full flex items-center justify-center text-leaf-700 font-bold">
                    U
                </div>
            </div>
        </header>
    );
}
