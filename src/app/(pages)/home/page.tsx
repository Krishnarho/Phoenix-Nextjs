import HeroSwiper from "./hero";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ClientScroll from "@/components/client";
import Featured from "./featured";
import MostViewedProducts from "./most-viewed-products";

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
                        <h1 className="autoShow text-[clamp(1.875rem,2.5vw,3rem)] mt-8 lg:mt-0 text-balance">
                            Welcome to Phoenix Global
                        </h1>
                        <p className="autoShow max-w-[65ch] text-pretty">
                            The zest for entrepreneurship led to the formation of Phoenix Global. With a strong interest
                            in the energy sector, we recognized a growing demand for electrical products across key
                            domains such as Utilities, Renewable Energy, Industrial Infrastructure, Railways, Metro
                            Projects, and Ports. This insight paved a clear and promising path for us to establish our
                            presence in the industry.
                        </p>
                        <p className="autoShow max-w-[65ch] text-pretty">
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
            <Featured />
            <MostViewedProducts />
            <ClientScroll />
        </main>
    );
}

export default Home;
