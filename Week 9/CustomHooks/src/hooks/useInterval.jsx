import { useEffect } from "react";

export function useInterval(fn,timeout){

    useEffect(()=>{
     const interval= setInterval(() =>{
            fn()
        },timeout);
        return()=>{
            clearInterval(interval)
        }
    })
}