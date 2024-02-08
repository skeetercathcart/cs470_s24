'use client'

import React, { useState } from 'react';

function TextProvider() {
    const [text, setText] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [showAgreeButton, setShowAgreeButton] = useState(false);
    const [showDisagreeButton, setShowDisagreeButton] = useState(false);

    const handleClick = () => {
        setText('Please read the following informed consent document. If you consent to the study, Click OK. If you do not consent and would like to cancel your participation in the study, Tell the researcher.'), 
        setText('Project Title:	 CS470 HCI – Fitts’ Law study'),  
        setText('Research Team:'),  
        setText('Skeeter Cathcart (david.cathcart@mnsu.edu)'), 
        setText('Ethan Gibeau (ethan.gibeau@mnsu.edu)'), 
        setText('Andrew Hjulberg (andrew.hjulberg@mnsu.edu)'),
        setText('James ???'),
        setText('Thank you for agreeing to participate in this research study! This document provides important information about what you will be asked to do during the research study, about the risks and benefits of the study, and about your rights as a research subject. If you have any questions about or do not understand something in this document, you should ask questions to the members of the research team listed above. Do not agree to participate in this research study unless the research team has answered your questions and you decide that you want to be part of this study. The purpose of this research study is to evaluate how accurately a user can click on differently-sized circles on screen. During the study, you will be randomly presented with … There will be a total of 320 trials, and each trial will take anywhere from 1 to 3 seconds, depending on your speed. The entire study should take no longer than 45 minutes to complete.  To participate in this study, you must …  To collect data, our software will record how much you move the mouse, how long it takes you to successfully complete each trial, and whether you make any errors. This information will be recorded anonymously, and no personally identifiable information will be collected.  You will not be compensated for your participation in this study. We do not believe there are any direct benefits to you based on your participation in the study. We do not anticipate any significant risks in your participating in this study. You may end your participation in the study at any time. If you wish to end your participation, please notify one of the researchers. If you decide to end your participation early, any results collected by the software for your session will not be saved. By clicking "I Agree, you hereby acknowledge that you are at least 18 years of age. You also indicate that you agree to the following statement: “I have read this consent form and I understand the risks, benefits, and procedures involved with participation in this research study. I hereby agree to participate in this research study.”');
        setButtonClicked(true);
        setShowAgreeButton(true);
        setShowDisagreeButton(true);
    };

    const handleAgreeClick = () => {
        setText('You agreed to the terms.');
        setShowAgreeButton(false);
        setShowDisagreeButton(false);
    };

    const handleDisagreeClick = () => {
        setText('Thank You');
        setShowAgreeButton(false);
        setShowDisagreeButton(false);
    };

    return (
        <div className='flex absolute w-full h-full bg-slate-200 z-50 justify-center items-center'>
            {!buttonClicked && <button className = 'flex absolute justify-center items-center bg-white shadow-xl text-4xl font-bold h-64 w-64 border-4 border-black' onClick = {handleClick} >View Contract</button>}
            {text && (
                <>
                    <p style={{ fontWeight: 'bold', margin: '0 auto', width: '60%', fontSize: '24px' }}>{text}</p>
                    {showAgreeButton && <button onClick={handleAgreeClick} style={{ backgroundColor: 'green', color: 'white', margin: '10px', fontSize: '24px' }}>I Agree</button>}
                    {showDisagreeButton && <button onClick={handleDisagreeClick} style={{ backgroundColor: 'red', color: 'white', margin: '10px', fontSize: '24px' }}>I Do Not Condone</button>}
                </>
            )}
        </div>
    );
}

export default TextProvider;

//