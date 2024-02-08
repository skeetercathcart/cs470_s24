import Link from "next/link";
import StopWatch from "./components/Stopwatch";

export default function Home() {
  return (
    <div className = 'absolute h-full w-full bg-slate-200'>
      <Link href = 'testing' className = 'w-24 h-12 bg-emerald-600'>Agree</Link>
    </div>
   
  );
}
