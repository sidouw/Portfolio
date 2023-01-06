import {useState,useEffect} from 'react'


import Header from "../components/Header"
import HeroSection from "../sections/HeroSection"
import PortfolioSection from "../sections/PortfolioSection"
import AboutSection from "../sections/AboutSection"
import ResumeSection from "../sections/ResumeSection"

import Particles from "../components/Particles"

import isMobile from '../components/isMobile'


export default function Home() {


  const [onMobile,setOnMobile] = useState(true)

  useEffect(()=>{
  if (!import.meta.env.SSR) {
    setOnMobile(isMobile())
  }
  },[])



  return (
    <>
      <main className={`${ onMobile ? "bg-neutral-900" : "bg-transparent"}`}>
      {!onMobile && <Particles/>}

        <Header/>
        <div className="max-w-[1200px]  mx-auto">
          <HeroSection/>
          <PortfolioSection    />
          <AboutSection/>
          <ResumeSection/>
        </div>
      </main>
    </>
  )
}
