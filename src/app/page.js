"use client";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Technology from "@/components/Technology/Technology";
import Leadership from "@/components/Leadership/Leadership";
import Contact from "@/components/Contact/Contact";
import { useGSAPAnimations } from "@/utils/animations";

export default function Home() {
  useGSAPAnimations();

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Technology />
      <Leadership />
      <Contact />
    </main>
  );
}
