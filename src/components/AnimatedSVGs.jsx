import {useEffect, useState } from "react";

import { useSpring,animated} from '@react-spring/web'

import useTimeout from "../hooks/useTimeout";


function useAnimatedPath({ toggle, delay=0,duration =2000}) {

  const [length, setLength] = useState(null);
  
  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
    delay,
    config: {
        // mass: 1,
        // tension: 5,
        duration:duration,
        // easing: easings.steps(5),

      }
  });

  return {
    style: animatedStyle,
    ref: (ref) => {
      if (ref) {
        setLength(ref.getTotalLength());
      }
    }
  };
}



function AnimatedPath({toggle,path,strokeWidth=.1 }) {
  const animatedProps = useAnimatedPath({ toggle, delay: 0 });

  return (
    <animated.path
      stroke="rgb(245 245 245 / 0.7)"
    //   fill="rgb(245 245 245 / 0.02)"
      strokeWidth={strokeWidth}
      d={path}
    {...animatedProps}
    //   style={{ ...animatedProps.style, ...animatedFillStyle }}
    />
  );
}


export default function AnimatedSVGs({className=""}) {


  const [hide, setHide] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const hideSVG = ()=>{
    setHide(true)
    resetTimeout02()
  } 

  const nextSVG = ()=>{
    setActiveIndex(old=>(old+1) % 3)
    // setHide(false)
    resetTimeout03()
    resetTimeout01()
  }

  const {reset:resetTimeout01,clear:clearTimeout01}=useTimeout(hideSVG,1500+3000,false)

  const {reset:resetTimeout02,clear:clearTimeout02}=useTimeout(nextSVG,1500+150,false)
  const {reset:resetTimeout03,clear:clearTimeout03}=useTimeout(()=>setHide(false),150,false)
  const start = ()=>{
    setHide(false)
    resetTimeout01()
  }

  useEffect(()=>{
    start()
  },[])

  return (
    <div className={className}>
      
        <GameSVG toggle={activeIndex == 0 && !hide}/>
        <WebSVG toggle={activeIndex == 1  && !hide}/>
        <ArtSVG toggle={activeIndex == 2  && !hide}/>
    </div>

  );
}

const GameSVG = ({toggle})=>(
<svg
    className="absolute w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 512.368 512.368"
  >


    <AnimatedPath toggle={toggle} 
    strokeWidth={2}
    path="M447.303,128.681c-0.427-1.259-0.875-3.264-1.408-5.525c-3.52-14.315-6.827-27.84-19.904-32.832l-62.08-23.616
    c-12.032-4.565-25.515-2.923-36.139,4.48l-3.84,3.435c-3.115,3.563-7.339,8.021-10.347,10.88H199.197
    c-2.539-2.667-5.931-6.592-8.768-10.112l-4.437-4.16c-10.624-7.424-24.149-9.131-36.117-4.523L87.73,90.324
    c-13.013,4.949-16.277,18.325-19.755,32.512c-0.533,2.155-0.981,4.117-0.811,4.117c0,0,0.021,0,0.043-0.021
    C46.045,168.66-54.606,379.902,39.623,442.26c13.483,8.917,31.424,7.509,43.691-3.456l73.856-66.219
    c6.507-5.845,14.784-9.067,23.275-9.067h152.853c8.491,0,16.747,3.221,23.275,9.067l73.856,66.219
    c6.955,6.229,15.616,9.408,24.277,9.408c6.955,0,13.888-2.069,19.883-6.293C557.746,383.572,482.823,202.494,447.303,128.681z
     M341.469,149.502c11.776,0,21.333,9.557,21.333,21.333c0,11.776-9.557,21.333-21.333,21.333s-21.333-9.557-21.333-21.333
    S329.693,149.502,341.469,149.502z M213.469,256.169h-21.333v21.333c0,11.776-9.536,21.333-21.333,21.333
    s-21.333-9.557-21.333-21.333v-21.333h-21.333c-11.797,0-21.333-9.557-21.333-21.333s9.536-21.333,21.333-21.333h21.333V192.17
    c0-11.776,9.536-21.333,21.333-21.333s21.333,9.557,21.333,21.333v21.333h21.333c11.797,0,21.333,9.557,21.333,21.333
    S225.266,256.169,213.469,256.169z M298.802,234.836c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333
    s21.333,9.557,21.333,21.333S310.578,234.836,298.802,234.836z M341.469,277.502c-11.776,0-21.333-9.557-21.333-21.333
    s9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333S353.245,277.502,341.469,277.502z M384.135,234.836
    c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333S395.911,234.836,384.135,234.836z"        
    />
  </svg>
  )

const WebSVG = ({toggle})=>(
    <svg
    className="w-full h-full absolute"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 -0.08 20 20"
    >
        <AnimatedPath toggle={toggle} 
        strokeWidth={.1}
            path ="M15.69 4.31H4.31A1.61 1.61 0 002.7 5.92v8a1.61 1.61 0 001.61 1.61h11.38a1.61 1.61 0 001.61-1.61v-8a1.61 1.61 0 00-1.61-1.61zm-11.38.61h11.38a1 1 0 011 1v.72H3.31v-.72a1 1 0 011-1zm11.38 10H4.31a1 1 0 01-1-1V7.25h13.38v6.67a1 1 0 01-1 1z"
        />
        <AnimatedPath toggle={toggle}
            strokeWidth={.1} 
            path ="M4.31 6.18A.34.34 0 104 5.85a.34.34 0 00.31.33zM5.16 6.18a.34.34 0 10-.33-.33.34.34 0 00.33.33zM6 6.18a.34.34 0 10-.33-.33.34.34 0 00.33.33zM11 10.19l-.39.88-.4-.88-.07-.07c-.07-.07 0-.06-.08-.08s-.07 0-.11 0a.17.17 0 00-.12 0l-.08.08c-.02.02-.06 0-.08.07l-.39.88-.39-.88a.32.32 0 00-.44-.19.3.3 0 00-.15.4L9 12a.38.38 0 00.14.14h.24a.38.38 0 00.15-.14l.39-.89.4.89a.38.38 0 00.14.14.28.28 0 00.13 0h.12a.38.38 0 00.14-.14l.68-1.51a.31.31 0 00-.16-.4.3.3 0 00-.37.1zM14.42 10.19l-.39.88-.4-.88s-.05 0-.07-.07 0-.06-.08-.08a.17.17 0 00-.12 0h-.11l-.08.08c-.03.03-.06 0-.07.07l-.4.88-.39-.88a.3.3 0 00-.4-.15.3.3 0 00-.16.4l.66 1.56a.38.38 0 00.14.14h.12a.28.28 0 00.13 0A.38.38 0 0013 12l.4-.89.39.89a.38.38 0 00.14.14.31.31 0 00.13 0h.12a.41.41 0 00.15-.14l.67-1.56a.3.3 0 00-.16-.4.3.3 0 00-.42.15zM7.56 10.19l-.39.88-.39-.88a.24.24 0 00-.08-.06.23.23 0 00-.08-.13.17.17 0 00-.12 0h-.11l-.08.08s-.06 0-.07.07l-.4.88-.39-.88A.3.3 0 005 10a.31.31 0 00-.16.4l.71 1.6a.38.38 0 00.14.14h.12a.28.28 0 00.13 0H6a.38.38 0 00.1-.14l.4-.89.39.89a.38.38 0 00.14.14h.24a.38.38 0 00.18-.14l.67-1.51A.3.3 0 008 10a.32.32 0 00-.44.19z"
        /> 
        </svg>
    )

const ArtSVG = ({toggle})=>(
    <svg
    className="w-full h-full absolute"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 265 265"
  >
        <AnimatedPath toggle={toggle} 
            strokeWidth={.8}
            path="M226.407 72.723c-.012-.024-.018-.049-.032-.072-.004-.008-.01-.013-.014-.02a11.993 11.993 0 00-4.478-4.411l-88-49.5a12.071 12.071 0 00-11.766 0l-88 49.5a11.993 11.993 0 00-4.484 4.423l-.02.028c-.014.026-.02.053-.034.08A11.984 11.984 0 0028 78.678v98.642a12.015 12.015 0 006.117 10.46l88 49.5a11.98 11.98 0 005.606 1.513c.085.006.166.027.252.027h.036c.1 0 .195-.022.293-.029a11.984 11.984 0 005.58-1.512l88-49.5A12.015 12.015 0 00228 177.321V78.68a11.99 11.99 0 00-1.593-5.956zM126.04 25.693a4.023 4.023 0 013.922 0l85.911 48.324-86.942 49.394-88.74-49.428zm-88 155.115A4.005 4.005 0 0136 177.32V80.807l88.928 49.532-.868 98.855zm179.922 0l-85.9 48.319.868-98.787L220 80.873v96.448a4.005 4.005 0 01-2.04 3.487z"    
            />
     </svg>
  )

