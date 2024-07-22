"use client";

import React from 'react'
import Navbar from '../components/navbar';
import { HoverEffect } from '../components/ui/card-hover-effect'
import TypingAnimation from '../components/ui/typing-animation';

export const page = () => {

  


  return (
    <div className="bg-slate-950">
        <Navbar />
        <div className="mt-16 mx-10 h-screen">
            <TypingAnimation className="font-mono font-light text-4xl p-4 pt-16 text-left text-white" text="See what I've been working on."/>
            <HoverEffect items={projects}/>
        </div>
    </div>
  )
}

const projects = [
    {
        title: "Birdfeed",
        description:
          "A full-stack web application that allows birdwatchers to get more information on the birds they see in the wild using OpenAi's GPT-4o API.",
        link: "https://github.com/luke-griggs/BirdFeed",
      },
      {
        title: "CampusCards",
        description:
          "This is a web application that I made for parents of college students. It allows them to send their students anonymous messages of encouragement.",
        link: "https://github.com/luke-griggs/campus_cards",
      },
      {
        title: "Connect landing Page",
        description:
          "I designed and coded this landing page for a startup that I'm working with. It's complete with interactive components and creative typography",
        link: "https://connectalum.com",
      },
      {
        title: "Portfolio Site V1",
        description:
          "The very first version of my portfolio site. It was made using Next.js and Tailwind CSS. I think it's safe to say I've come a long way.",
        link: "https://portfolio-nextjs-luke-griggs.vercel.app/",
      },
      {
        title: "Weather App",
        description:
          "This is a basic weather app that I made. It uses the openweathermap API to get the current weather for a given location.",
        link: "https://github.com/luke-griggs/Weather_app",
      },
      {
        title: "Password Generator",
        description:
          "Using python I created a application that generates randomized passwords for users based on their preferences.",
        link: "https://github.com/luke-griggs/PasswordGenerator",
      },
      
]

export default page