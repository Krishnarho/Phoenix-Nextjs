"use client";

import { useIsMobile } from "@/app/hooks/use-mobile";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
    // Refs for cursor Elements
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const cursorBorderRef = useRef<HTMLDivElement | null>(null);

    // Hide cursor in mobile devices
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile) return;
        // Get cursor elements
        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current;

        // initial positopn off-screen
        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        });

        // Variables for cursor position with differenr speeds
        const xTo = gsap.quickTo(cursor, "x", {
            duration: 0.8,
            ease: "power3.out",
        });
        const yTo = gsap.quickTo(cursor, "y", {
            duration: 0.8,
            ease: "power3.out",
        });

        const xToBorder = gsap.quickTo(cursorBorder, "x", {
            duration: 0.8,
            ease: "power.out",
        });
        const yToBorder = gsap.quickTo(cursorBorder, "y", {
            duration: 0.8,
            ease: "power3.out",
        });

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xToBorder(e.clientX);
            yToBorder(e.clientY);
        };

        // Mouse move listener
        window.addEventListener("mousemove", handleMouseMove);
    }, []);

    if (isMobile) return null;

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 size-[20px] rounded-full z-[999] bg-orange-500 pointer-events-none mix-blend-difference"
            ></div>
            <div
                ref={cursorBorderRef}
                className="fixed top-0 left-0 size-[40px] rounded-full z-[999] border border-orange-400 pointer-events-none mix-blend-difference opacity-50"
            ></div>
        </>
    );
};

export default CustomCursor;
