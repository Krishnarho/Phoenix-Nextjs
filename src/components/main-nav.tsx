"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavLink } from "@/data/nav-links";

import { motion } from "motion/react";

type NavLinkProps = {
    navLinks: NavLink[];
};

function MainNav({ navLinks }: NavLinkProps) {
    const pathName = usePathname();
    return (
        <nav className="hidden lg:flex space-x-4 items-center gap-2">
            {navLinks.map((link, index) => {
                const isActive = pathName === link.path || (pathName.startsWith(link.path) && link.path !== "/");
                return (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 25,
                            delay: 0.7 + index * 0.2,
                        }}
                    >
                        <Link
                            href={link.path}
                            className={cn("cursor-pointer font-semibold hover:text-orange-500  relative group", {
                                "text-orange-500": isActive,
                            })}
                        >
                            {link.name}
                            <span
                                className={cn(
                                    "absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full bg-orange-500 transition-all duration-300",
                                    { "w-full": isActive }
                                )}
                            ></span>
                        </Link>
                    </motion.div>
                );
            })}
        </nav>
    );
}

export default MainNav;
