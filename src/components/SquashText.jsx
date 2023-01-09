import {useState,useEffect} from 'react'

import useTimeout  from '../hooks/useTimeout'

export default function SquashText({className="",text="",style= {},start=true}) {

  const [hidden,setHidden] = useState(true)
  const [casses,setCasses] = useState('')

const {reset:resetHidden}= useTimeout(()=>setHidden(false),500,false)
const {reset:resetAnim}= useTimeout(()=>setCasses("animated rubberBand"),2500,false)

useEffect(()=>{
    if(start){
    resetHidden()
    resetAnim()
    }
},[start])

  const onMouseHover= (e)=>{
    casses!=="" && setCasses("")
    if(!e.target.classList.contains('animated')){
      e.target.classList.add('animated','rubberBand')
      setTimeout(()=> e.target.classList.remove('animated','rubberBand'),1100)
    }
  }

  return (
    <div className={className} style={style}>
        {
        text.split('').map((char,ind)=>( 
          char==" "? 
          <span key={ind} className = "cursor-default" > </span>  : 
          <span onMouseOver={onMouseHover} key={ind} className={`cursor-default inline-block duration-300 tracking-wide animated-Squash-text ${casses}`}
                                                      style = {{transitionDelay:(ind*(2000/text.split('').length)+"ms"),
                                                                  opacity :hidden ? 0 : 1,
                                                                }} >
            {char}
          </span>))
        }
    </div>
  )
}
