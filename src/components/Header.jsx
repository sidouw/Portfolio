import { useState } from 'react'

import useEventListener from '../hooks/useEventListener'
import ArtstationSVG from '../icons/ArtstationSVG'
import GithubSVG from '../icons/GithubSVG'
import LinkedInSVG from '../icons/LinkedInSVG'
import YoutubeSVG from '../icons/YoutubeSVG'

export default function Header() {

  const [onTop,setOnTop]=useState(false)
  const [isOpen,setIsOpen]=useState(false)
  
  if (!import.meta.env.SSR) {
    window && useEventListener("scroll",(e)=>{
      if(window.innerWidth>700) 
        if (window.scrollY>100 && onTop) {
            setOnTop(false)
            setIsOpen(true)

        }else if(window.scrollY<=70 && !onTop){
            setOnTop(true)
            setIsOpen(false)
        }
    })
  }

  return (
    <header className={`transition-all flex h-screen sm:w-screen sm:h-auto flex-col-reverse justify-end items-center 
                        sm:items-center sm:flex-row sm:fixed fixed  top-0  right-0 z-20  py-5 sm:py-3 text-neutral-100 duration-300 
                         ${isOpen ? "bg-neutral-900/80 px-16 sm:px-0 sm:delay-[500ms] delay-[200ms] shadow-md backdrop-blur-sm" : 
                                    "bg-transparent pointer-events-none  px-0 sm:delay-[500ms] delay-[750ms] backdrop-blur-none"}`} >

        <DesktopNav isOpen={isOpen}/>
        <MobileNav isOpen={isOpen}/>

        <a  onClick={()=>setIsOpen(!isOpen)} className={`hamburger hamburger--elastic sm:mr-10 ${isOpen&& "is-active"} pointer-events-auto`}>
                <div className="hamburger-box">
                  <div className="hamburger-inner bg-neutral-100 after:bg-neutral-100 before:bg-neutral-100"></div>
                </div>
        </a>

    </header>
  )
}



const DesktopNav = ({isOpen})=>(

<>
  <div className='hidden sm:flex justify-center gap-4  ml-10 mr-auto '>
    
    <a title='Linkedin' href='http://linkedin.com/in/sidahmed-chaouadi' target='blank' className={` transition-all-bounce duration-300 delay-[800ms]  ${isOpen? "-translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} `}>
      <LinkedInSVG  className='h-5 w-5 fill-neutral-100 hover:fill-blue-500'/>
    </a>

    <a title='Artstation' href='https://sidou.artstation.com/' target='blank ' className={`transition-all-bounce duration-300 delay-[700ms]  ${isOpen? "-translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} `}>
      <ArtstationSVG className='h-5 w-5 fill-neutral-100 hover:fill-sky-500' />
    </a>

    <a title='Youtube' href='http://youtube.com/@sidouw' target='blank' className={`transition-all-bounce duration-300 delay-[600ms]  ${isOpen? "-translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} `}>
      <YoutubeSVG className='h-5 w-5 fill-neutral-100 hover:fill-red-500'/>
    </a>

    <a title='Github' href='https://github.com/sidouw' target='blank' className={`transition-all-bounce duration-300 delay-[500ms]  ${isOpen? "-translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} `}>
      <GithubSVG className='h-5 w-5 fill-neutral-100 hover:fill-neutral-500'/>
    </a>

  </div>

  <div className='hidden sm:flex justify-center gap-8 font-semibold mr-10'>

    <a className={`transition-all-bounce duration-300 delay-[400ms]  ${isOpen? "-translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} 
                    relative p-2 after:absolute after:block after:h-1 after:w-[0] after:bg-neutral-400/50 after:left-[-0.0rem] after:bottom-[-.2rem] 
                    after:transition-all hover:after:w-[100%]`} href="#home">
      Home
    </a>


    <a  className={`transition-all-bounce duration-300 delay-[200ms]  ${isOpen? "-translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} 
                    relative p-2 after:absolute after:block after:h-1 after:w-[0] after:bg-blue-600/50 after:left-[-0.0rem] after:bottom-[-.2rem] 
                    after:transition-all hover:after:w-[100%]`} href="#portfolio">
      Portfolio
    </a>

    <a  className={`transition-all-bounce duration-300 delay-[300ms]  ${isOpen? "-translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} 
                    relative p-2 after:absolute after:block after:h-1 after:w-[0] after:bg-red-600/50 after:left-[-0.0rem] after:bottom-[-.2rem] 
                    after:transition-all hover:after:w-[100%]`} href="#about">
      About
    </a>

    <a  className={`transition-all-bounce duration-300 delay-[100ms]  ${isOpen? "-translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} 
                    relative p-2 after:absolute after:block after:h-1 after:w-[0] after:bg-green-600/50 after:left-[-0.0rem] after:bottom-[-.2rem] 
                    after:transition-all hover:after:w-[100%]`} href="#resume">
      Resume
    </a>  

  </div> 
</>
)


const MobileNav = ({isOpen})=>(

<>
  <div className='flex sm:hidden flex-col-reverse justify-center gap-8 text-xl mt-6'>
    
    <a title='Linkedin' href='http://linkedin.com/in/sidahmed-chaouadi' target='blank' className={`transition-all-bounce duration-300 delay-[800ms]  ${isOpen? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"} `}>
      <LinkedInSVG  className='h-8 w-8 fill-neutral-100 hover:fill-blue-500'/>
    </a>

    <a title='Artstation' href='https://sidou.artstation.com/' target='blank ' className={`transition-all-bounce duration-300 delay-[700ms]  ${isOpen? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"} `}>
      <ArtstationSVG className='h-8 w-8 fill-neutral-100 hover:fill-sky-500' />
    </a>

    <a title='Youtube' href='http://youtube.com/@sidouw' target='blank' className={`transition-all-bounce duration-300 delay-[600ms]  ${isOpen? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"} `}>
      <YoutubeSVG className='h-8 w-8 fill-neutral-100 hover:fill-red-500'/>
    </a>

    <a title='Github' href='https://github.com/sidouw' target='blank' className={`transition-all-bounce duration-300 delay-[500ms]  ${isOpen? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"} `}>
      <GithubSVG className='h-8 w-8 fill-neutral-100 hover:fill-neutral-500'/>
    </a>

  </div>

  <div className='flex sm:hidden  flex-col justify-center items-center gap-8 font-semibold mt-6 text-xl'>

    <a className={`transition-all-bounce duration-300 delay-[100ms]  ${isOpen? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"} 
                    relative p-2 after:absolute after:block after:h-1 after:w-[0] after:bg-neutral-400/50 after:left-[-0.0rem] after:bottom-[-.2rem] 
                    after:transition-all hover:after:w-[100%]`} href="#home">
      Home
    </a>

    <a  className={`transition-all-bounce duration-300 delay-[300ms]  ${isOpen? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"} 
                    relative p-2 after:absolute after:block after:h-1 after:w-[0] after:bg-blue-600/50 after:left-[-0.0rem] after:bottom-[-.2rem] 
                    after:transition-all hover:after:w-[100%]`} href="#portfolio">
      Portfolio
    </a>

    <a  className={`transition-all-bounce duration-300 delay-[200ms]  ${isOpen? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"} 
                    relative p-2 after:absolute after:block after:h-1 after:w-[0] after:bg-red-600/50 after:left-[-0.0rem] after:bottom-[-.2rem] 
                    after:transition-all hover:after:w-[100%]`} href="#about">
      About
    </a>

    <a  className={`transition-all-bounce duration-300 delay-[400ms]  ${isOpen? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"} 
                    relative p-2 after:absolute after:block after:h-1 after:w-[0] after:bg-green-600/50 after:left-[-0.0rem] after:bottom-[-.2rem] 
                    after:transition-all hover:after:w-[100%]`} href="#resume">
      Resume
    </a>  

  </div> 
</>
)