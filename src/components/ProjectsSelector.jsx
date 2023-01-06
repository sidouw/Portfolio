import {useEffect,useState} from 'react'
import {artProjectsData,webProjectsData,gameProjectsData} from './portfolioData'

export default function ProjectsSelector({onDataChanged}) {

    const [selectedTag,setSelectedTag] = useState("all")
    const [gradColor,setGradColor] = useState("#F5F5F5")
    const [highLightOffset,SethighLightOffset] = useState(2)

    const onDataSelected = ()=>{
        switch (selectedTag) {
            case "all":
                onDataChanged && onDataChanged([...artProjectsData,...gameProjectsData,...webProjectsData],"#F5F5F5")
                SethighLightOffset(2)
                setGradColor("#F5F5F5")
                break;
            case "web":
                onDataChanged &&  onDataChanged([...webProjectsData],"#0ea5e9")
                SethighLightOffset(1)
                setGradColor("#0ea5e9")
                break;
            case "game":
                onDataChanged &&  onDataChanged([...gameProjectsData],"#ef4444")
                SethighLightOffset(0)
                setGradColor("#ef4444")
                break;
            case "3D":
                onDataChanged &&  onDataChanged([...artProjectsData],"#22c55e")
                SethighLightOffset(-1)
                setGradColor("#22c55e")
                break;
            default:
                onDataChanged && onDataChanged([...artProjectsData],"#F5F5F5")
        }
    }

    useEffect(()=>{
        onDataSelected()
        },[selectedTag])

  return (
    <div className='flex relative my-4 justify-center gap-2 '>
        <div className={`absolute h-1 w-[80px] bg-neutral-100 bottom-0 duration-300 transition-all-bounce`} 
            style = {{transform:`translate(${(42-(88*highLightOffset))}px, 0)`,background:`linear-gradient(to right bottom, ${gradColor}, transparent )`}} />
        <button className={`text-lg py-1 px-2 transition-all min-w-[80px] duration-300 ${selectedTag == "all" && "font-semibold"}`} onClick={()=>setSelectedTag("all")}>All</button>
        <button className={`text-lg py-1 px-2 transition-all min-w-[80px] duration-300 ${selectedTag == "web" && "font-semibold text-sky-500"}`} onClick={()=>setSelectedTag("web")}>Web</button>
        <button className={`text-lg py-1 px-2 transition-all min-w-[80px] duration-300 ${selectedTag == "game" && "font-semibold text-red-500"}`} onClick={()=>setSelectedTag("game")}>Game</button>
        <button className={`text-lg py-1 px-2 transition-all min-w-[80px] duration-300 ${selectedTag == "3D" && "font-semibold text-green-500"}`} onClick={()=>setSelectedTag("3D")}>3D Art</button>
    </div>
  )
}
