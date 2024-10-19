// // "use client";

// // import React from "react";
// // import { motion, useMotionValue, useTransform } from "framer-motion";
// // import Header from "@/components/Header";
// // import Hero from "@/components/Hero";
// // import Works from "@/components/Works";
// // import Cards from "@/components/Cards";
// // import Features from "@/components/Features";
// // import Solution from "@/components/Solution";
// // import ImageButtonSection from "@/components/ImageButtonSection";
// // import FAQSection from "@/components/FAQSection";
// // import Footer from "@/components/Footer";
// // import Framer from "@/components/Framer"; // Curtain

// // export default function Home() {
// //   const scrollY = useMotionValue(0);
// //   const documentHeight = typeof window !== "undefined" ? document.body.scrollHeight : 0;
// //   const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0;

// //   // Adjust Framer (curtain) to start at -100% (fully up) and move down to 0%
// //   const curtainY = useTransform(scrollY, [documentHeight, documentHeight -viewportHeight], ["-100%", "0%"]);

// //   const handleScroll = () => {
// //     scrollY.set(window.scrollY); // Update scroll position on scroll
// //   };

// //   // Attach scroll listener
// //   React.useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <Header />
// //       <Hero />
// //       <Works />
// //       <Cards />
// //       <Features />
// //       <Solution />
// //       <ImageButtonSection />
// //       <FAQSection />

// //       <div className="">
// //         <motion.div
// //           className="z-20 bg-white h-full" // Ensure Framer covers Footer completely
// //           style={{ y: curtainY }} // Transform y based on scroll position near footer
// //           >
// //           <Framer />
// //         </motion.div>
// //         <Footer />
// //         </div>

// //     </>
// //   );
// // }


"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Cards from "@/components/Cards";
import Features from "@/components/Features";
import Solution from "@/components/Solution";
import ImageButtonSection from "@/components/ImageButtonSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Framer from "@/components/Framer"; // Curtain
import Body from "@/components/Body";

export default function Home() {
  const scrollY = useMotionValue(0);
  const documentHeight = typeof window !== "undefined" ? document.body.scrollHeight : 0;
  const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  // Adjust Framer (curtain) to start at -100% (fully up) and move down to 0%
  const curtainY = useTransform(scrollY, [documentHeight, documentHeight - viewportHeight], ["-100%", "0%"]);

  const handleScroll = () => {
    scrollY.set(window.scrollY); // Update scroll position on scroll
  };

  // Attach scroll listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Body />
      <Works />
      <Cards />
      <Features />
      <Solution />
      <ImageButtonSection />
      <FAQSection />

      <div 
          style={{background: "linear-gradient(to bottom, white 50%, #D357FE 50%, #9330D4 100%)"}}
        >
        <motion.div
          className="z-20 h-full"
          style={{
            y: curtainY,
            // Smooth transition to footer gradient
          }}
        >
          <Framer />
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

