"use client";
import ThemeToggle from "@/ui/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const Nav: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close sidebar when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const sidebar = document.getElementById("mobile-sidebar");
            if (isOpen && sidebar && !sidebar.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const navItems = [
        { href: "/", label: "home" },
        { href: "/about", label: "about" },
        { href: "/skills", label: "skills" },
        { href: "/experiences", label: "experiences" },
        { href: "/portfolio", label: "portfolio" },
    ];

    return (
        <div className="flex flex-row items-center justify-between">
            <div>
                <span className="bg-[#2dd4bf] text-white uppercase rounded-md px-2 py-1 md:block hidden">
                    resume
                </span>
                <button
                    className="md:hidden block rounded-md cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <Bars3Icon className="size-6" />
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="md:block hidden">
                <ul className="flex flex-row gap-10 justify-between">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`capitalize pb-1 ${
                                pathname === item.href
                                    ? "font-bold border-b-2"
                                    : ""
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <li className="capitalize pb-1">
                        <ThemeToggle />
                    </li>
                </ul>
            </div>

            {/* Mobile Sidebar */}
            <div
                id="mobile-sidebar"
                className={`fixed top-0 left-0 z-40 h-full w-64 bg-[var(--background)] text-[var(--foreground)] shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <span className="bg-[#2dd4bf] text-white uppercase rounded-md px-2 py-1">
                        resume
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-md cursor-pointer"
                    >
                        <XMarkIcon className="size-6" />
                    </button>
                </div>
                <ul className="flex flex-col p-4">
                    {navItems.map((item) => (
                        <li key={item.href} className="py-2">
                            <Link
                                href={item.href}
                                className={`block capitalize py-2 ${
                                    pathname === item.href ? "font-bold" : ""
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="py-3 mt-2 border-t">
                        <div className="flex items-center justify-between">
                            <span className="capitalize">Theme</span>
                            <ThemeToggle />
                        </div>
                    </li>
                </ul>
            </div>

            {/* Overlay when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-30 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default Nav;
