'use client'

import { useState, useEffect } from "react";

type Target = {
    css: String;
    Side: String;
    Distance: String;
    Size: String;
}

export default function ResetButton(props) {

    const [count, setCount] = useState(0)
    const [showReset, Reset] = useState(true)
    const [startTime, addStartTime] = useState<Number[]>([]) // Logs the time when the center button is clicked
    const [buttonTime, addButtonTime] = useState<Number[]>([]) // Logs the time the target is clicked
    const [buttonSide, addButtonSide] = useState<String[]>([])
    const [buttonDistance, addButtonDistance] = useState<String[]>([])
    const [buttonSize, addButtonSize] = useState<String[]>([])
    const [totalTime, addTotalTime] = useState<Number[]>([])
  

    function logStartTime() {
        startTime.forEach(function(Element) {console.log(Element)})
        console.log("Array length = " + startTime.length)
        console.log(JSON.stringify(buttonNames[count]))
    }

    const Button1: Target = {css: 'relative w-16 h-16 bg-red-500 right-96 top-1/2',  Side: 'Left', Distance: '96', Size: '16'}
    const Button2: Target = {css: 'relative w-16 h-16 bg-red-500 -right-96 top-1/2', Side: 'Right', Distance: '96', Size: '16'}
    
    const Button3: Target = {css: 'relative w-32 h-32 bg-red-500 right-96 top-1/2',  Side: 'Left', Distance: '96', Size: '32'}
    const Button4: Target = {css: 'relative w-32 h-32 bg-red-500 -right-96 top-1/2', Side: 'Right', Distance: '96', Size: '32'}
   
    const Button5: Target = {css: 'relative w-48 h-48 bg-red-500 right-96 top-1/2',  Side: 'Left', Distance: '96', Size: '48'}
    const Button6: Target = {css: 'relative w-48 h-48 bg-red-500 -right-96 top-1/2', Side: 'Right', Distance: '96', Size: '48'}
   
    const Button7: Target = {css: 'relative w-64 h-64 bg-red-500 right-96 top-1/2',  Side: 'Left', Distance: '96', Size: '64'}
    const Button8: Target = {css: 'relative w-64 h-64 bg-red-500 -right-96 top-1/2', Side: 'Right', Distance: '96', Size: '64'}
    
    const Button9: Target = {css: 'relative w-16 h-16 bg-red-500 right-40 top-1/2',   Side: 'Left', Distance: '40', Size: '16'}
    const Button10: Target = {css: 'relative w-16 h-16 bg-red-500 -right-40 top-1/2', Side: 'Right', Distance: '40', Size: '16'}
   
    const Button11: Target = {css: 'relative w-32 h-32 bg-red-500 right-40 top-1/2',  Side: 'Left', Distance: '40', Size: '32'}
    const Button12: Target = {css: 'relative w-32 h-32 bg-red-500 -right-40 top-1/2', Side: 'Right', Distance: '40', Size: '32'}

    const Button13: Target = {css: 'relative w-48 h-48 bg-red-500 right-40 top-1/2',  Side: 'Left', Distance: '40', Size: '48'}
    const Button14: Target = {css: 'relative w-48 h-48 bg-red-500 -right-40 top-1/2', Side: 'Right', Distance: '40', Size: '48'}
   
    const Button15: Target = {css: 'relative w-64 h-64 bg-red-500 right-40 top-1/2',  Side: 'Left', Distance: '40', Size: '64'}
    const Button16: Target = {css: 'relative w-64 h-64 bg-red-500 -right-40 top-1/2', Side: 'Right', Distance: '40', Size: '64'}
    
    const Button17: Target = {css: 'relative w-16 h-16 bg-red-500 right-56 top-1/2',  Side: 'Left', Distance: '56', Size: '16'}
    const Button18: Target = {css: 'relative w-16 h-16 bg-red-500 -right-56 top-1/2', Side: 'Right', Distance: '56', Size: '16'}
    
    const Button19: Target = {css: 'relative w-32 h-32 bg-red-500 right-56 top-1/2',  Side: 'Left', Distance: '56', Size: '32'}
    const Button20: Target = {css: 'relative w-32 h-32 bg-red-500 -right-56 top-1/2', Side: 'Right', Distance: '56', Size: '32'}
    
    const Button21: Target = {css: 'relative w-48 h-48 bg-red-500 right-56 top-1/2',  Side: 'Left', Distance: '56', Size: '48'}
    const Button22: Target = {css: 'relative w-48 h-48 bg-red-500 -right-56 top-1/2', Side: 'Right', Distance: '56', Size: '48'}
   
    const Button23: Target = {css: 'relative w-64 h-64 bg-red-500 right-56 top-1/2',  Side: 'Left', Distance: '56', Size: '64'}
    const Button24: Target = {css: 'relative w-64 h-64 bg-red-500 -right-56 top-1/2', Side: 'Right', Distance: '56', Size: '64'}
    
    const Button25: Target = {css: 'relative w-16 h-16 bg-red-500 right-72 top-1/2',  Side: 'Left', Distance: '72', Size: '16'}
    const Button26: Target = {css: 'relative w-16 h-16 bg-red-500 -right-72 top-1/2', Side: 'Right', Distance: '72', Size: '16'}
    
    const Button27: Target = {css: 'relative w-32 h-32 bg-red-500 right-72 top-1/2',  Side: 'Left', Distance: '72', Size: '32'}
    const Button28: Target = {css: 'relative w-32 h-32 bg-red-500 -right-72 top-1/2', Side: 'Right', Distance: '72', Size: '32'}
    
    const Button29: Target = {css: 'relative w-48 h-48 bg-red-500 right-72 top-1/2',  Side: 'Left', Distance: '72', Size: '48'}
    const Button30: Target = {css: 'relative w-48 h-48 bg-red-500 -right-72 top-1/2', Side: 'Right', Distance: '72', Size: '48'}
    
    const Button31: Target = {css: 'relative w-64 h-64 bg-red-500 right-72 top-1/2',  Side: 'Left', Distance: '72', Size: '64'}
    const Button32: Target = {css: 'relative w-64 h-64 bg-red-500 -right-72 top-1/2', Side: 'Right', Distance: '72', Size: '64'}


    //                  Left Side Right Side
    let buttonNames =   [Button1, Button2, Button3, Button4, Button5, Button6, Button7, Button8,
                         Button9, Button10, Button11, Button12, Button13, Button14, Button15, Button16,
                         Button17, Button18, Button19, Button20, Button21, Button22, Button23, Button24,
                         Button25, Button26, Button27, Button28, Button29, Button30, Button31, Button32]
 //                        'relative w-32 h-32 bg-red-500 right-96 top-1/2', 'relative w-32 h-32 bg-red-500 -right-96 top-1/2',
 //                        'relative w-48 h-48 bg-red-500 right-96 top-1/2', 'relative w-48 h-48 bg-red-500 -right-96 top-1/2',
 //                        'relative w-64 h-64 bg-red-500 right-96 top-1/2', 'relative w-64 h-64 bg-red-500 -right-96 top-1/2',
 //   9,10                 'relative w-16 h-16 bg-red-500 right-40 top-1/2', 'relative w-16 h-16 bg-red-500 -right-40 top-1/2', 
 //                        'relative w-32 h-32 bg-red-500 right-40 top-1/2', 'relative w-32 h-32 bg-red-500 -right-40 top-1/2',
 //                        'relative w-48 h-48 bg-red-500 right-40 top-1/2', 'relative w-48 h-48 bg-red-500 -right-40 top-1/2',
 //                        'relative w-64 h-64 bg-red-500 right-40 top-1/2', 'relative w-64 h-64 bg-red-500 -right-40 top-1/2',
 //                        'relative w-16 h-16 bg-red-500 right-56 top-1/2', 'relative w-16 h-16 bg-red-500 -right-56 top-1/2', 
 //   19,20                'relative w-32 h-32 bg-red-500 right-56 top-1/2', 'relative w-32 h-32 bg-red-500 -right-56 top-1/2',
 //                        'relative w-48 h-48 bg-red-500 right-56 top-1/2', 'relative w-48 h-48 bg-red-500 -right-56 top-1/2',
 //                        'relative w-64 h-64 bg-red-500 right-56 top-1/2', 'relative w-64 h-64 bg-red-500 -right-56 top-1/2',
 //                        'relative w-16 h-16 bg-red-500 right-72 top-1/2', 'relative w-16 h-16 bg-red-500 -right-72 top-1/2', 
 //   29,30                'relative w-32 h-32 bg-red-500 right-72 top-1/2', 'relative w-32 h-32 bg-red-500 -right-72 top-1/2',
 //                        'relative w-48 h-48 bg-red-500 right-72 top-1/2', 'relative w-48 h-48 bg-red-500 -right-72 top-1/2',
 //                        'relative w-64 h-64 bg-red-500 right-72 top-1/2', 'relative w-64 h-64 bg-red-500 -right-72 top-1/2']
  
    const shuffle = (array: Target[]) => 
    { 
        for (let i = array.length - 1; i > 0; i--) 
            { 
                const j = Math.floor(Math.random() * (i + 1)); 
                [array[i], array[j]] = [array[j], array[i]]; 
            } 
        return array; 
    };                  

    if(count % 32 == 0){
        shuffle(buttonNames)
    }
   
    return (
       
    <div className = 'flex absolute w-1/2 h-1/2 top-1/4 left-1/4 justify-center bg-green-400'>
        <div className = 'flex absolute w-32 h-24 bg-slate-700 text-white items-center text-center justify-center'>Number of Trials: {count}</div>
        {count < 5 && <button onClick = {() => {Reset(false); logStartTime(); addStartTime([...startTime, Date.now()])}} className = {showReset == true ? 'absolute w-16 h-16 border-2 border-red-400 bg-blue-400 justify-center text-center items-center top-1/2':'hidden' }>Hello</button>}
        {count < 5 && <button onClick = {() => {setCount(count + 1); Reset(true);
                                  addButtonTime([...buttonTime, Date.now()]);
                                  addTotalTime([...totalTime, buttonTime[count] as number - (startTime[count] as number)])
                                  addButtonSide([...buttonSide, buttonNames[count % 32].Side]);
                                  addButtonSize([...buttonSize, buttonNames[count % 32].Size]);
                                  addButtonDistance([...buttonDistance, buttonNames[count % 32].Distance]);
                                  }} className = {showReset == false ? `${buttonNames[count % 32].css}` : 'hidden'}>World</button> }
    { count >= 5 && <div className = 'bg-white h-full w-full'>{JSON.stringify(totalTime)}</div>}
    </div>
      
    );
    }