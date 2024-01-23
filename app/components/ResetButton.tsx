'use client'

import { useState, useEffect } from "react";


export default function ResetButton() {

    const[count, setCount] = useState(0)
    const[showReset, Reset] = useState(true)
    const[buttonSize, setSize] = useState(72)
    
    
   
    return (
       
    <div className = 'absolute inset-x-1/2 inset-y-1/2'>
        <div className = 'flex absolute w-32 h-24 bg-slate-700 text-white items-center text-center justify-center -inset-y-72 -inset-x-6'>Number of Trials: {count}</div>
        <button onClick = {() => Reset(false)} className = {showReset == true ? 'absolute w-16 h-16 border-2 border-red-400 bg-blue-400 justify-center text-center items-center':'hidden' }>Hello</button>
        <button onClick = {() => {setCount(count + 1); Reset(true); setSize(80)}} className = {showReset == false && buttonSize == 72 ? 'relative w-16 h-16 border-2 border-green-600 bg-red-400 right-72' : 'hidden'}>World</button>
        <button onClick = {() => {setCount(count + 1); Reset(true); setSize(72)}} className = {showReset == false && buttonSize == 80 ? 'relative w-16 h-16 border-2 border-green-600 bg-red-400 -right-80' : 'hidden'}>World</button>
    </div>
   
      
    );
    }