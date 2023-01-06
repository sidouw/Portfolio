import {useState} from 'react'
import GlowingCard from './GlowingCard'

export default function GlowingCards() {
  
  const [mousePos, setMousePos] = useState([0,0])
  const onMouseGlowMove = (e)=>{
    setMousePos([e.clientX,e.clientY])
  }
  
  return (
    <div id="cards" className="flex flex-1 sm:flex-row flex-col gap-1 justify-center mx-auto  w-full " onMouseMove={onMouseGlowMove}>
        <GlowingCard title='Education' mouseX={mousePos[0]} mouseY={mousePos[1]}>
          
            <EduElem title = "Master degree in Computer Graphics " time="2020 - 2022" 
                    content="From University Of Science And Technology Houari Boumediene (USTHB), Learned about Game theory, Image synthesis, Data visualization, Project management,
                      Network programming, Mobile operating systems, Image and video processing and analysis. "/>

                      
            <div className='h-[1px] w-full my-2 self-center bg-neutral-700'></div>

            <EduElem title = "Bachelor degree in Computer Science " time="2017 - 2020" 
                    content="From University Of Science And Technology Houari Boumediene (USTHB), Learned about Advanced Algorithms and Complexity, Information System, Operating
                    Systems, Object Oriented Programming, Database and Microprocessor Architecture, data
                    structures and design patterns."/>

            <div className='h-[1px] w-full my-2 self-center bg-neutral-700'></div>

            <EduElem title = "High School Degree" time="2016 - 2017" 
                    content="Experimental Sciences High School Degree."/>

        </GlowingCard>

        <GlowingCard title='Experience' mouseX={mousePos[0]} mouseY={mousePos[1]}>
{/*  */}
            <ExpElemn title = "Lead Developer (Graduation internship)" time="2017 - 2020" >
                  At  
                  <a href='https://www.cdta.dz/en/' target="_blank " className='font-semibold text-neutral-100' > Center for Development of Advanced Technologies</a><br/>
                  • Used Unreal engine, C++, blender, git for the development and creation of a distributed and
                  cooperative platform to allow doctors to share a 3D scene in virtual reality to perform a
                  diagnosis, on several devices
                  <br/>
                  • Managed a team of two developers to realize the project in 6 months
            </ExpElemn>

            <div className='h-[1px] w-full my-2 self-center bg-neutral-700'></div>

            <ExpElemn title = "FreeLancer" time="2020 - Present" >
            • Developed several small games ,prototypes, game mechanics, tools for different clients using Unreal engine.
            </ExpElemn>
            <div className='h-[1px] w-full my-2 self-center bg-neutral-700'></div>

            <ExpElemn title = "IT team of OpenMinds Club at USTHB" time="2017 - 2018">
            • informed people about the Open Source alternatives of the software they use. <br/>• Performed installations on their machines of different softwares and linux operating systems.
            </ExpElemn>
        </GlowingCard>

        <GlowingCard title='Skills' mouseX={mousePos[0]} mouseY={mousePos[1]}>
            <SkillElemn title="Desktop">
              C/C++, Python (OpenCV, Pandas, Numpy, Cython, Bs4, Selenium, PyQT) JAVA, Git, SDL, OpenGL, Electron, QT/Qml. 
            </SkillElemn>
            <div className='h-[1px] w-full my-4 self-center bg-neutral-700'></div>
            <SkillElemn title="Web">
              JavaScript(ES6,TypeScript,) React JS, HTML/CSS, NodeJS, MongoDb, SQL, Firebase, Docker
            </SkillElemn>
            <div className='h-[1px] w-full my-4 self-center bg-neutral-700'></div>
            <SkillElemn title="Game Development & 3D Art">
              Unreal engine, Blender, Substance Painter, Substance Designer.
            </SkillElemn>

            <div className='h-[1px] w-full my-4 self-center bg-neutral-700'></div>
            <SkillElemn title="Languages">
              Arabic: Native,<br/> English: Fluent,<br/> French: Test de connaissance du français (TCF) C1.
            </SkillElemn>
        </GlowingCard>

  </div>
  )
}

const EduElem= ({title,time,content})=>(
  <div className='text-neutral-100  '>
      <h2 className=' text-xl mb-2 text-red-500'>{time}</h2>
      <h3 className=' text-base mb-4'>{title}</h3>
      <p className=' text-sm mb-1 text-neutral-300 leading-6'>{content}</p>
  </div>
)

const ExpElemn= ({title,time,children})=>(
  <div className='text-neutral-100  '>
      <h2 className=' text-xl mb-2 text-red-500'>{time}</h2>
      <h3 className=' text-base mb-4'>{title}</h3>
      <p className=' text-sm mb-1 text-neutral-300 leading-6'>{children}</p>
  </div>
)

const SkillElemn= ({title,children})=>(
  <div className='text-neutral-100  '>
      <h2 className=' text-xl mb-2 text-red-500'>{title}</h2>
      <p className=' text-sm mb-1 text-neutral-300 	leading-6'>{children}</p>
  </div>
)