import Image from "next/image";
import ResetButton from "./components/ResetButton";
import TimerDisplay from "./components/TimerDisplay";
import StopWatch from "./components/Stopwatch";
import Consent from "./components/Consent";

export default function Home() {
  return (
    <div className = 'absolute h-full w-full bg-slate-200'>
      <Consent></Consent>
    </div>
   
  );
}
