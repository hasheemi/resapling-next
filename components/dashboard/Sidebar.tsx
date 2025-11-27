"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: 'bx-home-alt' },
    { name: 'Campaigns', href: '/dashboard/campaign', icon: 'bx-donate-heart' },
    { name: 'Leaderboard', href: '/dashboard/leaderboard', icon: 'bx-trophy' },
    { name: 'Upgrade', href: '/dashboard/upgrade', icon: 'bx-up-arrow-circle' },
    { name: 'Admin', href: '/dashboard/admin', icon: 'bx-shield-quarter' },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md text-leaf-950"
                onClick={() => setIsOpen(!isOpen)}
            >
                <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
            </button>

            {/* Sidebar Container */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="h-16 flex items-center px-6 border-b border-gray-200">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-leaf-700">
                            <i className='bx bxs-leaf'></i>
                            <span className="relogo text-3xl">Resapling</span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                            ? 'bg-leaf-50 text-leaf-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <i className={`bx ${item.icon} text-xl`}></i>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Profile / Logout */}
                    <div className="p-4 border-t border-gray-200">
                        <Link
                            href="/dashboard/logout"
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        >
                            <i className='bx bx-log-out text-xl'></i>
                            Logout
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
}
