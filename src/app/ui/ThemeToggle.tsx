"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Only show UI after component has mounted
    useEffect(() => {
        setMounted(true);
    }, []);

    // Return a placeholder with the same dimensions to prevent layout shift
    if (!mounted) {
        return <button className="w-[40px] h-[40px]">{"  "}</button>;
    }

    return (
        <button
            className="cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}
