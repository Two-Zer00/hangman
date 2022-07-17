import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import Game from "./components/main/Game";
import { getWord } from "./utils";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: getWord(),
      playingGame: 0,
      stack: [],
      gameFinish: false,
    };
    this.changeWord = this.changeWord.bind(this);
    this.setPlayingGame = this.setPlayingGame.bind(this);
  }
  changeWord() {
    const temp = getWord();
    const newWord = this.state.stack.includes(temp) ? getWord() : temp;
    console.warn("new word", newWord);
    this.setState({
      word: newWord,
      playingGame: 0,
      gameFinish: true,
    });
    this.forceUpdate();
  }
  setPlayingGame(state) {
    console.log(state);
    this.setState({
      playingGame: state,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.playingGame !== 0) {
      let temp = [...this.state.stack];
      if (!temp.includes(this.state.word)) {
        temp.push(this.state.word);
      }
      this.setState({
        stack: temp,
      });
    }
    return true;
  }
  render() {
    let gameWin = <h1>You won the game</h1>;
    let gameLose = <h1>You lose the game</h1>;
    return (
      <div className="flex flex-col h-screen">
        <Header newGame={this.changeWord} className="" />
        <div className="flex flex-col items-center justify-center gap-y-2 relative h-full">
          <Game
            word={this.state.word}
            newGame={this.changeWord}
            playingGame={this.setPlayingGame}
            state={this.state.gameFinish}
          />
          <div
            className={`${
              this.state.playingGame !== 0 ? "absolute" : "hidden"
            }  bg-purple-700/10 w-full h-full text-xl flex flex-col justify-center items-center select-none gap-y-2`}
          >
            <div className="bg-white flex flex-col p-4 h-[200px] border rounded drop-shadow-lg">
              <div className="h-full flex flex-col items-stretch divide-y">
                <div className="h-auto w-full font-bold  text-center pb-1">
                  {this.state.playingGame !== 0
                    ? this.state.playingGame === 1
                      ? gameWin
                      : gameLose
                    : ""}
                </div>
                <div className="h-full flex flex-col items-center justify-center">
                  {this.state.playingGame === 1
                    ? `Congrats! you word was:`
                    : `Better luck next time, you word was:`}
                  <div className="font-bold uppercase">{this.state.word}</div>
                </div>
              </div>
              <div
                onClick={this.changeWord}
                className="p-2 bg-purple-600 text-white rounded text-center font-bold hover:cursor-pointer hover:bg-purple-700"
              >
                Try again?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
