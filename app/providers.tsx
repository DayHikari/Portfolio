"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({children}: any) {
    // State for mounting the page
    const [mounted, setMounted] = useState(false);
    
    // Prevents hydration issues by not providing the theme context until after the page has been rendered client side.
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    };

    return <ThemeProvider attribute="class">{children}</ThemeProvider>
}