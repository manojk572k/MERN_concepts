import { useEffect, useState } from "react"

export default function useDebounced(value, delay){  
  const[debouncedvalue,setDebouncedvalue]=useState("")
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebouncedvalue(value)
    },delay)
    return ()=>{
    clearTimeout(timer)
    }
},[value,delay])
  return debouncedvalue
    
}