import { useEffect } from "react";
import { useState } from "react";

export function useDimensions(){
    const [dimensions,setDimensions]=useState({width:window.innerWidth, height:window.innerHeight});

    const handleResize=(e) =>{
      setDimensions({width:window.innerWidth, height:window.innerHeight});  
    };
    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        return () =>{
            window.addEventListener('resize',handleResize);
        };
    },[]);
    return dimensions;
}   