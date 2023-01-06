import { useEffect, useRef } from 'react'
// import { useInView } from "react-intersection-observer";
import TagCloud from 'TagCloud'

import SquashText from '../components/SquashText'
import useEventListener from '../hooks/useEventListener'

const CLOUDTEXTS =["JavaScript","ES6","TypeScript","React JS","HTML/CSS","Node JS",
                    "MongoDb","MYSQL","Firebase","Docker","Tailwind Css","Material UI","Electron","ANTD","Git","Socket.io",
                    "Unreal Engine","Blender","Substance Painter","Substance Designer",
                    "C/C++","Python","OpenCV","Pandas","Numpy","Cython","Selenium","Bs4",
                  ]

export default function AboutSection() {

  // const [ref,inView,Entry] = useInView({
  //   threshold: 0
  // })

  const cloudRef = useRef(undefined)

  useEffect(()=>{
    if(!cloudRef.current)
      if (!import.meta.env.SSR) {
          if(window.innerWidth<500){
              cloudRef.current = TagCloud("#cloud",CLOUDTEXTS,{radius:180,keep:true})
          }
          else if(window.innerWidth<1100){
              cloudRef.current = TagCloud("#cloud",CLOUDTEXTS,{radius:200,keep:true})
          }else{
              cloudRef.current = TagCloud("#cloud",CLOUDTEXTS,{radius:300,keep:true})
          }   
      } 
  },[])

  if (!import.meta.env.SSR) {
    window && useEventListener("resize",(e)=>{
      if(window.innerWidth<500){
        if(!cloudRef.current || cloudRef.current.config.radius==180) return
        cloudRef.current.destroy()
        cloudRef.current = TagCloud("#cloud",CLOUDTEXTS,{radius:180,keep:true})
      }
      else if(window.innerWidth<1100){
        if(!cloudRef.current || cloudRef.current.config.radius==200) return
        cloudRef.current.destroy()
        cloudRef.current = TagCloud("#cloud",CLOUDTEXTS,{radius:200,keep:true})
      }else{
        if(!cloudRef.current || cloudRef.current.config.radius==300) return
        cloudRef.current.destroy()
        cloudRef.current = TagCloud("#cloud",CLOUDTEXTS,{radius:300,keep:true})
      }
    }) 
  }  

  return (
    <section  className="snap-center text-md min-h-screen flex sm:pt-20 sm:flex-row flex-col-reverse  overflow-hidden " id="about">

        <div className='h-full min-w-[50%] px-5 leading-7 '>

            <SquashText className='sm:text-5xl font-bold text-4xl text-neutral-100  sm:mb-10 mb-8' text='Me, Myself and I' />

            <p className='text-neutral-100 ' >
              As a multi-talented individual with experience in game development, web development, 3D art and programming, 
              I have a diverse skillset and a strong passion for creating engaging and immersive experiences.
            </p>

            <p className='text-neutral-100 my-5' >
              <b>As an Unreal Engine game developer</b> with five years of experience, I have developed several game prototypes, becoming proficient in various aspects of game development including design, programming, and profiling. 
              {/* In addition, I have worked as a freelancer for the past three years, gaining valuable experience working with a variety of clients. */}
             </p>

            <p className='text-neutral-100 my-5' >
              <b>As a full stack web developer</b> with three years of experience using React and Node.js, I am skilled in creating dynamic and responsive web applications. 
              {/* I have also worked as a freelancer for the past year, gaining valuable experience on a range of projects. */}
            </p>

            <p className='text-neutral-100 my-5' >
              <b>As a 3D artist</b> with five years of experience using Blender, Substance Painter, and Substance Designer, I have developed a strong foundation in 3D modeling, texturing, and material creation.
              {/* I have worked on a variety of projects, including creating scenes and props for both environments and games. */}
            </p>

            <p className='text-neutral-100 my-5' >
              <b>As a student</b> with five years of experience in university, I have gained a wide range of skills in various programming languages and technologies. 
              During my studies, I have used C and C++ to create several project assignments, including a puzzle game with SDL and an OpenGL renderer.
              
            </p>

            <p className='text-neutral-100 my-5' >
              I have also utilized Python to create web scrapers, automate tasks, and perform image processing with libraries such as OpenCV, Numpy, Selenium, and Beautiful Soup.
              In addition, I have experience creating desktop applications with PyQt.
            </p>

            <p className='text-neutral-100 my-5' >
              Overall, I am a dedicated and highly skilled individual with a strong passion for creating innovative and immersive experiences. 
              I am always looking for new challenges and opportunities to grow and improve in my field.
            </p>


            <div  className=' h-full  text-neutral-100 sm:hidden block mb-5'>
              <SquashText className='sm:text-3xl font-bold text-3xl text-neutral-100 flex-grow flex-1 h-full sm:mb-2 mb-4 ' text='Find Me At' />
              <div className='flex flex-wrap gap-5 px-2'>
                <a className='text-lg border-b border-blue-500 text-blue-500 font-semibold' target='_blank' href=' http://linkedin.com/in/sidahmed-chaouadi' > LinkedIn</a>
                <a className='text-lg border-b border-sky-500 text-sky-500 font-semibold' target='_blank' href=' https://sidou.artstation.com' > Artstation</a>
                <a className='text-lg border-b border-red-600 text-red-600 font-semibold' target='_blank' href=' http://youtube.com/@sidouw' >Youtube </a>
                <a className='text-lg border-b border-neutral-500 text-neutral-500 font-semibold' target='_blank' href=' https://github.com/sidouw' > Githhub</a>
                <a className='text-lg border-b border-red-500 text-red-500 font-semibold' target='_blank' href=' mailto:chaouadi.sidahmed@gmail.com' >Gmail </a>
              </div>
            </div>

        </div>
      <div className='h-full min-w-[50%]'>

        <div className='font-normal lg:font-semibold flex justify-center sm:items-start items-center text-neutral-100 ' id="cloud"></div>

        <div  className=' h-full px-5 text-neutral-100 sm:block hidden mb-5'>
          <SquashText className='sm:text-3xl font-bold text-3xl text-neutral-100 flex-grow flex-1 h-full sm:mb-2 mb-4 ' text='Find Me At' />
          <div className='flex flex-wrap gap-5 px-2'>
            <a className='text-lg border-b border-blue-500 text-blue-500 font-semibold' target='_blank' href=' http://linkedin.com/in/sidahmed-chaouadi' > LinkedIn</a>
            <a className='text-lg border-b border-sky-500 text-sky-500 font-semibold' target='_blank' href=' https://sidou.artstation.com' > Artstation</a>
            <a className='text-lg border-b border-red-600 text-red-600 font-semibold' target='_blank' href=' http://youtube.com/@sidouw' >Youtube </a>
            <a className='text-lg border-b border-neutral-500 text-neutral-500 font-semibold' target='_blank' href=' https://github.com/sidouw' > Githhub</a>
            <a className='text-lg border-b border-red-500 text-red-500 font-semibold' target='_blank' href=' mailto:chaouadi.sidahmed@gmail.com' >Gmail </a>
          </div>
        </div>

      </div>
      
    </section>
  )
}
