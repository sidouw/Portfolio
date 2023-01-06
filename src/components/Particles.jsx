import React from "react"
import Particles from "react-tsparticles"
import {loadSlim} from "tsparticles-slim"

import gameSVG from "../assets/icons/Game.svg"
import webSVG from "../assets/icons/Web.svg"
import artSVG from "../assets/icons/Art.svg"


export default function BGParticles() {

    if (!import.meta.env.SSR) {

    const particlesInit = async (main) => {
        await loadSlim(main);
      }
      return (
        <Particles
          id="tsparticles"
          init={particlesInit}
    
          options={{
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: false,
                        value_area: 2000
                    }
                },
                collisions:{
                    enable:true
                },
                color: {
                    value: "#FFF"
                },
                shape: {
                    type: "image",
                    options: 
                            {
                                images:[
                                    {
                                        src:	gameSVG,
                                        width	:	32,
                                        height	:	32,
                                    },
                                    {
                                        src:	webSVG,
                                        width	:	32,
                                        height	:	32,
                                    },
                                    {
                                        src:	artSVG,
                                        width	:	32,
                                        height	:	32,
                                    },
                                ]
                            }
                        
                    
                },
                opacity: {
                    value: 0.05,
                },
                size: {
                    value: 10,
                },
                rotate: {
                    value: 0,
                    random: true,
                    direction: "clockwise",
                    animation: {
                        enable: true,
                        speed: 5,
                        sync: false
                    }
                },
                move: {
                    enable: true,
                    speed: .5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            retina_detect: true,
            background: {
                color: "#171717",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover"
            }
        }
    }
        />
      );
    }else{
        return<>
        </>
    }


}
