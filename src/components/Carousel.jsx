import {useState} from 'react'
import useInterval from './useInterval'

import im1 from "../assets/01.jpg"
import im2 from "../assets/02.jpg"
import im3 from "../assets/03.png"
import im4 from "../assets/04.png"
import im5 from "../assets/05.png"
import im6 from "../assets/06.png"
import im7 from "../assets/07.png"
import im8 from "../assets/08.png"


// const imagess = [im2,im3,im4,im5,im6,im7,im8]
const imagess = [im2,im3,im4]

 const  Carousel = ({images=imagess,onSlideChange,duration=800,slideWaitDuration=3000})=> {

    useInterval(()=>nextSlide(),slideWaitDuration)
    const [currentIndex,setCurrentIndex] = useState(1)

    const nextSlide = ()=>{
        const nextIndex = ((currentIndex+1)%(images.length+1)) == 0 ? 1 : ((currentIndex+1)%(images.length+1))
        setCurrentIndex(nextIndex)
        onSlideChange && onSlideChange(nextIndex)
    }

  return (
    <div className="h-full w-full">
        
        <div className="relative h-full w-full overflow-hidden ">
            {/* <button onClick={nextSlide} className='absolute right-[50%] top-[70%] z-10 text-white font-mono border py-2 px-5 ' >Click</button> */}
            {
                images.map((im,index)=>{
                    const ind = index == 0 ? images.length:index
                    let offset = currentIndex - ind
                    if(index == 0 && offset == -(images.length-1)) offset = 1
                    return (
                    <img key={index}
                         className={`absolute  h-full w-full object-cover`} src={im} 
                         style={{
                            transitionDuration:(offset == 0 || offset == 1 || index == 0) ? `${duration}ms` : undefined,
                            transform: `translateX(${ (((offset)>1) ? -1 :(offset)) * -100 }%)`,
                        }}
                         />
                )}
                )
            }
        </div>

        <div className="absolute right-0 left-0 bottom-0 top-0 backdrop-blur-[8px] bg-black/60 " ></div>
        
    </div>
  )
}

export default Carousel