"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import { FlipWords } from "./components/ui/flip-words";
import { LampContainer } from "./components/ui/lamp";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./components/ui/contact";
import IconCloud from "./components/ui/icon-cloud";
import { ExpandableCardDemo } from "./components/ui/expandable-card";
import { TbChess } from "react-icons/tb";
import { GiGuitarBassHead } from "react-icons/gi";
import { BiMath } from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiFishingPole } from "react-icons/gi";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const handleScroll = () => {
      if (window.scrollY > 50) {  // Threshold of 50px
        setShowScrollPrompt(false);
      } else {
        setShowScrollPrompt(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "css3",
    "express",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "python",
    "supabase",
    "zod",
    "tailwindcss",
    "lucia",
    "nextdotjs",
    "stripe",
    "drizzle",
  ]

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
                      words={["Bonjour", "Hola", "Ciao", "Aloha", "Ola"]}
                    />{" "}

                    I'm Luke,
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
                  Hi, I'm Luke. Actually I think I might've said that already. But anyway,
                  I'm a sophomore at Washu, passionate about programming and
                  entrepreneurship.
                </h1>

                <h1 data-aos="fade-up">
                  I love the two fields because they serve as a powerful medium for both
                  creativity and problem solving. Together, they allow me to
                  bring any idea I have to life!
                </h1>
              </div>
            </div>
            
            {/* Skills */}
            <div className="w-full text-2xl pt-40">
            <div className="w-full bg-gray-100 border-t-2 border-cyan-300">
              <div className="flex mx-40 font-mono pt-10">
                <div className="flex-1 pt-24">
                  <h1 className="text-7xl pb-6 text-cyan-400">Skills</h1>
                  <p className="max-w-md text-slate-950">
                    To keep things simple, If it's in this cloud, I've worked with it.
                  </p>
                </div>
                <div className="flex-1">
                 
                  <div className="pb-6">
                    <IconCloud iconSlugs={slugs}/>
                  </div>
                </div>
              </div>
              </div>
            </div>

              {/* interests */}
            <div className="w-full text-2xl pt-20 border-t-2 border-cyan-300">
            <div className="w-full bg-slate-950">
              <div className="flex mx-40 font-mono pt-10">
                

                <div className="flex-1">
                  <div>
                  <h1 className="text-7xl pb-8 text-cyan-400">Interests</h1>
                  <p className="max-w-md text-gray-300 pl-1">
                    These are some things that I greatly enjoy doing in my free time.
                  </p>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="flex-col">
                    <li className="pb-16">
                      <div className="flex">
                        <div className="flex-1">
                          <a href="https://www.chess.com/member/chessmonkey2005" target="_blank" rel="noopener noreferrer">
                          <TbChess className="h-20 w-20 mt-2" />
                          </a>                    
                        </div>
                        <div className="flex-2">
                          <h1 className="text-xl pb-2 text-cyan-400">Chess</h1>
                          <p className="text-sm max-w-md text-gray-300">
                            I've been playing chess since I was 10. It's one of my favorite things to do. Click the pawn to add me on chess.com!
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="pb-16">
                      <div className="flex">
                        <div className="flex-1">
                        <GiGuitarBassHead className="h-20 w-20"/>
                        </div>
                        <div className="flex-2">
                          <h1 className="text-xl pb-2 text-cyan-400">Guitar</h1>
                          <p className="text-sm max-w-md text-gray-300">
                            Currently I'm an absolute noob at guitar. I've been playing for about a month now. I'm learning to play the electric guitar.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="pb-16">
                      <div className="flex">
                        <div className="flex-1">
                        <BiMath className="h-20 w-20"/>
                        </div>
                        <div className="flex-2">
                          <h1 className="text-xl pb-2 text-cyan-400">Math</h1>
                          <p className="text-sm max-w-md text-gray-300">
                            I'm a huge fan of mathematics. A nice proof is enough to keep me intrigued for hours. I'm currently studying linear algebra.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="pb-16">
                      <div className="flex">
                        <div className="flex-1">
                        <GiWeightLiftingUp className="h-20 w-20"/>
                        </div>
                        <div className="flex-2">
                          <h1 className="text-xl pb-2 text-cyan-400">Lifting</h1>
                          <p className="text-sm max-w-md text-gray-300">
                            I played baseball all throughout high school and I've been lifting ever since. I'm a former member of the 1000lb club but I'll be back soon! 
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="pb-16">
                      <div className="flex">
                        <div className="flex-1">
                        <GiFishingPole className="h-20 w-20"/>
                        </div>
                        <div className="flex-2">
                          <h1 className="text-xl pb-2 text-cyan-400">Fishing</h1>
                          <p className="text-sm max-w-md text-gray-300">
                            Unfortunately I don't get to do this one often anymore, so when I get the opportunity I take it. I like to listen to music while I fish.
                          </p>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>



              </div>
              </div>
            </div>

          </div>
        </div>
        {showScrollPrompt && (
          <div className="fixed bottom-0 left-0 right-0 pb-5 text-center">
            <div className="animate-bounce inline-block bg-gray-200 rounded-full p-3 shadow-lg">
              <span className="text-slate-950 font-mono text-sm">Scroll down for more</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
