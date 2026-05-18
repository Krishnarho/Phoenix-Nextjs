import { menuItems } from "@/constants/menu-items";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function DesktopSubmenu({
    activeMenu,
    setActiveMenu,
}: {
    activeMenu: string | null;
    setActiveMenu: React.Dispatch<React.SetStateAction<string | null>>;
}) {
    const [visible, setVisible] = useState(false);
    const [displayedItem, setDisplayedItem] = useState<string | null>(null);

    // Control content visibility to allow smooth close animation
    useEffect(() => {
        if (activeMenu) {
            setDisplayedItem(activeMenu);
            setVisible(true);
        } else {
            // delay removing content until animation ends
            const timeout = setTimeout(() => {
                setVisible(false);
                setDisplayedItem(null);
            }, 300); // same as CSS duration
            return () => clearTimeout(timeout);
        }
    }, [activeMenu]);

    const navItemObj = menuItems.find((item) => item.id === activeMenu);

    return (
        visible && (
            <div className="overflow-hidden">
                {displayedItem === "home" && (
                    <div className="p-8 flex *:basis-1/3 gap-4">
                        <div className="space-y-4">
                            <h2 className="text-lg font-bold">Discover the World of Phoenix Global</h2>
                            <p>
                                With a strong interest in the energy sector, we recognized a growing demand for
                                electrical products across key domains such as Utilities, Renewable Energy, Industrial
                                Infrastructure, Railways, Metro Projects, and Ports. This insight paved a clear and
                                promising path for us to establish our presence in the industry.
                            </p>
                        </div>
                        <ul className="list-none space-y-4 pt-1 link-underline">
                            {navItemObj?.subMenu?.map((item) => {
                                return (
                                    <li className="flex gap-1" key={item.nav}>
                                        <Link href={item.path} onClick={() => setActiveMenu(null)}>
                                            {item.nav}
                                        </Link>
                                        {item.nestedSubMenu && <ChevronRightIcon className="stroke-orange-500 ml-2" />}
                                        {item.nestedSubMenu && (
                                            <ol className="list-none pl-4 space-y-1">
                                                {item.nestedSubMenu.map((item) => (
                                                    <li key={item.nav}>
                                                        <Link href={item.path} onClick={() => setActiveMenu(null)}>
                                                            {item.nav}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ol>
                                        )}
                                    </li>
                                );
                            })}
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
                )}
                {displayedItem === "ia" && (
                    <div className="p-8 flex gap-16">
                        <div className="space-y-4 w-1/2">
                            <h2 className="text-lg font-bold">
                                Industries & Applications: Powering Energy, Industrial, and Oil & Gas Sectors
                            </h2>
                            <p>
                                We specialize in the trading and supply of high-quality electrical products and
                                equipment tailored to meet the demanding needs of the energy, industrial, and oil & gas
                                sectors. Our solutions are engineered for reliability, safety, and efficiency, ensuring
                                uninterrupted operations in even the most challenging environments. From power
                                distribution systems to specialized control gear, we support a wide range of
                                applications across these critical industries, helping our clients maintain
                                productivity, meet compliance standards, and optimize energy use.
                            </p>
                        </div>
                        <div className="w-1/2 grid grid-cols-2 gap-4 link-underline">
                            {navItemObj?.subMenu?.map((item) => (
                                <Link href="#" key={item.nav} className="grid grid-rows-[auto_1fr] gap-3">
                                    {item.imageUrl && (
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.nav}
                                            width={400}
                                            height={300}
                                            className="w-full h-36 object-cover"
                                        />
                                    )}

                                    <h3 className="font-semibold text-center">{item.nav}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                {displayedItem === "products" && (
                    <div className="p-8 flex gap-16">
                        <div className="w-1/2">
                            <p>
                                Our featured product offerings in the electricity manufacturing sector focus on advanced
                                power distribution solutions designed to enhance efficiency, safety, and reliability
                                across utility and industrial applications. We specialize in high-performance cables &
                                cables accessories, distribution boards, meters, switches and ACSR/AAAC/AL.59 conductors
                                engineered to meet the evolving demands of modern power infrastructure. Built to
                                withstand harsh operating environments, our products ensure optimal energy flow and
                                minimal downtime. With a commitment to innovation and compliance with global standards,
                                we provide scalable solutions that support smart grid integration and sustainable energy
                                distribution.
                            </p>
                        </div>
                        <div className="w-1/2 grid grid-cols-3 gap-4 link-underline">
                            {navItemObj?.subMenu?.map((item) => (
                                <Link href="#" key={item.nav} className="grid grid-rows-[auto_1fr] gap-3">
                                    {item.imageUrl && (
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.nav}
                                            width={400}
                                            height={300}
                                            className="w-full h-28 object-cover"
                                        />
                                    )}

                                    <h3 className="font-semibold text-center">{item.nav}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    );
}

export default DesktopSubmenu;
