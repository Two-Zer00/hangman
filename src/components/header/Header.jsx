export function Header({newGame,className,...props}){
    return<>
        <header className={`flex bg-purple-200 items-center px-2 h-12 ${className}`} {...props}>
            <div className="w-full text-xl font-bold">Hangman</div>
            <div onClick={newGame} className="hover:cursor-pointer hover:bg-purple-600 select-none capitalize text-white font-bold rounded bg-purple-500 w-auto whitespace-nowrap px-1">
                new game
            </div>
        </header>
    </>
}