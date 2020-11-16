import React, { useState } from 'react';
import './App.css';
import Subway from './Components/Subway';
import GameOver from './Components/GameOver';
import StartButton from './Components/StartButton';
import Score from './Components/Score';

let lastMole: null | number = null;

function App() {
  const [state, setState] = useState({
    1: 'translate(0, 110%)',
    2: 'translate(0, 110%)',
    3: 'translate(0, 110%)',
    4: 'translate(0, 110%)',
    5: 'translate(0, 110%)',
    6: 'translate(0, 110%)',
    7: 'translate(0, 110%)',
    8: 'translate(0, 110%)',
    9: 'translate(0, 110%)',
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

  function startGame() {
    if (gameHasStarted) {
      return;
    }
    setGameHasStarted(true);
    setScore(0);

    let x = 0;
    const intervalID = setInterval(() => {
      displayMoles();
      if (++x === 16) {
        window.clearInterval(intervalID);
        clearMoles();
        setGameHasStarted(false);
        window.setTimeout(() => {
          setDisplay('none');
          setGameOver('block');
          setButtonMessage('Play Again');
          setButtonDisplay('inline-block');
          setTitleMargin('15px');
        }, 850);
      }
    }, 700);
  }

  function clearMoles() {
    for (let value in state) {
      if (!isNaN(Number(value))) {
        setState({
          ...state,
          [value]: 'translate(0, 110%)',
        });
      }
    }
  }

  function displayMoles() {
    let activeMole = Math.ceil(Math.random() * 9);
    if (lastMole === activeMole) {
      displayMoles();
      return;
    }
    clearMoles();
    setState({
      ...state,
      [activeMole]: 'translate(0, 15%)',
    });
    lastMole = activeMole;
  }

  function lockOutClick() {
    window.setTimeout(() => {
      setMoleHasBeenWhacked(false);
    }, 350);
  }

  function addToScore(e: any) {
    if (moleHasBeenWhacked) {
      return;
    }
    let target = e.target;
    target.parentNode.classList.add('game__cross1');
    target.classList.add('no-background');
    lockOutClick();
    setMoleHasBeenWhacked(true);
    setScore(parseInt(String(score), 10) + 1);
    window.setTimeout(function () {
      target.parentNode.classList.remove('game__cross1');
      target.classList.remove('no-background');
    }, 500);
  }

  function createMoleHoles() {
    let holes = [];
    for (let i = 1; i <= 9; i++) {
      holes.push(
        <Subway
          onClick={addToScore}
          // @ts-ignore
          holeNumber={state[i]}
          display={display}
          maskFlag={1}
          key={i}
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

// 9개의 구멍을 만든다 (컴포넌트)
// 시작 버튼 누르면 0.7초마다 랜덤숫자(1~9)를 생성해 해당 컴포넌트를 올리고 다른 컴포넌트를 내린다.
// 15번이 반복되면 end
