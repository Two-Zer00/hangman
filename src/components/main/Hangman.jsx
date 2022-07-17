import { useEffect, useState } from "react"

export function Hangman({lives}){
    const hangman = ['O','/','I','\\','/','\\']
    let hagmanTemp=[];
    for (let i=0; i<lives;i++){
        hagmanTemp.push(hangman[i]);
    }
    return(<>
        <div className="border rounded w-[200px] h-[250px] text-4xl font-bold flex flex-col justify-center items-center">
            <div className="w-[55px] h-auto text-center">
                {hagmanTemp.map((part,i) =>{ 
                    if(i>0 && i<4){
                        return(<span key={i} className="inline-block">{part}</span>)
                    }
                    else if(i>3){
                        return(<span key={i} className="">{part}</span>)
                    }
                    else{
                        return(<><span key={i} className="w-full inline-block">{part}</span><br/></>)
                    }
                    })}
            </div>
        </div>
    </>);
}