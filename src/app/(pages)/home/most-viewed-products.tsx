"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { featuredProducts } from "@/constants/featured-products";
import { cn } from "@/lib/utils";
import { ArrowBigRight, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function MostViewedProducts() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }
        setCurrent(api.selectedScrollSnap());
        setCount(api.scrollSnapList().length);

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", handleSelect);

        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);
    return (
        <section
            id="most-viewed"
            className="px-4 md:bg-gradient-to-r from-orange-500 from-50% to-50% min-h-[calc(100vh-4.5rem)] flex-center h-18"
        >
            <div className="container flex flex-col md:flex-row gap-4 lg:gap-12">
                <div className="order-1 md:order-0 overflow-x-clip w-full">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                        }}
                    >
                        <CarouselContent className="-ml-4">
                            {featuredProducts
                                .filter((item) => item.category === "products")
                                .map((product) => (
                                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                        <div className="overflow-clip group/scale">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-[12.5rem] object-cover scale-100 group-hover/scale:scale-105 transition-transform duration-300 ease-in-out"
                                            />
                                            <div className="bg-secondary flex flex-col gap-4 py-4">
                                                <h3 className="text-lg font-semibold px-4">{product.title}</h3>
                                                <p className="place-self-start px-4 text-sm line-clamp-2">
                                                    {product.para}
                                                </p>
                                                <Button asChild variant="ghost" className="w-fit hover:text-orange-500">
                                                    <Link href={product.link} className="group/link">
                                                        Learn More{" "}
                                                        <ArrowBigRight className="group-hover/link:animate-caret-blink" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="order-0 md:order-1 flex flex-col items-center gap-4 max-w-sm">
                    <h2 className="text-xl md:text-2xl text-balance">Most Viewed products</h2>
                    <Button
                        asChild
                        variant="default"
                        className="bg-background text-foreground border-2 border-foreground rounded-none p-6 hover:border-orange-600 hover:bg-orange-600 hover:text-slate-100 transition-colors duration-300 ease-in-out"
                    >
                        <Link href="#">View All Products</Link>
                    </Button>
                    <div className="space-x-4">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="default"
                                    onClick={() => api?.scrollTo(current - 1)}
                                    //disabled={current === 0}
                                    className={cn(
                                        "bg-background text-foreground rounded-md hover:border-orange-600 hover:bg-orange-600 hover:text-slate-100 transition-colors duration-300 ease-in-out",
                                        { "opacity-50": current === 0 },
                                    )}
                                >
                                    <MoveLeft />
                                </Button>
                            </TooltipTrigger>
                            {current === 0 && (
                                <TooltipContent>
                                    <p>No previous sildes</p>
                                </TooltipContent>
                            )}
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="default"
                                    onClick={() => api?.scrollTo(current + 1)}
                                    //disabled={current === count - 1}
                                    className={cn(
                                        "bg-background text-foreground rounded-md hover:border-orange-600 hover:bg-orange-600 hover:text-slate-100 transition-colors duration-300 ease-in-out",
                                        { "opacity-50": current === count - 1 },
                                    )}
                                >
                                    <MoveRight />
                                </Button>
                            </TooltipTrigger>
                            {current === count - 1 && (
                                <TooltipContent>
                                    <p>No more slides</p>
                                </TooltipContent>
                            )}
                        </Tooltip>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MostViewedProducts;
