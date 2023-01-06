import { useState,useEffect} from 'react'
// import { useInView } from "react-intersection-observer";
import SquashText from '../components/SquashText'
// import AnimatedSquashText from './AnimatedSquashText'
import ProjectsGrid from '../components/ProjectsGrid'
import ProjectsSelector from '../components/ProjectsSelector'

export default function PortfolioSection() {

  // const [visible,setVisible] = useState(false)
  // const [ref,inView,Entry] = useInView({
  //   threshold: .5
  // })

  // useEffect(()=>{
  //   setVisible(visible||inView)
  // },[inView])

  const [items, set] = useState([])
  const [gradColor,setGradColor] = useState("#F5F5F5")


  return (
    <section  className="snap-center text-lg  h-screen  flex flex-col pt-7 sm:pt-20 pb-5 text-neutral-100 px-5  " id="portfolio">

        <div className=' leading-7  overflow-hidden'>
          
          <SquashText className={`sm:text-5xl font-bold text-4xl duration-300 sm:mb-5 mb-2 z-10`} style={{color:`${gradColor}`}} text='My Portfolio' />
          {/* <AnimatedSquashText className={`sm:text-5xl font-bold text-4xl sm:mb-5 mb-2 z-10`}  text={[{text:"My Portfolio",color:"text-red-600"}]} start={visible} /> */}
            <h2 className={`pl-4  sm:text-xl text-lg z-10 text-neutral-100 duration-700 transition-all `}>
              Some projects i made during  the past couple of years
            </h2>
      </div>
      <ProjectsSelector onDataChanged={(d,g)=>{set(d);setGradColor(g)}}/>
      <ProjectsGrid items={items} gradColor={gradColor}/>
        {/* <GlowingCards/> */}
    </section>
  )
}
