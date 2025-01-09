import { useState,useEffect } from "react";

export function useDebounce(value,timeout){
   const [debouceValue,setDebounceValue]=useState(value);

  useEffect(()=>{
   let timeoutNumber= setTimeout(() => {
     setDebounceValue(value);   
    }, timeout);
    return ()=>{
        clearTimeout(timeoutNumber);
    }
  },[value])
  return debouceValue;
}