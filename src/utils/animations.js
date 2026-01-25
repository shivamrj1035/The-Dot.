"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimations = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Entrance
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.set("[data-hero-content], [data-scroll-reveal]", {
                        opacity: 1,
                        visibility: "visible",
                        y: 0
                    });
                }
            });

            // Instant reset
            gsap.set("[data-hero-content]", { opacity: 0, y: 30 });

            // 1. Dot Appears Snappy
            tl.to("[data-narrative-dot]", {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(2)"
            })
                // 2. Dot becomes Line (instant stretch)
                .to("[data-narrative-dot]", {
                    scaleY: 0.1,
                    scaleX: 2,
                    duration: 0.7,
                    ease: "power2.in"
                })
                .to("[data-narrative-line]", {
                    width: "300px",
                    opacity: 1,
                    duration: 0.7,
                    ease: "expo.out"
                }, "-=0.1")
                // 3. Narrative Text shows and Content Reveal begins
                .to("[data-narrative-text]", {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out"
                })
                .to(["[data-narrative-dot]", "[data-narrative-line]", "[data-narrative-text]"], {
                    opacity: 0.4,
                    duration: 0.5,
                    delay: 0.2,
                    ease: "power2.inOut"
                })
                // 4. Hero Content reveals and narrative moves to background
                .to("[data-hero-content]", {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "expo.out"
                }, "-=0.4");

            // Ensure all scroll-reveal elements are visible immediately 
            // since we are removing the scroll triggers
            gsap.set("[data-scroll-reveal]", { opacity: 1, y: 0, visibility: "visible" });
        });

        return () => ctx.revert();
    }, []);
};
