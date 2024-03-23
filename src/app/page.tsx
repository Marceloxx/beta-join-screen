// Użycie klienta oznacza, że ten komponent działa po stronie klienta.
"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background"; // Załóżmy, że plik znajduje się w tym samym katalogu
import { motion } from "framer-motion";

// Eksportujemy domyślnie komponent, co jest wymagane przez Next.js dla stron
export default function Page() {
  return (
    
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="lg:max-w-[900px]  text-3xl md:text-7xl font-bold dark:text-white text-center">
        Early Access Beta Application for LearnU Ai
        
        <div className=" text-center font-extralight text-base md:text-2xl dark:text-neutral-200 py-4  ">
        
        Discover the future of knowledge management with LearnU AI. Sign up now to be the first to test our platform and influence the development of AI innovation. How to sign up? Enter your email address in the box below and join the exclusive group of testers. Don&apos;t wait, spots are limited!
              
        </div>
        
        </div>
        <a href="https://tally.so/r/3N6JvN" target="_blank" rel="noopener noreferrer">
  <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
    Join to Beta
  </button>
</a>

      </motion.div>
    </AuroraBackground>
  
  );
}
