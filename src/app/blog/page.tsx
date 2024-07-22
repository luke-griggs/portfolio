"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import { BoxReveal } from "@/app/components/ui/box_reveal";
import WordPullUp from "../components/ui/word-pullup";

const Page = () => {
  interface Blog {
    title: string;
    content: string;
  }

  const [blog, setSelectedBlog] = useState<Blog | null>(null);

  const blogs: [string, Blog][] = [
    [
      "blog-1",
      {
        title: "The Beauty of Mathematics",
        content:
          "Since the start of my time here at university, the field of mathematics has continuously surprised me each and every time I sit down and work on it. Prior to working with higher level mathematics, I sort of looked at math as this subject where you memorize a bunch of different formulas and learn how to perform different operations. That was all I knew it to be. However I’ve begun to understand that mathematics as a whole tells a sort of story. Each equation, constant, and component plays a role. This, to me, is nothing short of fascinating. ||| As I go back and look at things like how the pythagorean theorem relates to linear algebra and how pi and the measures of circles relate to trigonometry, it is becoming more and more clear just how interwoven math is. It’s astonishing how math forms this giant puzzle and every piece fits together. It’s inspiring to know that progress in math isn’t just handed to us by the universe, people have to push the boundaries of what is known to uncover more pieces to the puzzle. I say it’s inspiring because there is more to discover. There are countless theorems to prove and questions we don’t have the answers to. ||| There are two things that I love most about mathematics. The first is that It’s essentially the language of our universe. It is the basis of how we understand our universe and explains why things do what they do. It’s how we have computers, how we know how fast light travels, and how we’re able to launch rockets into freaking space! The second reason why I love mathematics is the fact that it is indisputable. There are many things in our world that can be argued over but math isn’t one of them. I think having this objective truth is important because it gives us a glimmer of understanding in the vast endless void that is our universe. I think math is beautiful and you should too because it is the most stunning display of human ingenuity.",
      },
    ],
    [
      "blog-2",
      {
        title: "Black Holes",
        content:
          "I’ve recently become extremely fascinated with the existence and properties of black holes. I used to think of them as some sort of science fiction thing where particles and whatnot get sucked into it, however over these past few days I’ve been researching what black holes are and how they work. The things I’ve discovered have been absolutely fascinating. My first discovery was how they work: It starts with the concept of escape velocity. Let’s say you have some planet, we’ll take the earth for example. If you wanted to escape the Earth’s gravitational field, you would have to travel at a speed of roughly 11.2 km/s, which is pretty fast. Now let’s go even larger and look at the sun’s escape velocity. If you wanted to escape the gravitational pull of the sun, you would have to travel around 600 km/s. You might be asking what the hell does this have to do with black holes, but don’t worry I’m getting there. Now escape velocity doesn’t strictly have to do with size, rather it’s about density. So if you had a bunch of mass condensed to a small object, its escape velocity would also be very high. Okay, all you need to know so far is that if you have a really dense object in space, you have to travel really fast to escape its gravitational field. Now what happens if an object is so extremely dense, that the speed you have to travel at to escape its gravitational pull exceeds the speed of light. That is precisely what a black hole is. It is an object in space who’s escape velocity is so high, that not even light can escape. This is where it gets interesting. ||| Let’s say you found yourself inside of a black hole. If you wanted to escape the black hole, you would have to travel faster than the speed of light. Unfortunately for you, physics tells us that nothing with mass can travel faster than the speed of light. Let’s say hypothetically you were some massless particle that could travel faster than the speed of light(this theoretical particle is called a tachyon). Traveling faster than the speed of light comes with some interesting properties; 1. Nothing can accelerate faster than the speed of light, meaning that objects traveling faster than the speed of light have always existed traveling at that speed. 2. The most interesting property of these particles is that things which travel faster than the speed of light exist backwards through time, crazy right? Now, here comes the conclusion you’ve been waiting for. Black holes are objects that have an escape velocity which exceeds the speed of light. So if you wanted to escape a black hole, you would have to travel faster than the speed of light. However traveling faster than the speed of light means going backwards in time. Well wait a second, so that means that in order to escape a black hole you have to have to travel back in time? Yep, the only conceivable way to escape a black hole is by a paradox as profound as the object itself—you escape by never having entered. ||| A side note for those interested. Some may ask well what’s at the center of a black hole? That’s a great question. However,  I’m not quite sure how to tell you this but you phrased your question wrong. It should be “when is the center of a black hole?” The existence of space and time inside a black hole is so obscured that the center of a black hole isn’t a physical location, rather it is a moment in time. ",
      },
    ],
    [
      "blog-3",
      {
        title: "Life and Chess",
        content:
          "In the game of chess, playing too conservatively by only playing the safest moves can be a losing strategy. Eventually, your opponent will gain an advantage and beat you. If you truly want to win a game of chess, it becomes necessary to take risks at some point during the match. You will need to make moves that your opponent doesn't expect, such as sacrificing a piece or not castling even though it seems like the best move. Such moves may not yield immediate benefits, but they contribute to a larger and more complex strategy. I make this point to say that I believe life is quite like the game of chess. ||| If you go through life making only the exact moves that you are expected to by society by conforming to the status quo, You leave yourself no room to gain an advantage from being outside of your comfort zone. To clarify, I'm not saying that you shouldn't play any expected moves. They're actually quite important, because if you strictly play reckless sacrificial moves in chess you will certainly lose. However, I am saying that a good combination of foundational moves combined with unexpected and potentially risky moves could be the key to playing a beautiful game.",
      },
    ],
    [
      "blog-4",
      {
        title: "Education",
        content: `One thing I’ve realized since I’ve started tutoring is that sometimes what a kid needs to understand something is a different perspective. I think one of the main reasons why children lack motivation to put effort into school and learning is because of the combination of difficulty and lack of targeted guidance. It’s sad to think about the amount of people who could achieve far more if someone could just take the time to explain something in a different way. I mean if you think about it the way that school works is you sit down in a class with 25 other students and one teacher. That teacher teaches in a way that is optimal to teach that many people at one time, which is not targeted at all. ||| Now of course there are many group activities and some individualized learning and I’m not discounting the effectiveness of those but what I am saying is that there can be more done. The problem with the 1 to 25 approach is that when a kid gets lost or starts falling behind, it’s frustrating to the point where you lose motivation to learn both inside and outside of school. To elaborate on that, what many people don’t understand is that so much learning is done outside of the classroom, and I’m not even talking about school work. There’s a plethora of things that are interesting and fun to know more about, but because school often causes an association between learning and frustration, many people never get the chance to recognize a curious perspective to learning. To go back to my tutoring experience, when I’m tutoring someone, and there’s a problem that they can’t wrap their head around, just introducing a new way to look at that problem is oftentimes enough for them to figure it out. If we could replicate this at a large scale, I think we would see massive results. 
              `,
      },
    ],
    [
        "blog-5",
        {
          title: "Life's a Spaceship",
          content:"Think of your path to success as a journey to travel as far out and see as much of the universe that you can. In order to do this you’re going to need a spaceship. Everyone’s born in a spaceship that represents their life. Some people are born in a really shitty spaceship that’s slow and needs a lot of repairs(poverty) and others may be born into a glamorous spaceship that’s shiny and has lots of bells and whistles(child of a millionaire). Regardless of what kind of spaceship you’re born into, in order to get as far out and see as much of the universe that you can, you need to do a few things. For starters you need to take care of your ship. This could mean things like exercising everyday or staying away from drugs. It is important that you take care of this ship as it’s the only one you have. Another thing you need to do with your ship is work on it. Improve it by taking time to upgrade the thrusters or adding enhancements to the navigation system. This means taking time to develop new skills, meeting people, or learning things to improve your life’s trajectory. If something goes wrong and you crash land somewhere, it is important that you don’t stay down. Build your spaceship back up, and this time add better features and technology in order to prevent it from happening again. Don’t get distracted by nonsense while on your spaceship because if you do you might forget to make it better or fix repairs. This will hinder you from seeing what’s truly out there in this universe." 
          ,
        },
      ],
      [
        "blog-6",
        {
          title: "I Really Hate gossip",
          content: "I think that there are far too many fascinating concepts and ideas in this world for the majority of one’s discourse with others  to consist of talking badly about someone else. We are such complex entities that spending our time constantly engulfed in the lives and characteristics of others is an incredible waste of time. I personally find it difficult to spend my mental energy doing that simply because of how fascinated I am with the world around me. I think the world might be a better place if we could all learn to do this. I think that more progress would be made.One interesting thing about this concept is the fact that believe it or not, gossiping is an evolutionary trait. It developed because it allowed us to know more about the situation of the environment that we lived in, thus giving us more insight and increasing chances of survival. Unfortunately this innate evolutionary trait has spiraled out of control and is now used to waste the time of billions of people every single day. There do exist other reasons why we engage in such behavior with some of it coming down to emotional welfare. The idea present in our minds  is that if we talk about someone else and bring them down, that will somehow make ourselves feel better. Unfortunately this approach doesn’t work and it leads to a constant spiral of never feeling good enough. This gossiping trait has been burned into the very culture of many groups of people and I think it would be beneficial if we moved away from it and allocated our attention and mental computation toward things that deserve it. "
          ,
        },
      ],
      

  ];

  return (
    <>
      <div
        className={`${
          blog ? "h-auto" : "h-screen"
        } w-full flex-col bg-slate-950`}
      >
        <Navbar />
        <div className="mt-16 h-full flex mx-24 bg-slate-950">
          <div className="text-white w-5/12 p-8 pt-20 font-mono">
            <div className="">
              <BoxReveal>
                <h1 className="text-4xl">Welcome to my Blog!</h1>
              </BoxReveal>
              <BoxReveal>
                <p className="text-sm pt-4 mb-12 text-gray-400">
                  Here you can find all my blogs. Click one to read it!
                </p>
              </BoxReveal>
            </div>
            <div className="flex-col mt-10">
              {(blogs ?? []).map(([id, { title, content }]) => (
                <div className="">
                  <div className="my-6">
                    <a
                      key={id}
                      onClick={() => setSelectedBlog({ title, content })}
                      className={
                        blog?.title === title
                          ? `text-xl text-white`
                          : `text-lg text-cyan-300 duration-300 hover:text-white hover:text-xl cursor-pointer`
                      }
                    >
                      <WordPullUp words={title} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xl text-white w-1/2 p-8 mt-52 pt-9">
            <h1 className="font-mono text-2xl pb-1 text-cyan-300">
              {blog?.title}
            </h1>
            {blog?.content.split("|||").map((paragraph, index) => (
              <p key={index} className="pt-4 text-sm font-normal">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="h-24 bg-slate-950"></div>
      </div>
    </>
  );
};

export default Page;
