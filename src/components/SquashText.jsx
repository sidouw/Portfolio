
export default function SquashText({className="",text="",style= {}}) {

  const onMouseHover= (e)=>{
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
          // <span key={ind} className="bg-red-200 cursor-default hover:-translate-y-1 hover:font-semibold hover:scale-x-95 hover:scale-y-110 inline-block Squash-text tracking-wide" >{char}</span>))
          <span onMouseOver={onMouseHover} key={ind} className="hover:text-red-500 cursor-default inline-block Squash-text tracking-wide" >{char}</span>))
        }
    </div>
  )
}
