import { useEffect } from "react";
import KeyboardInput from "./KeyboardInput";

export function InputGame({setLetter,disabled,setLetterButton}){
    let qwerty = 'qazwsxedcrfvtgbyhnujmikolp';
    return(
        <>
            <input type="text" disabled={disabled>=6} className="border rounded text-center w-[2.5rem] font-bold uppercase text-2xl accent-pink-500" maxLength={1} onChange={setLetter}/>
            {/* <KeyboardInput setterLetter={setLetterButton} /> */}
        </>
    );
}