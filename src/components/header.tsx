import { logo } from "../../public/images";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import MainNav from "./main-nav";
import Link from "next/link";
import MobileNav from "./mobile-nav";

import * as motion from "motion/react-client";

export type NavLink = {
    name: string;
    path: string;
};

const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
];

const Header = () => {
    return (
        <header className="sticky top-0 left-0 w-full border-b-2 backdrop-blur-md z-20">
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
                        <Image src={logo} alt="logo" className="logo" />
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
        </header>
    );
};

export default Header;
