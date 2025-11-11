"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { MenuItem } from "@/constants/menu-items";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

type MenuItemsProps = {
    menuItems: MenuItem[];
};

function MobileNav({ menuItems }: MenuItemsProps) {
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
                            {menuItems.map((link, index) => {
                                const hasSubMenu = link.subMenu && link.subMenu.length > 0;
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
                                                    {link.subMenu?.map((subMenuItem) => {
                                                        const hasNestedSubMenu =
                                                            subMenuItem.nestedSubMenu &&
                                                            subMenuItem.nestedSubMenu.length > 0;

                                                        return hasNestedSubMenu ? (
                                                            <Accordion key={subMenuItem.nav} type="single" collapsible>
                                                                <AccordionItem value={subMenuItem.nav}>
                                                                    <AccordionTrigger className="text-md text-foreground">
                                                                        {subMenuItem.nav}
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="pl-4">
                                                                        {subMenuItem.nestedSubMenu?.map(
                                                                            (nestedSubMenuItem) => (
                                                                                <Link
                                                                                    key={nestedSubMenuItem.nav}
                                                                                    href={nestedSubMenuItem.path}
                                                                                    className="block py-2 text-md text-foreground hover:text-primary"
                                                                                    onClick={() => setOpen(false)}
                                                                                >
                                                                                    {nestedSubMenuItem.nav}
                                                                                </Link>
                                                                            )
                                                                        )}
                                                                    </AccordionContent>
                                                                </AccordionItem>
                                                            </Accordion>
                                                        ) : (
                                                            <Link
                                                                key={subMenuItem.nav}
                                                                href={subMenuItem.path}
                                                                className="block py-2 text-md text-foreground hover:text-primary"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                {subMenuItem.nav}
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
