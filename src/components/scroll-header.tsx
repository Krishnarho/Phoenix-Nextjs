"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/_lib/utils";

export default function ScrollHeader({ children }: { children: React.ReactNode }) {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 border-b border-slate-300 transition-all duration-300 text-white",
                {
                    "bg-background text-primary": scrolled,
                }
            )}
        >
            {children}
        </header>
    );
}
