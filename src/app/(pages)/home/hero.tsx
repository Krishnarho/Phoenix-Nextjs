"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import * as motion from "motion/react-client";

const slides = [
    {
        id: 1,
        title: "Generations",
        para: "Powering the world starts with electricity generation—from renewable sources to traditional plants—",
        image: "/images/generation.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Transmissions",
        para: "Converted into energy that travels vast distances through high-voltage transmission lines...",
        image: "/images/transmission.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Distributions",
        para: "Once near homes and businesses, it's carefully distributed through local networks to fuel everything from daily life to critical infrastructure. Reliable. Efficient. Essential.",
        image: "/images/distribution.jpg",
        link: "#",
    },
];

export default function HeroSwiper() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // use realIndex for looped swiper
            slidesPerView={1}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={800}
            loop
            className="mySwiper w-full h-screen"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                    <div className="absolute inset-0 flex items-center justify-start w-full h-screen">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover w-full h-full mx-auto"
                        />
                        {activeIndex === index && (
                            <motion.div
                                key={slide.id}
                                className="text-white p-4 mx-2 sm:ml-18 space-y-4 bg-black/10 backdrop-blur rounded"
                                initial={{ opacity: 0, x: -350 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 350 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 25,
                                    duration: 0.4,
                                    delay: 0.3,
                                }}
                            >
                                <h1 className="text-3xl md:text-6xl font-bold ">{slide.title}</h1>
                                <p className="max-w-[60ch]">{slide.para}</p>
                                <Link
                                    href={slide.link}
                                    className="px-3 py-2 border-2 hover:border-orange-600 hover:bg-orange-600"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
