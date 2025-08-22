"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { NavLink } from "@/data/nav-links";
import Link from "next/link";
import { motion } from "motion/react";

type NavLinkProps = {
    navLinks: NavLink[];
};

function MobileNav({ navLinks }: NavLinkProps) {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <MenuIcon />
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:w-[540px]">
                    <SheetHeader className="mt-2">
                        <SheetTitle>Navigation</SheetTitle>
                        <SheetDescription className="sr-only">Link to pages</SheetDescription>
                    </SheetHeader>
                    <nav className="grid gap-2">
                        {navLinks.map((link, index) => {
                            return (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 25,
                                        delay: 0.7 + index * 0.2,
                                    }}
                                >
                                    <SheetClose asChild>
                                        <Link href={link.path} className="px-4 py-1">
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                </motion.div>
                            );
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MobileNav;
