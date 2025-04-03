"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <NextThemesProvider>{children}</NextThemesProvider>;
};

export default ThemeProvider;
