import { createContext, useState } from "react";
export const Rest=createContext({
    inputsearch:'mathura',
    dataget:{},
    WeatheState:""
})

const Add=({children})=>{
    const [inputsearch, setinputsearch]=useState('mathura')
    const [dataget, setdataget]=useState({})
    const [WeatheState, setWeatheState]=useState("")



    const value={inputsearch,setinputsearch,dataget,setdataget,WeatheState,setWeatheState}

   return <Rest.Provider value={value}>{children}</Rest.Provider>

}
export default Add