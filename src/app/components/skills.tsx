import React from "react";
import IconCloud from "./ui/icon-cloud";

const Skills = () => {
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
    "go",
  ];
  return (
    <div className="w-full text-2xl pt-40">
      <div className="w-full bg-gray-100 border-t-2 border-cyan-300">
        <div className="flex mx-40 font-mono pt-10">
          <div className="flex-1 pt-24">
            <h1 className="text-7xl pb-6 text-cyan-400">Skills</h1>
            <p className="max-w-md text-slate-950">
              To keep things simple, If it&apos;s in this cloud, I&apos;ve worked with it.
            </p>
          </div>
          <div className="flex-1">
            <div className="pb-6">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
