// import Carousel from './Carousel';
import SquashText from '../components/SquashText'
import AnimatedSquashText from '../components/AnimatedSquashText'
import AnimatedSVGs from '../components/AnimatedSVGs'

import cv from '../assets/CHAOUADI_SIDAHMED_E_CV.pdf'

const animatedTexts = [{text:"A Game Developer",color:"text-red-600"},{text:"A Web Developer",color:"text-blue-600"},{text:"A 3D Artist",color:"text-green-600"}]

export default function HeroSection() {

  return (
    <section className=" relative  h-[80vh] overflow-hidden "  id="home">

        <div className='absolute left-[5%] top-[40%] sm:top-[25%] sm:left-[2%] font-mono text-white '>
            <SquashText className='my-4 sm:text-7xl text-[2.7rem] font-semibold' text="Hi," />
            <SquashText className='my-4 sm:text-7xl text-[2.7rem] font-semibold' text="I'm Sidahmed," />

            <div className='flex pl-5 gap-4 my-4 sm:text-4xl text-3xl '>
              <AnimatedSquashText  text={animatedTexts}/>
            </div>

          
        </div>

        <a href={cv}
            download className='absolute sm:left-[10%] sm:top-[75%] left-[10%] top-[90%] p-3 px-5 text-neutral-100 bg-neutral-400/10 sm:backdrop-blur-[2px] 
            rounded-md text-xl transition-all min-w-[200px] text-center
           hover:bg-neutral-400/40 ' >
            Resume (.pdf)</a>
        <AnimatedSVGs className = "absolute sm:top-20 sm:right-0 rotate-12  sm:h-[500px] sm:w-[500px] right-0 top-[10%] h-[300px] w-[300px]  "/>

    </section>
  )
}



 
