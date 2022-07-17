import React, { useEffect, useState } from "react";
import { ButtonLetter } from "./ButtonLetter";
function KeyboardInput({state,setterLetter}){
    console.log('keyboard')
    const querty = 'qazwsxedcrfvtgbyhnujmikolp'
    return(<>
        <div className="grid grid-rows-3 grid-flow-col auto-cols-max gap-3 uppercase">
            {querty.split('').map(((letter,index)=> <ButtonLetter key={letter} letter={letter} setLetter={setterLetter} className="p-1 h-8 w-8 border rounded text-center cursor-pointer select-none hover:bg-black/10 disabled:cursor-not-allowed disabled:pointer-events-none"/>))}
        </div>
    </>);
}
export default KeyboardInput;