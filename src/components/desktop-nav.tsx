"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/constants/menu-items";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import DesktopSubmenu from "./desktop-submenu";

type MenuItemsProps = {
    menuItems: MenuItem[];
};

function DesktopNav({ menuItems }: MenuItemsProps) {
    const pathName = usePathname();
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (menu: string | undefined) => {
        if (!menu) return setActiveMenu(null);
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => setActiveMenu(menu), 300);
    };

    const handleMouseLeave = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => setActiveMenu(null), 0);
    };

    return (
        <>
            <nav className="relative z-20 h-full content-center">
                <ul className="hidden lg:flex items-center gap-4 list-none h-full">
                    {menuItems.map((link, index) => {
                        const isActive =
                            pathName === link.path || (pathName.startsWith(link.path) && link.path !== "/");

                        return (
                            <li key={link.id} className="relative h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 25,
                                        delay: 0.7 + index * 0.2,
                                    }}
                                    onMouseEnter={() => handleMouseEnter(link.subMenu ? link.id : undefined)}
                                    onMouseLeave={handleMouseLeave}
                                    className="h-full"
                                >
                                    <Link
                                        href={link.path}
                                        className={cn(
                                            "cursor-pointer font-semibold hover:text-orange-500 h-full flex-center group flex-col",
                                            {
                                                "text-orange-500": isActive,
                                                "ml-48": index === 0,
                                            },
                                        )}
                                    >
                                        {link.nav}
                                        <span
                                            className={cn(
                                                "w-0 h-0.5 group-hover:w-full bg-orange-500 transition-all self-start duration-300",
                                                { "w-full": isActive },
                                            )}
                                        ></span>
                                    </Link>
                                </motion.div>
                            </li>
                        );
                    })}
                </ul>

                {menuItems.map(
                    (item) =>
                        item.subMenu && (
                            <div
                                key={item.id}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                                className={cn(
                                    "fixed top-18 left-1/2 -translate-x-1/2 w-full max-w-7xl bg-background text-foreground shadow-sm dark:shadow-slate-700 grid grid-rows-[0fr] transition-[grid-template-rows_opacity] duration-300 ease-in-out opacity-0 pointer-events-none overflow-hidden",
                                    {
                                        "grid-rows-[1fr] opacity-100 pointer-events-auto": activeMenu === item.id,
                                    },
                                )}
                            >
                                <DesktopSubmenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                            </div>
                        ),
                )}
            </nav>
        </>
    );
}

export default DesktopNav;
