import { useEffect } from "react";
import { useState } from "react";

export function useMousePoiner(){
    const [position,setposition]=useState({x:0,y:0});

    const handleMouseMove=(e) =>{
      setposition({x:e.clientX, y:e.clientY});  
    };
    useEffect(()=>{
        window.addEventListener('mousemove',handleMouseMove);
        return () =>{
            window.addEventListener('mousemove',handleMouseMove);
        };
    },[]);
    return position;
}