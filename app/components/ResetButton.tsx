'use client'

import { useState, useEffect } from "react";



export default function ResetButton() {

    const[count, setCount] = useState(0)
    const[showReset, Reset] = useState(true)
   // What up
   
    //                                     Left Side                            Right Side
    const buttonNames = ['relative w-16 h-16 bg-red-500 right-96 top-1/2', 'relative w-16 h-16 bg-red-500 -right-96 top-1/2', 
                         'relative w-32 h-32 bg-red-500 right-96 top-1/2', 'relative w-32 h-32 bg-red-500 -right-96 top-1/2',
                         'relative w-48 h-48 bg-red-500 right-96 top-1/2', 'relative w-48 h-48 bg-red-500 -right-96 top-1/2',
                         'relative w-64 h-64 bg-red-500 right-96 top-1/2', 'relative w-64 h-64 bg-red-500 -right-96 top-1/2',
                         'relative w-16 h-16 bg-red-500 right-40 top-1/2', 'relative w-16 h-16 bg-red-500 -right-40 top-1/2', 
                         'relative w-32 h-32 bg-red-500 right-40 top-1/2', 'relative w-32 h-32 bg-red-500 -right-40 top-1/2',
                         'relative w-48 h-48 bg-red-500 right-40 top-1/2', 'relative w-48 h-48 bg-red-500 -right-40 top-1/2',
                         'relative w-64 h-64 bg-red-500 right-40 top-1/2', 'relative w-64 h-64 bg-red-500 -right-40 top-1/2',
                         'relative w-16 h-16 bg-red-500 right-56 top-1/2', 'relative w-16 h-16 bg-red-500 -right-56 top-1/2', 
                         'relative w-32 h-32 bg-red-500 right-56 top-1/2', 'relative w-32 h-32 bg-red-500 -right-56 top-1/2',
                         'relative w-48 h-48 bg-red-500 right-56 top-1/2', 'relative w-48 h-48 bg-red-500 -right-56 top-1/2',
                         'relative w-64 h-64 bg-red-500 right-56 top-1/2', 'relative w-64 h-64 bg-red-500 -right-56 top-1/2',
                         'relative w-16 h-16 bg-red-500 right-72 top-1/2', 'relative w-16 h-16 bg-red-500 -right-72 top-1/2', 
                         'relative w-32 h-32 bg-red-500 right-72 top-1/2', 'relative w-32 h-32 bg-red-500 -right-72 top-1/2',
                         'relative w-48 h-48 bg-red-500 right-72 top-1/2', 'relative w-48 h-48 bg-red-500 -right-72 top-1/2',
                         'relative w-64 h-64 bg-red-500 right-72 top-1/2', 'relative w-64 h-64 bg-red-500 -right-72 top-1/2']
  
   
    return (
       
    <div className = 'flex absolute w-1/2 h-1/2 top-1/4 left-1/4 justify-center bg-green-400'>
        <div className = 'flex absolute w-32 h-24 bg-slate-700 text-white items-center text-center justify-center'>Number of Trials: {count}</div>
        <button onClick = {() => Reset(false)} className = {showReset == true ? 'absolute w-16 h-16 border-2 border-red-400 bg-blue-400 justify-center text-center items-center top-1/2':'hidden' }>Hello</button>
        <button onClick = {() => {setCount(count + 1); Reset(true)}} className = {showReset == false ? `${buttonNames[count % 32]}` : 'hidden'}>World</button>
       </div>
   
      
    );
    }