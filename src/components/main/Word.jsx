import { useEffect, useId } from "react";
import { getWord } from "../../utils";

export function Word({word}){
    return(<div className="flex flex-row gap-x-2 h-8 font-bold text-2xl uppercase">
        {word.map((letter,i)=>{return (<div key={i} className="border-b-2 w-10 text-center h-auto">{letter}</div>)})}
    </div>);
}