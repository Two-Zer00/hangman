import { useState } from "react";

export function ButtonLetter({letter,setLetter}){
    const [state,setState] = useState(0);
    const handleClick = (e)=> {
        setState(setLetter(e));
    }
    return(<>
        <span onClick={handleClick} className={`${state!==0?state===1?'bg-green-200':'bg-red-200':''} p-1 h-8 w-8 border rounded text-center cursor-pointer select-none hover:bg-black/10 disabled:cursor-not-allowed disabled:pointer-events-none`}>{letter}</span>
    </>);
}