"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import { FlipWords } from "./components/ui/flip-words";
import { LampContainer } from "./components/ui/lamp";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Intrests from "./components/intrests";
import Skills from "./components/skills";

import "ldrs/hatch";

function App() {
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Threshold of 50px
        setShowScrollPrompt(false);
      } else {
        setShowScrollPrompt(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950">
        {isLoading && (
          <l-hatch size="28" stroke="4" speed="3.5" color="white"></l-hatch>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex-cols h-screen">
        <Navbar />
        <div className="pt-10">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              <div className="flex-cols">
                <div>
                  <h2 className="text-gray-100 font-medium text-2xl md:text-6xl text-center">
                    <FlipWords
                      className="font-serif text-cyan-300"
                      words={[
                        "Bonjour",
                        "Hola",
                        "Hello",
                        "Ciao",
                        "Aloha",
                        "Ola",
                      ]}
                    />{" "}
                    I&apos;m Luke,
                  </h2>
                </div>
                <div className="text-right pl-8">
                  <p className="text-gray-100 pt-2">A web developer</p>
                </div>
              </div>
            </motion.h1>
          </LampContainer>

          <div className="h-auto w-full text-white bg-slate-950 text-2xl">
            <div className="flex mx-40">
              <div className="flex-1 max-w-2/3 max-w-4xl text-4xl font-mono text-cyan-300">
                <h1 className="pb-16" data-aos="fade-up">
                  Hi, I&apos;m Luke. Actually I think I might&apos;ve said that
                  already. But anyway, I&apos;m a student at Washington University, passionate
                  about programming and entrepreneurship.
                </h1>

                <h1 data-aos="fade-up">
                  I love the two fields because they serve as a powerful medium
                  for both creativity and problem solving. Together, they allow
                  me to bring any idea I have to life!
                </h1>
              </div>
            </div>

            {/* Skills */}
            <Skills />

            {/* interests */}
            <Intrests />
          </div>
        </div>
        {showScrollPrompt && (
          <div className="fixed bottom-0 left-0 right-0 pb-5 text-center">
            <div className="animate-bounce inline-block bg-gray-200 rounded-full p-3 shadow-lg">
              <span className="text-slate-950 font-mono text-sm">
                scroll down for more
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
