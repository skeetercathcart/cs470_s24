import Image from "next/image";
import ResetButton from "./components/ResetButton";
import TimerDisplay from "./components/TimerDisplay";
import StopWatch from "./components/Stopwatch";

export default function Home() {
  return (
    <div className = 'absolute h-full w-full bg-slate-200'>
      <StopWatch></StopWatch>
    </div>
   
  );
}
