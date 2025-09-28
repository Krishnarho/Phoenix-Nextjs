"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { featuredProducts } from "@/constants/featured-products";
import { ArrowBigRight, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function MostViewedProducts() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);
    return (
        <section
            id="most-viewed"
            className="px-4 md:bg-gradient-to-r from-orange-500 from-50% to-50% min-h-[calc(100vh-4.5rem)] flex-center h-18"
        >
            <div className="container flex flex-col md:flex-row gap-4 lg:gap-12">
                <div className="order-1 md:order-0 overflow-x-clip w-full">
                    {/* <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full "
                    >
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center">
                                                <span className="text-3xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel> */}
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        {/* OVERRIDE HERE: grid-based CarouselContent */}
                        <CarouselContent className="">
                            {featuredProducts
                                .filter((item) => item.category === "products")
                                .map((product, i) => (
                                    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="relative w-full h-[12.5rem]">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="bg-secondary flex flex-col gap-4 py-6">
                                            <h3 className="text-lg font-semibold px-4">{product.title}</h3>
                                            <p className="place-self-start px-4 text-sm line-clamp-2">{product.para}</p>
                                            <Button
                                                asChild
                                                variant="ghost"
                                                className="w-fit hover:text-orange-600 hover:animate-out"
                                            >
                                                <Link href={product.link} className="group">
                                                    Learn More{" "}
                                                    <ArrowBigRight className="group-hover:animate-caret-blink" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="order-0 md:order-1 flex flex-col items-center gap-4 max-w-sm">
                    <h2 className="text-xl md:text-2xl">Most Viewed products</h2>
                    <Button
                        asChild
                        variant="default"
                        className="bg-background text-foreground border-2 border-foreground rounded-none p-6 hover:border-orange-600 hover:bg-orange-600 hover:text-slate-100 transition-colors duration-300 ease-in-out"
                    >
                        <Link href="#">View All Products</Link>
                    </Button>
                    <div className="space-x-4">
                        <Button
                            variant="default"
                            onClick={() => api?.scrollTo(current - 1)}
                            className="bg-background text-foreground rounded-md hover:border-orange-600 hover:bg-orange-600 hover:text-slate-100 transition-colors duration-300 ease-in-out"
                        >
                            <MoveLeft />
                        </Button>
                        <Button
                            variant="default"
                            onClick={() => api?.scrollTo(current + 1)}
                            className="bg-background text-foreground rounded-md hover:border-orange-600 hover:bg-orange-600 hover:text-slate-100 transition-colors duration-300 ease-in-out"
                        >
                            <MoveRight />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MostViewedProducts;
