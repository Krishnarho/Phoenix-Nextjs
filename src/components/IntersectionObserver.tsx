"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationObserver() {
    const pathname = usePathname();

    useEffect(() => {
        // 1. Initialize the Core Intersection Observer
        const io = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); // Stop tracking once animated
                    }
                });
            },
            { threshold: 0.12 }, // Triggers when 12% of the element enters the viewport
        );

        // 2. Safeguard selector function
        const observeNewElements = () => {
            // Find all elements that haven't been animated yet
            const elements = document.querySelectorAll(".autoShow:not(.visible)");
            elements.forEach((el) => io.observe(el));
        };

        // 3. Fix the SSR / Next.js Hydration Race Condition
        let rafId: number;
        const executeObservation = () => {
            // Cancel any pending frame request to avoid double-firing on rapid mutations
            if (rafId) cancelAnimationFrame(rafId);
            // requestAnimationFrame ensures React finishes layout painting before we touch the DOM
            rafId = requestAnimationFrame(() => {
                observeNewElements();
            });
        };

        // Initial check when page hits the browser or path changes
        executeObservation();

        // 4. MutationObserver watches for elements arriving from client-side API fetches
        const mutationObserver = new MutationObserver(() => {
            executeObservation();
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });

        // 5. Cleanup both hooks completely when navigating away
        return () => {
            cancelAnimationFrame(rafId);
            io.disconnect();
            mutationObserver.disconnect();
        };
    }, [pathname]);

    return null;
}
