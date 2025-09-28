"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { NavLink } from "@/constants/nav-links";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

type NavLinkProps = {
    navLinks: NavLink[];
};

function MobileNav({ navLinks }: NavLinkProps) {
    const [open, setOpen] = useState(false);
    //const [activeAccordion, setActiveAccordion] = useState<string | "">("");

    return (
        <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <MenuIcon className="stroke-orange-500" />
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:w-[540px]">
                    <SheetHeader className="mt-2">
                        <SheetTitle>Navigation</SheetTitle>
                        <SheetDescription className="sr-only">Link to pages</SheetDescription>
                    </SheetHeader>

                    <nav className="grid gap-2 px-2">
                        {/* ✅ ONE Accordion to rule them all */}
                        <Accordion
                            type="single"
                            collapsible
                            // value={activeAccordion}
                            // onValueChange={(value) => {
                            //     setActiveAccordion(value);
                            // }}
                        >
                            {navLinks.map((link, index) => {
                                const hasSubMenu = link.subNav && link.subNav.length > 0;
                                return (
                                    <motion.div
                                        key={link.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 25,
                                            delay: 0.7 + index * 0.2,
                                        }}
                                    >
                                        {hasSubMenu ? (
                                            <AccordionItem value={link.nav}>
                                                <AccordionTrigger className="text-md text-foreground">
                                                    {link.nav}
                                                </AccordionTrigger>
                                                <AccordionContent className="pl-4">
                                                    {link.subNav?.map((sublink) => {
                                                        const hasNestedSubMenu =
                                                            sublink.subSubNav && sublink.subSubNav.length > 0;

                                                        return hasNestedSubMenu ? (
                                                            <Accordion key={sublink.nav} type="single" collapsible>
                                                                <AccordionItem value={sublink.nav}>
                                                                    <AccordionTrigger className="text-md text-foreground">
                                                                        {sublink.nav}
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="pl-4">
                                                                        {sublink.subSubNav?.map((subSublink) => (
                                                                            <Link
                                                                                key={subSublink.nav}
                                                                                href={subSublink.path}
                                                                                className="block py-2 text-md text-foreground hover:text-primary"
                                                                                onClick={() => setOpen(false)}
                                                                            >
                                                                                {subSublink.nav}
                                                                            </Link>
                                                                        ))}
                                                                    </AccordionContent>
                                                                </AccordionItem>
                                                            </Accordion>
                                                        ) : (
                                                            <Link
                                                                key={sublink.nav}
                                                                href={sublink.path}
                                                                className="block py-2 text-md text-foreground hover:text-primary"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                {sublink.nav}
                                                            </Link>
                                                        );
                                                    })}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ) : (
                                            <Link
                                                href={link.path}
                                                className="block py-2 text-md text-foreground hover:text-primary"
                                                onClick={() => setOpen(false)}
                                            >
                                                {link.nav}
                                            </Link>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </Accordion>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MobileNav;
