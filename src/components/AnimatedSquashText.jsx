import {useState,useEffect} from 'react'
import useInterval from "../hooks/useInterval"
import useTimeout from '../hooks/useTimeout'


export default function AnimatedSquashText({className="",text=[{}],textDisplaySpeed=1500,timePerText=3000,start=true}) {

  const [state,setState] = useState(-1)
  const [hidden,sethidden] = useState(true)
  
  const [currentTextIndex,setCurrentTextIndex] = useState(0)

  const [charArray,setCharArray] = useState(text[currentTextIndex].text.split(''))
  
  const nextText = ()=>{
    if(state == 0){
      setState(old=>(old+1)%3)
      resetTimeout01()
    }else if(state==1){
      if(text.length>1){
        setState(old=>(old+1)%3)
        resetTimeout02()
      }

    }else if(state==2){
      setState(old=>(old+1)%3)
      sethidden(true)
    }
  }

  const toggleHidden = ()=>{
    sethidden(!hidden)
    resetTimeout03()
  }

  const startAnimtaion = ()=>{
    if( state == -1){
      setState(0)
    }
      
    if(hidden && state!=-1){
      setCurrentTextIndex(old=>(old+1)%text.length)
      setCharArray(text[(currentTextIndex+1)%text.length].text.split(''))
      resetHiddenTimeout()
    }
  }

  useEffect(()=>{
    if (start) {
      startAnimtaion()
    }

  },[hidden])

  useEffect(()=>{
    if (start) {
      toggleHidden()
    }

  },[start])



  const {reset:resetTimeout01,clear:clearTimeout01}=useTimeout(nextText,textDisplaySpeed+timePerText,false)
  const {reset:resetTimeout02,clear:clearTimeout02}=useTimeout(nextText,textDisplaySpeed,false)
  const {reset:resetTimeout03,clear:clearTimeout03}=useTimeout(nextText,150,false)

  const {reset:resetHiddenTimeout,clear:clearHiddenTimeout}=useTimeout(toggleHidden,15,start)



  const onMouseHover= (e)=>{
    if(text.length>1) return
    if(!e.target.classList.contains('animated')){
      e.target.classList.add('animated','rubberBand')

      setTimeout(()=> e.target.classList.remove('animated','rubberBand'),1100)
    }
  }

  const scaleAnim = ()=>{
    switch (state) {
      case 0:
        return "scale-0 opacity-0" 
      case 1:
        return "scale-100 opacity-100" 
      case 2:
        return  "scale-0 opacity-0" 
    
      default:
        return "scale-0 opacity-0" 
        break;
    }
  }

  const translateAnim = ()=>{
    switch (state) {
      case 0:
        return "-translate-y-10 opacity-0" 
      case 1:
        return "-translate-y-0 opacity-100" 
      case 2:
        return  "translate-y-10 opacity-0" 
    
      default:
        return "-translate-y-10 opacity-0" 
        break;
    }
  }

  return (
    <div className={`${className} ${hidden ?"hidden": "block"} sm:min-h-[48px] min-h-[40px]`}>
        {
          charArray.map((char,ind)=>( 
          char==" "? 
            <span key={ind} className="cursor-default" > </span>  : 
            
            <span key={ind} onMouseOver={onMouseHover} className={`transition-all-bounce duration-200 delay-500  inline-block ${scaleAnim()} 
                                           squashy-latter-anim tracking-wide cursor-default`} 
                                          style = {{transitionDelay:(ind*(textDisplaySpeed/charArray.length)+"ms")}}
                                          >
                {char}
            </span>

            )
            
            )
        }
    </div>
  )
}
// className={`${ind<=currentVisibleIndex? 
//   'opacity-100' :
//    `${text[(currentTextIndex+text.length-1)%text.length].color} opacity-0 -translate-y-4 rotate-[20deg] scale-x-75 scale-y-150` }
//   inline-block squashy-latter-anim tracking-wide cursor-default`
// }