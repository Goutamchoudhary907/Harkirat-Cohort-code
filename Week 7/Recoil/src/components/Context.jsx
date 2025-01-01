import { createContext } from "react";

export const CountContext=createContext({
    // gives default value to count and setcount
    count:0,
     setCount:() => {}
});