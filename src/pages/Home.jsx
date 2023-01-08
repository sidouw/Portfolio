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
      <main className={`overflow-hidden ${ onMobile ? "bg-neutral-900" : "bg-transparent"}`}>
      {!onMobile && <Particles/>}
        <Cover/>
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


const Cover = ()=>{

  const [hide,setHide] = useState(false)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setHide(true)
    },500)
    return ()=>{
      clearTimeout(timer)
    }
  },[])
  
  return(
    <div 
      style={{
        position :"fixed",
        top:'-100%',
        left:'-25%',
        transitionProperty :"all",
        transitionTimingFunction :"cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration:'500ms',
        height :"300vh",
        width:"150vw",
        zIndex :'99999',
        backgroundColor :"rgb(38 38 38 )",
        opacity :hide ? '0' :'1',
        pointerEvents :hide ? 'none' :'auto',

      }} 
    >
    </div>
  )
}
