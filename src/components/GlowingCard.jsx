import {useRef,useEffect} from 'react'


export default function GlowingCard({mouseX=0,mouseY=0,title="",children}) {

    const cardRef = useRef(null)
  useEffect(()=>{
        const rect = cardRef.current.getBoundingClientRect()
        const x = mouseX - rect.left
        const y = mouseY - rect.top

        cardRef.current.style.setProperty("--mouse-x", `${x}px`)
        cardRef.current.style.setProperty("--mouse-y", `${y}px`)
        cardRef.current.style.setProperty("--offset", `${350}%`)

    },[mouseX,mouseY])


  return (
    // sm:h-full h-[550px]
    <div className="card  w-full bg-neutral-800/50"  ref={cardRef}>
      <div className="card-content bg-neutral-900"/>
          <div className='p-2 flex flex-col z-[3] '>
            <h1 className='text-2xl font-semibold text-neutral-100 mb-4' >{title}</h1>
            {children}
          </div>
      {/* </div> */}
    </div>
  )
}


