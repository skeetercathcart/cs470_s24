import Image from "next/image";
import ResetButton from "./components/ResetButton";

export default function Home() {
  return (
    <div className = 'absolute h-full w-full bg-blue-200'>
      <ResetButton></ResetButton>
    </div>
   
  );
}
