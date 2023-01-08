import React, { useState, useMemo,useRef,useEffect } from 'react'

import { useTransition, a } from '@react-spring/web'

import useEventListener from '../hooks/useEventListener'
import GridCard from './GridCard'



const ProjectsGrid= ({items=[],gradColor="#F5F5F5"})=>{


    const cardContainerRef = useRef(null)

    const [cardContainerWidth,setCardContainerWidth] = useState(1000)
    const [cardContainerColumns,setCardContainerColumns] = useState(3)

    const [mousePos, setMousePos] = useState([0,0])

    const onMouseGlowMove = (e)=>{
      setMousePos([e.clientX,e.clientY])
    }

    
    if (!import.meta.env.SSR) {
      window && useEventListener("resize",(e)=>{
        cardContainerRef.current && setCardContainerWidth(cardContainerRef.current.clientWidth-5)
        if(window.innerWidth<=550){
            setCardContainerColumns(1)
        }
        else if(window.innerWidth<900){
            setCardContainerColumns(2)
        }
        else if(window.innerWidth<1100){
            setCardContainerColumns(3)
        }else{
            setCardContainerColumns(3)
        }
      })
    }
    
    useEffect(()=>{
      if (!import.meta.env.SSR) {
        cardContainerRef.current && setCardContainerWidth(cardContainerRef.current.clientWidth-10)
        if(window.innerWidth<=550){
          setCardContainerColumns(1)
        }
        else if(window.innerWidth<900){
            setCardContainerColumns(2)
        }
        else if(window.innerWidth<1100){
            setCardContainerColumns(3)
        }else{
            setCardContainerColumns(3)
        }
        
      }
    },[])

    

      const gridItems = useMemo(() => {
        const  gap = 5
        const customHeight  = 240
        
        let heights = new Array(cardContainerColumns).fill(customHeight) // Each column gets a height starting with zero
    
        let gridItems = items.map((child, i) => {
    
          const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    
          const x = ((cardContainerWidth / cardContainerColumns) * column) + (gap) // x = container width / number of columns * column index,
    
          heights[column] = heights[column] +  customHeight
    
          const y = (heights[column] - (customHeight*2)) + (gap)
    
          return { ...child, x, y, width: (cardContainerWidth / cardContainerColumns) -(gap), height: customHeight - (gap) }
    
        })
        
        return gridItems
    
      }, [cardContainerColumns, items, cardContainerWidth])

 const transitions = useTransition(gridItems, {
    key: (item) => item.name,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

return(
    <>
    <div ref={cardContainerRef} id="cards" onMouseMove={onMouseGlowMove} className={` transition-all relative flex-1 w-full h-full overflow-y-auto overflow-x-hidden border-2 
                                                                                      sm:backdrop-blur-[3px] shadow-md `} 
                                            style={{ height: 520,borderImageSlice:1,
                                            borderImageSource:`linear-gradient(to right bottom, ${gradColor}, transparent, transparent )`}}>
      
      {transitions((style, item) => (
          <GridCard item={item} mouseX={mousePos[0]} mouseY= {mousePos[1]} style={style}/>
      ))}
    </div>
    </>
)
}


export default ProjectsGrid