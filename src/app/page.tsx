"use client";

import React from "react";
import Navbar from "@/app/components/navbar";
import { FlipWords } from "./components/ui/flip-words";
import { LampContainer } from "./components/ui/lamp";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./components/ui/contact";

function App() {
  return (
    <>
      <div className="w-full flex-cols h-screen overflow-hidden">
        <div>
          <Navbar />
        </div>
        <div>
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
                  <h2 className="text-white font-medium text-2xl md:text-6xl text-center">
                    <FlipWords
                      className="font-serif"
                      words={["Bonjour", "Hola", "Ciao", "Aloha"]}
                    />{" "}
                    I'm Luke,
                  </h2>
                </div>
                <div className="text-right pl-8">
                  <p className="text-white">A web developer</p>
                </div>
              </div>
            </motion.h1>
          </LampContainer>
        </div>
      </div>
      <div className="flex h-screen bg-slate-950 mx-auto">
        
      </div>
      <BackgroundBeams />
    </>
  );
}

export default App;
