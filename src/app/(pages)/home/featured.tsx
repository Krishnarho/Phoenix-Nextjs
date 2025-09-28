"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { featuredProducts } from "@/constants/featured-products";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

function Featured() {
    const [featuredItem, setFeaturedItem] = useState("products");
    return (
        <section id="home-featured" className="px-4 py-8 min-h-screen">
            <div className="container grid gap-12">
                <div className="">
                    <h2 className="text-[clamp(1.875rem,2.5vw,3rem)] text-center text-balance mb-4 md:mb-8">
                        Featured Products
                    </h2>
                    <p className="max-w-[85ch] text-pretty text-center mx-auto">
                        Our featured product offerings in the electricity manufacturing sector focus on advanced power
                        distribution solutions designed to enhance efficiency, safety, and reliability across utility
                        and industrial applications. We specialize in high-performance cables & cables accessories,
                        distribution boards, meters, switches and ACSR/AAAC/AL.59 conductors engineered to meet the
                        evolving demands of modern power infrastructure. Built to withstand harsh operating
                        environments, our products ensure optimal energy flow and minimal downtime. With a commitment to
                        innovation and compliance with global standards, we provide scalable solutions that support
                        smart grid integration and sustainable energy distribution.
                    </p>
                </div>
                <ul className="mx-auto flex *:text-xl">
                    <li
                        className={cn("border-b px-2 pb-4  cursor-pointer", {
                            "border-orange-600 text-orange-600 border-b-2 font-bold": featuredItem === "products",
                        })}
                        onClick={() => setFeaturedItem("products")}
                    >
                        Products
                    </li>
                    <li
                        className={cn("border-b px-2 pb-4  cursor-pointer", {
                            "border-orange-600 text-orange-600 border-b-2 font-bold":
                                featuredItem === "industries & applications",
                        })}
                        onClick={() => setFeaturedItem("industries & applications")}
                    >
                        Industries & Applications
                    </li>
                </ul>
                <div className="grid-products">
                    {featuredProducts
                        .filter((item) => item.category === featuredItem)
                        .map((product) => (
                            <div
                                className="grid grid-rows-subgrid place-items-center gap-4 row-span-4 border border-ring rounded-lg hover:shadow-md hover:shadow-orange-600 hover:scale-105 bg-secondary transition-transform duration-300"
                                key={product.id}
                            >
                                <div className="relative w-full h-[12.5rem]">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover rounded-t-lg"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold px-4">{product.title}</h3>
                                <p className="place-self-start px-4 text-sm line-clamp-3">{product.para}</p>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="w-fit hover:text-orange-600 hover:animate-out mb-4"
                                >
                                    <Link href={product.link} className="group">
                                        Learn More <ArrowBigRight className="group-hover:animate-caret-blink" />
                                    </Link>
                                </Button>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Featured;
