'use client'

import { useState, useEffect } from "react";
import { createNewTest, uploadDistance, uploadSide, uploadSize, uploadStartTime } from "../functions/database";

// ******IN DB: START TIME IS TOTAL TIME***********

type Target = {
    css: string;
    Side: string;
    Distance: number;
    Size: number;
}

// ******IN DB: START TIME IS TOTAL TIME***********

type Result = {
    testId: number;
    side: string[];
    distance: number[];
    startTime: number[];
    buttonTime: number[];
    buttonSize: number[];
    errors: number;
    totalTime: number[];
}

// ******IN DB: START TIME IS TOTAL TIME***********

export default function ResetButton() {

    //let res: Result = {testId: 0, side: [], distance: [], startTime: [], buttonTime: [], buttonSize: [], errors: 0}
    const [endResult, setEndResult] = useState<Result>({testId: 0, side: [], distance: [], startTime: [], buttonTime: [], buttonSize: [], errors: 0, totalTime: []})
    console.log(JSON.stringify(endResult))
    const [count, setCount] = useState(0)
    const [error, setError] = useState(0)
    const [initializer, setInitializer] = useState(0)
    const [showReset, Reset] = useState(true)
    const [startTime, addStartTime] = useState<number[]>([]) // Logs the time when the center button is clicked
    const [buttonTime, addButtonTime] = useState<number[]>([]) // Logs the time the target is clicked
    const [buttonSide, addButtonSide] = useState<string[]>([]) // Logs the size of the target when it is clicked
    const [buttonDistance, addButtonDistance] = useState<number[]>([]) // Logs the distance from the center to the target when clicked
    const [buttonSize, addButtonSize] = useState<number[]>([]) // Logs the size of the target when clicked
    const [totalTime, addTotalTime] = useState<number[]>([]) 
    const [showResults, toggleResults] = useState(false)
    const [buttonOrder, setButtonOrder] = useState<Target[]>([])
  
 // ******IN DB: START TIME IS TOTAL TIME***********

    function storeResults() {

        let totalTime: number[] = []
        const randomInt = () => Math.floor(Math.random() * (1000000 - 1000000000 + 1)) + 1000000000;
        let result: Result = {testId: randomInt(), side: buttonSide, distance: buttonDistance, startTime: startTime, buttonTime: buttonTime, buttonSize: buttonSize, errors: error, totalTime: []}
        for(let i = 0; i < result.buttonTime.length; i++ ){
            totalTime.push(result.buttonTime[i] - result.startTime[i])
        }
        console.log(JSON.stringify("buttonDistance: " + JSON.stringify(result.distance)))
        createNewTest(result.testId, result.errors)
        totalTime.forEach((element) => uploadStartTime(result.testId, element))
        result.buttonSize.forEach((element) => uploadSize(result.testId, element))
        result.side.forEach((element) => uploadSide(result.testId, element))
        result.distance.forEach((element) => uploadDistance(result.testId, element))
        result.totalTime = totalTime
        setEndResult(result)
    }

    // ******IN DB: START TIME IS TOTAL TIME***********

    function logStartTime() {
        
        console.log("Start Time: " + JSON.stringify(startTime))
        
    }

    // ******IN DB: START TIME IS TOTAL TIME***********

    function logButtonTime() {

        console.log("Button Time: " + JSON.stringify(buttonTime))

    }

    // ******IN DB: START TIME IS TOTAL TIME***********

    function logTotalTime() {

        console.log("Total Time: " + JSON.stringify(totalTime))

    }


    // ******IN DB: START TIME IS TOTAL TIME***********

    const Button1: Target = {css: 'relative w-16 h-16 bg-red-500 right-96 top-1/2',  Side: 'Left',  Distance: 96, Size: 16}
    const Button2: Target = {css: 'relative w-16 h-16 bg-red-500 -right-96 top-1/2', Side: 'Right', Distance: 96, Size: 16}
    
    const Button3: Target = {css: 'relative w-32 h-32 bg-red-500 right-96 top-1/2',  Side: 'Left',  Distance: 96, Size: 32}
    const Button4: Target = {css: 'relative w-32 h-32 bg-red-500 -right-96 top-1/2', Side: 'Right', Distance: 96, Size: 32}
   
    const Button5: Target = {css: 'relative w-48 h-48 bg-red-500 right-96 top-1/2',  Side: 'Left',  Distance: 96, Size: 48}
    const Button6: Target = {css: 'relative w-48 h-48 bg-red-500 -right-96 top-1/2', Side: 'Right', Distance: 96, Size: 48}
   
    const Button7: Target = {css: 'relative w-64 h-64 bg-red-500 right-96 top-1/2',  Side: 'Left',  Distance: 96, Size: 64}
    const Button8: Target = {css: 'relative w-64 h-64 bg-red-500 -right-96 top-1/2', Side: 'Right', Distance: 96, Size: 64}
    
    const Button9: Target = {css: 'relative w-16 h-16 bg-red-500 right-40 top-1/2',   Side: 'Left',  Distance: 40, Size: 16}
    const Button10: Target = {css: 'relative w-16 h-16 bg-red-500 -right-40 top-1/2', Side: 'Right', Distance: 40, Size: 16}
   
    const Button11: Target = {css: 'relative w-32 h-32 bg-red-500 right-40 top-1/2',  Side: 'Left',  Distance: 40, Size: 32}
    const Button12: Target = {css: 'relative w-32 h-32 bg-red-500 -right-40 top-1/2', Side: 'Right', Distance: 40, Size: 32}

    const Button13: Target = {css: 'relative w-48 h-48 bg-red-500 right-40 top-1/2',  Side: 'Left',  Distance: 40, Size: 48}
    const Button14: Target = {css: 'relative w-48 h-48 bg-red-500 -right-40 top-1/2', Side: 'Right', Distance: 40, Size: 48}
   
    const Button15: Target = {css: 'relative w-64 h-64 bg-red-500 right-40 top-1/2',  Side: 'Left',  Distance: 40, Size: 64}
    const Button16: Target = {css: 'relative w-64 h-64 bg-red-500 -right-40 top-1/2', Side: 'Right', Distance: 40, Size: 64}
    
    const Button17: Target = {css: 'relative w-16 h-16 bg-red-500 right-56 top-1/2',  Side: 'Left',  Distance: 56, Size: 16}
    const Button18: Target = {css: 'relative w-16 h-16 bg-red-500 -right-56 top-1/2', Side: 'Right', Distance: 56, Size: 16}
    
    const Button19: Target = {css: 'relative w-32 h-32 bg-red-500 right-56 top-1/2',  Side: 'Left',  Distance: 56, Size: 32}
    const Button20: Target = {css: 'relative w-32 h-32 bg-red-500 -right-56 top-1/2', Side: 'Right', Distance: 56, Size: 32}
    
    const Button21: Target = {css: 'relative w-48 h-48 bg-red-500 right-56 top-1/2',  Side: 'Left',  Distance: 56, Size: 48}
    const Button22: Target = {css: 'relative w-48 h-48 bg-red-500 -right-56 top-1/2', Side: 'Right', Distance: 56, Size: 48}
   
    const Button23: Target = {css: 'relative w-64 h-64 bg-red-500 right-56 top-1/2',  Side: 'Left',  Distance: 56, Size: 64}
    const Button24: Target = {css: 'relative w-64 h-64 bg-red-500 -right-56 top-1/2', Side: 'Right', Distance: 56, Size: 64}
    
    const Button25: Target = {css: 'relative w-16 h-16 bg-red-500 right-72 top-1/2',  Side: 'Left',  Distance: 72, Size: 16}
    const Button26: Target = {css: 'relative w-16 h-16 bg-red-500 -right-72 top-1/2', Side: 'Right', Distance: 72, Size: 16}
    
    const Button27: Target = {css: 'relative w-32 h-32 bg-red-500 right-72 top-1/2',  Side: 'Left',  Distance: 72, Size: 32}
    const Button28: Target = {css: 'relative w-32 h-32 bg-red-500 -right-72 top-1/2', Side: 'Right', Distance: 72, Size: 32}
    
    const Button29: Target = {css: 'relative w-48 h-48 bg-red-500 right-72 top-1/2',  Side: 'Left',  Distance: 72, Size: 48}
    const Button30: Target = {css: 'relative w-48 h-48 bg-red-500 -right-72 top-1/2', Side: 'Right', Distance: 72, Size: 48}
    
    const Button31: Target = {css: 'relative w-64 h-64 bg-red-500 right-72 top-1/2',  Side: 'Left',  Distance: 72, Size: 64}
    const Button32: Target = {css: 'relative w-64 h-64 bg-red-500 -right-72 top-1/2', Side: 'Right', Distance: 72, Size: 64}


    let buttonNames =   [Button1, Button2, Button3, Button4, Button5, Button6, Button7, Button8,
                         Button9, Button10, Button11, Button12, Button13, Button14, Button15, Button16,
                         Button17, Button18, Button19, Button20, Button21, Button22, Button23, Button24,
                         Button25, Button26, Button27, Button28, Button29, Button30, Button31, Button32]
 //   1,2 accidentally redacted, see above
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

    if(buttonOrder.length == 0){
        shuffle(buttonNames)
        setButtonOrder(buttonNames)
    }
   
// ******IN DB: START TIME IS TOTAL TIME***********
// ******IN DB: START TIME IS TOTAL TIME***********
// ******IN DB: START TIME IS TOTAL TIME***********
// ******IN DB: START TIME IS TOTAL TIME***********
// ******IN DB: START TIME IS TOTAL TIME***********

    return (
     
    <div className = 'flex absolute w-full h-full justify-center'>
        {count < 10 && <button className = 'absolute h-full w-full z-0' onClick = {() => setError(error + 1)}></button>}
        {count < 10 && <div className = 'flex absolute z-10 w-32 h-24 bg-slate-700 text-white items-center text-center justify-center'>Number of Trials: {count}</div> }
        {initializer == 0 && <button className = 'absolute w-full h-full bg-white z-50' onClick={() => {addStartTime([...startTime, Date.now()]); addButtonTime([...buttonTime, Date.now()]); setInitializer(1); logTotalTime()}}> CLICK TO START</button>}
        {count < 10 && <button onClick = {() => {Reset(false); addStartTime([...startTime, Date.now()]); logStartTime(); }} className = {showReset == true ? 'absolute w-16 h-16 border-2 border-red-400 bg-blue-400 justify-center text-center items-center top-1/2':'hidden' }>Hello</button>}
        {count < 10 && <button onClick = {() => {Reset(true);
                                  buttonOrder.length -= 1;  
                                  setButtonOrder(buttonOrder);
                                  addButtonTime([...buttonTime, Date.now()]);
                                  addButtonSide([...buttonSide, buttonOrder[count % 32].Side]);
                                  addButtonSize([...buttonSize, buttonOrder[count % 32].Size]);
                                  addButtonDistance([...buttonDistance, buttonOrder[count % 32].Distance]);
                                  setCount(count + 1);
                                  }} className = {showReset == false ? `${buttonOrder[buttonOrder.length - 1].css}` : 'hidden'}>World</button> }
    { count >= 10 && !showResults &&
    <button className = 'bg-white h-full w-full'
            onClick = {() => {storeResults(); toggleResults(true)}}> GET RESULTS
    </button>}
    { showResults && 
        <div className = 'absolute w-full h-full bg-orange-400'>
            <ul>
                <li className = 'text-white p-5'> TestID: {endResult.testId}</li>
                <li className = 'text-white p-5'> Errors: {endResult.errors}</li>
                <li className = 'text-white p-5'> buttonTime: {JSON.stringify(endResult.buttonTime)}</li>
                <li className = 'text-white p-5'> buttonSize: {JSON.stringify(endResult.buttonSize)}</li>
                <li className = 'text-white p-5'> distance: {JSON.stringify(endResult.distance)}</li>
                <li className = 'text-white p-5'> startTime: {JSON.stringify(endResult.startTime)}</li>
                <li className = 'text-white p-5'> totalTime: {JSON.stringify(endResult.totalTime)}</li>

            </ul>

        </div>
    }
    </div>
      
    );
    }