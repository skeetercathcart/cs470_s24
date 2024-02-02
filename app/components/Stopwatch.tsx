'use client'

import { useState, useEffect, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import ResetButton from "./ResetButton";

export default function StopWatch() {

    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const increment = useRef(null)
  
    const handleStart = () => {
      setIsActive(true)
      setIsPaused(true)
     
    }
  
    const handlePause = () => {
      clearInterval(increment.current)
      setIsPaused(false)
    }
  
    const handleResume = () => {
      setIsPaused(true)
      increment.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    }
  
  
    const formatTime = () => {
      const getSeconds = `0${(timer % 60)}`.slice(-2)
      const minutes = `${Math.floor(timer / 60)}`
      const getMinutes = `0${minutes % 60}`.slice(-2)
      const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
  
      return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
  
    return (
     
          <div className = 'flex bg-green-200'>
            {
                <ResetButton handleStart = {handleStart} handlePause = {handlePause} ></ResetButton>
            }
          </div>
       
    );
    


}