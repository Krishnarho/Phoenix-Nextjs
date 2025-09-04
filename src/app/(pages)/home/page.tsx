import HeroSwiper from "./hero";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { featuredProducts } from "@/constants/featured-products";
import ClientScroll from "@/components/client";

function Home() {
    return (
        <main>
            <section id="home-hero">
                <HeroSwiper />
            </section>
            <section
                id="home-about"
                className="px-2 py-3 lg:py-16 bg-linear-[45deg,var(--background)_50%,oklch(64.6%_0.222_41.116)_50%] min-h-screen grid place-items-center"
            >
                <div className="container flex gap-4 flex-col lg:flex-row [&>*]:w-full lg:[&>*]:w-1/2">
                    <div className="flex justify-center items-start">
                        <Image
                            src="/images/about.jpg"
                            alt="About Phoenix Global"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (min-width: 1280px) 640px, 50vw"
                            className="object-cover  max-h-72 md:max-h-96 object-ceter"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[clamp(1.875rem,2.5vw,3rem)] mt-8 lg:mt-0 text-balance">
                            Welcome to Phoenix Global
                        </h1>
                        <p className="max-w-[65ch] text-pretty">
                            The zest for entrepreneurship led to the formation of Phoenix Global. With a strong interest
                            in the energy sector, we recognized a growing demand for electrical products across key
                            domains such as Utilities, Renewable Energy, Industrial Infrastructure, Railways, Metro
                            Projects, and Ports. This insight paved a clear and promising path for us to establish our
                            presence in the industry.
                        </p>
                        <p className="max-w-[65ch] text-pretty">
                            Since its inception, Phoenix Global has emerged as a trusted name in the electrical trading
                            and contracting sector, consistently expanding and achieving new milestones. As part of our
                            growth journey, we became an authorized channel partner for{" "}
                            <strong className="text-lg">Raychem RPG Pvt. Ltd.</strong> and{" "}
                            <strong className="text-lg">Nvent - Erico, Eriflex and Caddy </strong> while also expanding
                            our reach as trusted traders <strong>for Secure Meters Ltd.</strong> and{" "}
                            <strong>Galaxy Transmissions</strong>.
                        </p>

                        <Button
                            asChild
                            className="rounded-none hover:bg-orange-600 hover:text-accent-foreground transition-colors ease-in duration-300 w-fit mt-4"
                        >
                            <Link href="/about-phoenix-global">
                                <span className="animate-bounce">Learn More</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            <section id="home-featured" className="px-4 py-8 min-h-screen">
                <div className="container">
                    <div>
                        <h2 className="text-[clamp(1.875rem,2.5vw,3rem)] text-center text-balance mb-4 md:mb-8">
                            Featured Products
                        </h2>
                        <p className="max-w-[85ch] text-pretty text-center mx-auto">
                            Our featured product offerings in the electricity manufacturing sector focus on advanced
                            power distribution solutions designed to enhance efficiency, safety, and reliability across
                            utility and industrial applications. We specialize in high-performance cables & cables
                            accessories, distribution boards, meters, switches and ACSR/AAAC/AL.59 conductors engineered
                            to meet the evolving demands of modern power infrastructure. Built to withstand harsh
                            operating environments, our products ensure optimal energy flow and minimal downtime. With a
                            commitment to innovation and compliance with global standards, we provide scalable solutions
                            that support smart grid integration and sustainable energy distribution.
                        </p>
                    </div>
                    <div className="grid-products mt-8">
                        {featuredProducts.map((product) => (
                            <div
                                className="grid grid-rows-subgrid place-items-center gap-4 row-span-4 border border-ring rounded-lg hover:shadow-md hover:shadow-orange-600 hover:scale-105 transition-transform duration-300 bg-secondary"
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
            <ClientScroll />
        </main>
    );
}

export default Home;
