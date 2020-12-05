import React, { useState } from 'react';
import './App.css';
import Subway from './Components/Subway';
import GameOver from './Components/GameOver';
import StartButton from './Components/StartButton';
import Score from './Components/Score';

let lastMole: null | string = null;
let lastRand: null | number = null;
interface stateInter {
  [index: string]: Array<string | number>;
}

function App() {
  const [state, setState] = useState<stateInter>({
    '1': ['translate(0, 110%)', ''],
    '2': ['translate(0, 110%)', ''],
    '3': ['translate(0, 110%)', ''],
    '4': ['translate(0, 110%)', ''],
    '5': ['translate(0, 110%)', ''],
    '6': ['translate(0, 110%)', ''],
    '7': ['translate(0, 110%)', ''],
    '8': ['translate(0, 110%)', ''],
    '9': ['translate(0, 110%)', ''],
  });
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [moleHasBeenWhacked, setMoleHasBeenWhacked] = useState(false);
  const [score, setScore] = useState(0);

  const [display, setDisplay] = useState('none');
  const [buttonMessage, setButtonMessage] = useState('Start Game');
  const [gameOver, setGameOver] = useState('none');
  const [buttonDisplay, setButtonDisplay] = useState('inline-block');
  const [titleMargin, setTitleMargin] = useState('15px');

  function timeOut(num: number) {
    if (gameHasStarted) {
      return;
    }
    setButtonDisplay('none');
    setDisplay('block');
    setGameOver('none');
    setTitleMargin('0px');
    window.setTimeout(() => {
      startGame();
    }, num);
  }

  function clearMole() {
    for (let value in state) {
      setState({
        ...state,
        [value]: ['translate(0, 110%)', ''],
      });
    }
  }

  function startGame() {
    lastMole = null;
    lastRand = null;
    if (gameHasStarted) {
      return;
    }
    setGameHasStarted(true);
    setScore(0);

    let x = 0;
    const intervalID = setInterval(async () => {
      displayMoles();
      if (++x === 16) {
        window.clearInterval(intervalID);
        setGameHasStarted(false);
        window.setTimeout(() => {
          setDisplay('none');
          setGameOver('block');
          setButtonMessage('Play Again');
          setButtonDisplay('inline-block');
          setTitleMargin('15px');
          clearMole();
        }, 850);
      }
    }, 700);
  }

  async function displayMoles() {
    let activeMole = String(Math.ceil(Math.random() * 9));
    let randNum =
      Math.ceil(Math.random() * 5) === 5
        ? Math.ceil(Math.random() * 4) + 4
        : Math.ceil(Math.random() * 4);

    if (lastMole === activeMole) {
      displayMoles();
      return;
    }
    if (lastMole && lastRand) {
      setState({
        ...state,
        [lastMole]: ['translate(0, 110%)', lastRand],
        [activeMole]: ['translate(0, 15%)', randNum],
      });
    } else {
      setState({
        ...state,
        [activeMole]: ['translate(0, 15%)', randNum],
      });
    }
    lastMole = activeMole;
    lastRand = randNum;
  }

  function lockOutClick() {
    window.setTimeout(() => {
      setMoleHasBeenWhacked(false);
    }, 350);
  }

  function createMoleHoles() {
    let holes = [];
    for (let i = 1; i <= 9; i++) {
      holes.push(
        <Subway
          // @ts-ignore
          holeNumber={state[i]}
          display={display}
          lastMole={lastMole}
          key={i}
          score={score}
          setScore={setScore}
        />
      );
    }
    return <div className="board">{holes}</div>;
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className={'flash-game'}>
          <div className="game">
            <h1 className="game__title" style={{ margin: titleMargin }}>
              Covid-19-Prevention
            </h1>
            <GameOver score={score} gameOver={gameOver} />
            <div className="game__button-container">
              <StartButton
                buttonDisplay={buttonDisplay}
                buttonMessage={buttonMessage}
                onClick={timeOut}
              />
            </div>
            {createMoleHoles()}
            <Score score={score} display={display} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
