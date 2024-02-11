import StopWatch from "@/app/components/Stopwatch";
import Link from "next/link";


export default function Consent2() {
  return (
    
   <div className = 'flex w-full '>
    <div className = 'flex flex-col w-full h-full font-semibold text-xl'>
        <div className = 'flex h-20 w-full justify-center items-center text-4xl font-bold'>
            Informed Consent
        </div>
        <div className = 'flex w-full h-16 px-12'>
            <ul>
                <li> Project Title: CS470 HCI - Fitts' Law Study</li>
                <li> Research Team: </li>
            </ul>
        </div>
        <div className = 'flex w-full h-32 px-16'>
            <ul className = 'list-disc'>
                <li>James</li>
                <li>Ethan Gibeau (ethan.gibeau@mnsu.edu)</li>
                <li>Skeeter Cathcart (david.cathcart@mnsu.edu)</li>
                <li>Andrew Hjulberg (andrew.hjulberg@mnsu.edu)</li>
            </ul>
        </div>
        <div className = 'flex w-full h-20 px-12'>
            Please read the following informed consent document. After reading the document, if you consent to the study, click the Agree button at the bottom of this form. If you do not consent, click the Do Not Agree button at the bottom of this form.
        </div>
        <div className = 'flex w-full h-32 px-12 py-2'>
            Thank you for agreeing to participate in this research study! This document provides important
            information about what you will be asked to do during the research study, about the risks and benefits
            of the study, and about your rights as a research subject. If you have any questions about or do not
            understand something in this document, you should ask questions to the members of the research team
            listed above. Do not agree to participate in this research study unless the research team has answered
            your questions and you decide that you want to be part of this study.
        </div>
        <div className = 'flex w-full h-22 px-12 py-2'>
            The purpose of this research study is to evaluate how accurately a user can click on differently-sized
            squares on screen. During the study, you will be randomly presented with square buttons of varying sizes. There will be a total of 320
            trials, and each trial will take anywhere from 2 to 5 seconds, depending on your speed. The entire
            study should take no longer than 45 minutes to complete.
        </div>
        <div className = 'flex w-full h-22 px-12 py-2'>
            To participate in this study, you must click on a series of buttons that are presented on screen. The buttons will alternate between being in the center
            of the screen and being on one side of the screen. Only one button will be present at any given time. Simply click the button that is on the screen at 
            any given time. 1 "trial" consists of clicking the blue button in the center of the screen and the subsequent red button that will appear in a different 
            location on screen.
        </div>
        <div className = 'flex w-full h-22 px-12 py-2'>
            To collect data, our software will record how far you move the mouse, how long it takes you to successfully complete each trial, and whether you make
            any errors (an error is clicking anywhere on screen that is not a button). This information will be recorded anonymously, and no personally identifiable
            information will be collected.
        </div>
        <div className = 'flex w-full h-22 px-12 py-2'>
            You will not be compensated for your participation in this study. We do not believe there are any direct
            benefits to you based on your participation in the study. We do not anticipate any significant risks in
            your participating in this study
        </div>
        <div className = 'flex w-full h-22 px-12 py-2'>
            You may end your participation in the study at any time. If you wish to end your participation, please
            notify one of the researchers. If you decide to end your participation early, any results collected by the
            software for your session will not be saved.
        </div>
        <div className = 'flex w-full h-22 px-12 pt-2'>
            By clicking "Agree", you hereby acknowledge that you are at least 18 years of age, and that you are
            (other inclusion criteria). You also indicate that you agree to the following statement:
        </div>
        <div className = 'flex w-full h-22 px-12 py-2'>
            “I have read this consent form and I understand the risks, benefits, and procedures involved with
            participation in this research study. I hereby agree to participate in this research study." 
        </div>
        <div className = 'flex flex-cols items-center justify-center  w-full h-32'>
            <Link href = '/testing' className = 'flex shadow-md active:scale-95 hover:scale-105 shadow-slate-700 rounded-md mr-12 items-center justify-center h-12 w-36 bg-emerald-400'>Agree</Link>
            <Link href = '/' className = 'flex shadow-md active:scale-95 hover:scale-105 shadow-slate-700 rounded-md ml-12 items-center justify-center h-12 w-36 bg-red-500'>Do Not Agree</Link>
        </div>
        
    </div>
    
   </div>
   
  );
}