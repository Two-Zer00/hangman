export function Letter({letter,tries}){
const handleClick =(e)=>{
    //console.log(e.target.textContent);
    const letter = e.target.textContent;
    tries(letter)
}
    return(<div className="border rounded h-10 w-10 text-2xl text-center hover:cursor-pointer" onClick={handleClick}>{letter}</div>);
}