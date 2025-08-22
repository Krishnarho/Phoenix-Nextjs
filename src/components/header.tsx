import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import MainNav from "./main-nav";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import ScrollHeader from "./scroll-header";
import { navLinks } from "@/data/nav-links";

import * as motion from "motion/react-client";

const Header = () => {
    return (
        <ScrollHeader>
            <div className="max-w-[90rem] h-18 px-2 mx-auto flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                    }}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/images/logo.png" width={56} height={56} alt="logo" className="logo" />
                        <div>
                            <h2 className="text-orange-600 font-bold text-xl sm:text-2xl tracking-wider">
                                phoenix global
                            </h2>
                            <p className=" uppercase text-center text-[0.6em] tracking-wider">
                                We bring an electrical flare
                            </p>
                        </div>
                    </Link>
                </motion.div>

                <div className="flex gap-3 items-center">
                    {/* DESKTOP */}
                    <MainNav navLinks={navLinks} />

                    {/* THEME */}
                    <ModeToggle />

                    {/* MOBILE */}
                    <MobileNav navLinks={navLinks} />
                </div>
            </div>
        </ScrollHeader>
    );
};

export default Header;
