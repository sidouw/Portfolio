import {useRef,useEffect} from 'react'
import {a } from '@react-spring/web'


export default function GridCard({mouseX=0,mouseY=0,style={},item}) {

    const cardRef = useRef(null)

  useEffect(()=>{
        const rect = cardRef.current.getBoundingClientRect()
        const x = mouseX - rect.left
        const y = mouseY - rect.top
        cardRef.current.style.setProperty("--mouse-x", `${x}px`)
        cardRef.current.style.setProperty("--mouse-y", `${y}px`)
        cardRef.current.style.setProperty("--offset", `${350}%`)

    },[mouseX,mouseY])

    const txtColor = ()=>{
      switch (item.tag) {
        case "3D Art":
          return "green-500"
          break;
      
        case "Web":
          return "sky-500"
          break;
      
        case "Game":
          return "red-500"
          break;
      
        default:
          break;
      }
    }

    const bgColor= ()=>{
      switch (item.tag) {
        case "3D Art":
          return "rgb(34 197 94 / 0.2)"
          break;
      
        case "Web":
          return "rgb(14 165 233 / 0.2)"
          break;
      
        case "Game":
          return "rgb(239 68 68 / 0.2)"
          break;
      
        default:
          break;
      }
    }

    const cursor = ()=>{
      switch (item.cursor) {
        case "art":
          return "art-cursor"
          break;
      
        case "git":
          return "git-cursor"
          break;
      
        case "itch":
          return "itch-cursor"
          break;
      
        default:
          break;
      }
    }

    const onClicked = ()=>{
      if (!import.meta.env.SSR) {
        window.open(item.link, '_blank').focus();
      }
    }
  return (
    
    <a.div  className={`absolute card will-change-[transform,width,height,opacity] p-1 `} style={{...style,backgroundColor:bgColor()}} ref={cardRef} >
      <div className="card-content bg-neutral-900"/>
      
      <div className = {`relative w-full h-full group overflow-hidden ${cursor()} `} onClick={onClicked}>
        <div className="absolute h-full w-full z-[4] bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-300 group-hover:translate-y-56" />
        <img src={item.image} className = "absolute w-full h-full object-cover z-[3] transition-all duration-300 group-hover:scale-110" />
        <span className="absolute z-[4] bottom-7 left-2 text-xl text-neutral-200 tracking-wide transition-all duration-300 group-hover:-translate-x-80">{item.name}</span>
        <span className={`absolute z-[4] bottom-2 left-3 text-sm font-semibold text-${txtColor()} transition-all duration-300 group-hover:-translate-x-80`}>{item.tag}</span>
      </div>

  </a.div>
  )
}
