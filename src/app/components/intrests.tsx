import React from "react";
import { BiMath } from "react-icons/bi";
import {
  GiGuitarBassHead,
  GiWeightLiftingUp,
  GiFishingPole,
} from "react-icons/gi";
import { TbChess } from "react-icons/tb";

const Intrests = () => {
  return (
    <div className="w-full text-2xl pt-20 border-t-2 border-cyan-300">
      <div className="w-full bg-slate-950">
        <div className="flex mx-40 font-mono pt-10">
          <div className="flex-1">
            <div>
              <h1 className="text-7xl pb-8 text-cyan-400">Interests</h1>
              <p className="max-w-md text-gray-300 pl-1">
                These are some things that I greatly enjoy doing in my free
                time.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <ul className="flex-col">
              <li className="pb-16">
                <div className="flex">
                  <div className="flex-1">
                    <a
                      href="https://www.chess.com/member/chessmonkey2005"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbChess className="h-20 w-20 mt-2 hover:-rotate-12" />
                    </a>
                  </div>
                  <div className="flex-2">
                    <h1 className="text-xl pb-2 text-cyan-400">Chess</h1>
                    <p className="text-sm max-w-md text-gray-300">
                      I&apos;ve been playing chess since I was 10. It&apos;s one of my
                      favorite things to do. Click the pawn to add me on
                      chess.com!
                    </p>
                  </div>
                </div>
              </li>
              <li className="pb-16">
                <div className="flex">
                  <div className="flex-1">
                    <GiGuitarBassHead className="h-20 w-20" />
                  </div>
                  <div className="flex-2">
                    <h1 className="text-xl pb-2 text-cyan-400">Guitar</h1>
                    <p className="text-sm max-w-md text-gray-300">
                      Currently I&apos;m an absolute noob at guitar. I&apos;ve been
                      playing for about a month now. I&apos;m learning to play the
                      electric guitar.
                    </p>
                  </div>
                </div>
              </li>
              <li className="pb-16">
                <div className="flex">
                  <div className="flex-1">
                    <BiMath className="h-20 w-20" />
                  </div>
                  <div className="flex-2">
                    <h1 className="text-xl pb-2 text-cyan-400">Math</h1>
                    <p className="text-sm max-w-md text-gray-300">
                      I&apos;m a huge fan of mathematics. A nice proof is enough to
                      keep me intrigued for hours. I&apos;m currently studying linear
                      algebra. I also own a tutoring business.
                    </p>
                  </div>
                </div>
              </li>
              <li className="pb-16">
                <div className="flex">
                  <div className="flex-1">
                    <GiWeightLiftingUp className="h-20 w-20" />
                  </div>
                  <div className="flex-2">
                    <h1 className="text-xl pb-2 text-cyan-400">Lifting</h1>
                    <p className="text-sm max-w-md text-gray-300">
                      I played baseball all throughout high school and I&apos;ve been
                      lifting ever since. I&apos;m a former member of the 1000lb club
                      but I&apos;ll be back soon!
                    </p>
                  </div>
                </div>
              </li>
              <li className="pb-16">
                <div className="flex">
                  <div className="flex-1">
                    <GiFishingPole className="h-20 w-20" />
                  </div>
                  <div className="flex-2">
                    <h1 className="text-xl pb-2 text-cyan-400">Fishing</h1>
                    <p className="text-sm max-w-md text-gray-300">
                      Unfortunately I don&apos;t get to do this one often anymore, so
                      when I get the opportunity I take it. I like to listen to
                      music while I fish.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intrests;
