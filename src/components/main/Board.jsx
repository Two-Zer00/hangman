import { useEffect, useState } from "react";
import { Word } from "./Word";

export function Board({letter,word}){
    const [result,setResult] = useState(word);
    return(<div className="flex flex-col items-center gap-y-2">
        <div className="h-[400px] border rounded w-[300px]">
        </div>
        <div className="flex flex-row gap-x-2 h-10">
            <Word result={result}/>
        </div>
    </div>);
}