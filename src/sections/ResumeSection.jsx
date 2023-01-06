

// import { useInView } from "react-intersection-observer";
import SquashText from '../components/SquashText'
import GlowingCards from '../components/GlowingCards'



export default function ResumeSection() {

  // const [ref,inView,Entry] = useInView({
  //   threshold: 0
  // })
  return (
    <section  className="snap-center pt-5 px-5 min-h-screen text-lg pb-5 flex flex-col sm:pt-20  overflow-auto overflow-x-hidden" id="resume">
        <SquashText className='sm:text-5xl  font-bold text-4xl text-neutral-100   mb-5' text='My Resume' />
        <GlowingCards/>
    </section>
  )
}
