import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useState } from "react";
import { ButtonLetter } from "./ButtonLetter";
import { Hangman } from "./Hangman";
import { InputGame } from "./InputGame";
import KeyboardInput from "./KeyboardInput";
import { Word } from "./Word";

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lifes:0,
            disabled:false,
            attempt:(this.props.word.split('')).fill("")
        }
        this.handleButtons = this.handleButtons.bind(this)
        this.handleInput = this.handleInput.bind(this);
        this.handleAttemtp = this.handleAttemtp.bind(this);
    }
    handleInput(event){
        event.target.blur();
        console.log(event.target.value)
        const letter = event.target.value;
        this.handleAttemtp(letter);
        setTimeout(()=>{
            event.target.value='';
            event.target.focus();
        },250)
    }
    handleAttemtp(letter){
        console.log("Letter:",letter)
        const newWord = this.props.word.split('');
        const index = newWord.indexOf(letter);
        if(index!== -1){
            console.log("Letter correct",letter)
            const temp = [...this.state.attempt];
            newWord.forEach((letterT,i)=>{
                if(letterT===letter){
                    temp[i] = letter;
                }
            })
            if(temp.every(letter=>letter!=='')){
                this.props.playingGame(1);
                console.log('You win :D');
                this.setState({
                    disabled:true
                })
            }
            this.setState((state)=>(
                {
                attempt:temp
            }))
            return 1;
        }
        else{
            console.log("Letter incorrect",letter);
            const temp = this.state.lifes;
            this.setState((states) =>({
                lifes: states.lifes+1
             }))
            if(temp+1>=6){
                this.props.playingGame(2);
                console.log('You lose, the word was: ',this.props.word)
            }
            return 2;
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.word!==nextProps.word){
            this.setState({
                attempt:(nextProps.word.split('')).fill(""),
                lifes:0,
                disabled:false,
                game:true
            })
        }
        return true;
    }
    handleButtons(e){
        //console.log(e.target)
        const letter = e.target.textContent;
        return(this.handleAttemtp(letter));
    }
    render(){
        return(<>
            <Hangman lives={this.state.lifes} />
            <Word word={this.state.attempt} />
            <InputGame disabled={this.state.lifes} setLetterButton={this.handleButtons} setLetter={this.handleInput}/>
            {/* <KeyboardInput state={this.props.gameFinish} setterLetter={this.handleButtons}/> */}
        </>)
    }
}
export default Game;