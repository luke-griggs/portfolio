import React from 'react'
import Navbar from '../components/navbar'
import { BackgroundBeams } from '../components/ui/contact'

const page = () => {
  return (
    <div className="flex h-screen w-full justify-center bg-slate-950">
        <Navbar />        
        <img src="/resume.png" alt="" className="mt-14 pt-1 z-10"/>
        <BackgroundBeams />

    </div>
  )
}

export default page