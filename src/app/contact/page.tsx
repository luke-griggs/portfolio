"use client";

import Navbar from "../components/navbar";
import React from "react";

import { AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "@/app/components/ui/reveal-effect";
import { GlareCard } from "../components/ui/glare-card";
import { FaFacebookSquare, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";

const Page = () => {
  return (
    <div className="bg-slate-950 h-screen relative">
      <Navbar />

      <AnimatePresence>
        {/* CanvasRevealEffect as Fullscreen Background */}
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="absolute inset-0 bg-slate-950"
          colors={[
            [56, 189, 248], // Example colors
            [10, 132, 255],
          ]}
          dotSize={2}
        />

        {/* Centering GlareCard in the Middle of the Screen */}
        <div className="flex items-center justify-center w-full h-full pt-10 relative">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 w-full h-auto relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
              <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                <div className="w-full max-w-6xl p-8 text-black font-mono z-40">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm pb-4">send me a message!</p>
                      <CardItem className="text-5xl font-semibold hover:text-cyan-300" as="a" href="mailto:lukegriggs100@gmail.com">
                      lukegriggs100@gmail.com
                      </CardItem>
                    </div>
                  </div>

                  <div className="my-12 border-t border-black"></div>
                </div>
              </CardItem>
              <ul className="flex flex-row space-x-10 relative pl-8 pb-6 z-40">
              <CardItem
                as="a"
                href="https://www.linkedin.com/in/lukegriggs25/"
                target="_blank"
                className="hover:text-cyan-300"

              >
                <FaLinkedinIn className="text-3xl" />
              </CardItem>
              <CardItem
                as="a"
                href="https://github.com/luke-griggs/"
                target="_blank"
                className="hover:text-cyan-300"

              >
                <FaGithub className="text-3xl" />
              </CardItem>
              <CardItem
                as="a"
                href="https://www.facebook.com/profile.php?id=100087801921393"
                target="_blank"
                className="hover:text-cyan-300"

              >
                <FaFacebookSquare className="text-3xl" />
              </CardItem>
              <CardItem
                as="a"
                href="https://x.com/LukeGriggs6"
                target="_blank"
                className="hover:text-cyan-300"

              >
                <FaXTwitter className="text-3xl" />
              </CardItem>
              </ul>
              </div>
            </CardBody>
          </CardContainer> 
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Page;
