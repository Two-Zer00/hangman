import { Letter } from "./Letter";

export function Letters({tries}){
    const lettersEn = "qwertyuiopasdfghjklzxcvbnm";
    let LettersArray = lettersEn.replace(/ /g, '').split('');
    return(<div className="grid grid-cols-10 auto-rows-max lg:gap-x-2 gap-y-2 w-4/5 max-w-lg">
        {LettersArray.map((letter,i) => {return( <Letter key={i} letter={letter} tries={tries}/>)})}
    </div>);
}