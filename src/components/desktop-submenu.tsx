import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DesktopSubmenu({
    navItemId,
    setNavItem,
}: {
    navItemId: string | null;
    setNavItem: React.Dispatch<React.SetStateAction<string | null>>;
}) {
    if (navItemId === "home")
        return (
            <div className="p-8 flex *:basis-1/3">
                <div className="space-y-4">
                    <h2 className="text-lg font-bold">Discover the World of Phoenix Global</h2>
                    <p>
                        With a strong interest in the energy sector, we recognized a growing demand for electrical
                        products across key domains such as Utilities, Renewable Energy, Industrial Infrastructure,
                        Railways, Metro Projects, and Ports. This insight paved a clear and promising path for us to
                        establish our presence in the industry.
                    </p>
                </div>
                <ul className="list-none space-y-4">
                    <li className="w-full text-left">
                        <Link href="/" onClick={() => setNavItem(null)}>
                            Home Page
                        </Link>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="flex items-center gap-1">
                            <span>About Us</span>
                            <ChevronRightIcon className="stroke-orange-500" />
                        </div>
                        <ol className="list-none pl-4 space-y-1">
                            <li>
                                <Link href="/about-phoenix-global#about-content" onClick={() => setNavItem(null)}>
                                    Introduction
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-phoenix-global#vision" onClick={() => setNavItem(null)}>
                                    Our Vision
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-phoenix-global#mission" onClick={() => setNavItem(null)}>
                                    Our Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-phoenix-global#capabilities" onClick={() => setNavItem(null)}>
                                    Our Capabilities
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-phoenix-global#clients" onClick={() => setNavItem(null)}>
                                    Our Clients
                                </Link>
                            </li>
                        </ol>
                    </li>
                </ul>

                <div>
                    <div className="relative w-full mb-4 h-48">
                        <Image
                            src="/images/about-submenu.jpg"
                            alt=""
                            fill
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className="object-cover w-full h-auto"
                        />
                    </div>
                    <p>
                        The company leads innovation in smart products and technologies, serving a wide range of
                        industries.
                    </p>
                </div>
            </div>
        );
    if (navItemId === "i&a")
        return (
            <div className="p-8 flex gap-16">
                <div className="space-y-4 w-1/2">
                    <h2 className="text-lg font-bold">
                        Industries & Applications: Powering Energy, Industrial, and Oil & Gas Sectors
                    </h2>
                    <p>
                        We specialize in the trading and supply of high-quality electrical products and equipment
                        tailored to meet the demanding needs of the energy, industrial, and oil & gas sectors. Our
                        solutions are engineered for reliability, safety, and efficiency, ensuring uninterrupted
                        operations in even the most challenging environments. From power distribution systems to
                        specialized control gear, we support a wide range of applications across these critical
                        industries, helping our clients maintain productivity, meet compliance standards, and optimize
                        energy use.
                    </p>
                </div>
                <div className="w-1/2 grid grid-cols-2 gap-4">
                    <Link href="#">
                        <div className="relative w-full mb-4 h-36">
                            <Image
                                src="/images/products/energy.jpg"
                                alt=""
                                fill
                                sizes="(min-width: 768px) 20vw, 100vw"
                                className="object-cover w-full h-auto"
                            />
                        </div>
                        <h3 className="font-semibold text-center">Energy</h3>
                    </Link>
                    <Link href="#">
                        <div className="relative w-full mb-4 h-36">
                            <Image
                                src="/images/products/industry.jpg"
                                alt=""
                                fill
                                sizes="(min-width: 768px) 20vw, 100vw"
                                className="object-cover w-full h-auto"
                            />
                        </div>
                        <h3 className="font-semibold text-center">Industries</h3>
                    </Link>
                    <Link href="#">
                        <div className="relative w-full mb-4 h-36">
                            <Image
                                src="/images/products/oil-gas.jpg"
                                alt=""
                                fill
                                sizes="(min-width: 768px) 20vw, 100vw"
                                className="object-cover w-full h-auto"
                            />
                        </div>
                        <h3 className="font-semibold text-center">Oil & Gas</h3>
                    </Link>
                </div>
            </div>
        );
}

export default DesktopSubmenu;
