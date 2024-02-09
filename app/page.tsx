'use client'

import Link from "next/link";
import { useState } from "react";
import { pdfjs, Document, Page } from 'react-pdf';


import Image from "next/image";
import ResetButton from "./components/ResetButton";
import TimerDisplay from "./components/TimerDisplay";
import StopWatch from "./components/Stopwatch";
import Consent from "./components/Consent";

export default function Home() {


  return (
    <div className = 'absolute h-full w-full bg-slate-200'>
      <iframe src = "/PDFs/104%NoCut.pdf" width = '100%'></iframe>
      <Link href = 'testing' className = 'w-24 h-12 bg-emerald-600'>Agree</Link>
      <Consent></Consent>
    </div>
   
  );
}
