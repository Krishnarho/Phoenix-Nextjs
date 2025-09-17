"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/_lib/utils";
import { NavLink } from "@/constants/nav-links";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import DesktopSubmenu from "./desktop-submenu";

type NavLinkProps = {
    navLinks: NavLink[];
};

function DesktopNav({ navLinks }: NavLinkProps) {
    const pathName = usePathname();
    const [activeNavId, setActiveNavId] = useState<string | null>(null);
    const [subMenuHover, setSubMenuHover] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Delay submenu opening
    const handleMouseEnterMenu = (navId: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setActiveNavId(navId);
        }, 300);
    };

    // Hide submenu immediately
    const handleMouseLeaveMenu = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            if (!subMenuHover) setActiveNavId(null);
        }, 10);
    };

    const handleMouseEnterSubMenu = () => {
        setSubMenuHover(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const handleMouseLeaveSubMenu = () => {
        setSubMenuHover(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveNavId(null);
    };
    const hasSubMenu = navLinks.find((link) => link.id === activeNavId && link.subNav);
    return (
        <>
            <nav className="hidden lg:flex space-x-4 items-center gap-2 h-full">
                {navLinks.map((link, index) => {
                    const isActive = pathName === link.path || (pathName.startsWith(link.path) && link.path !== "/");
                    return (
                        <motion.div
                            key={link.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 25,
                                delay: 0.7 + index * 0.2,
                            }}
                            onMouseEnter={() => handleMouseEnterMenu(link.id)}
                            onMouseLeave={handleMouseLeaveMenu}
                            className="h-full"
                        >
                            <Link
                                href={link.path}
                                className={cn(
                                    "cursor-pointer font-semibold hover:text-orange-500 h-full block flex-center relative group",
                                    {
                                        "text-orange-500": isActive,
                                    }
                                )}
                            >
                                {link.nav}
                                <span
                                    className={cn(
                                        "absolute bottom-5 left-0 w-0 h-0.5 group-hover:w-full bg-orange-500 transition-all duration-300",
                                        { "w-full": isActive }
                                    )}
                                ></span>
                            </Link>
                        </motion.div>
                    );
                })}
            </nav>
            {/* Submenu */}
            {hasSubMenu && (
                <div
                    id="subMenu"
                    className={cn(
                        "absolute top-18 left-1/2 -translate-x-1/2 w-full max-w-7xl bg-background text-foreground shadow-sm dark:shadow-slate-700 z-40 h-0 transition-[height] duration-300 ease-in-out overflow-clip",
                        { "h-auto": activeNavId }
                    )}
                    onMouseEnter={handleMouseEnterSubMenu}
                    onMouseLeave={handleMouseLeaveSubMenu}
                >
                    <DesktopSubmenu navItemId={activeNavId} setNavItem={setActiveNavId} />
                </div>
            )}
        </>
    );
}

export default DesktopNav;
