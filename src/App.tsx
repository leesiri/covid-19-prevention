import React, { useEffect, useState, useRef } from 'react';
import './App.css';
// @ts-ignore
import anime from 'animejs';
import Subway from './Components/Subway';
import GameOver from './Components/GameOver';
import StartButton from './Components/StartButton';
import Score from './Components/Score';

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
  const [shake, setShake] = useState('translate(0, 0)');
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [moleHasBeenWhacked, setMoleHasBeenWhacked] = useState(false);
  const [score, setScore] = useState(0);
  const [lastMole, setLastMole] = useState<number[]>([]);
  const [display, setDisplay] = useState('none');
  const [buttonMessage, setButtonMessage] = useState('Start Game');
  const [gameOver, setGameOver] = useState('none');
  const [buttonDisplay, setButtonDisplay] = useState('inline-block');
  const [titleMargin, setTitleMargin] = useState('15px');
  const [background, setBackground] = useState('');

  const gameOverRef = useRef(null);

  function animate(el: any) {
    anime({
      targets: el,
      direction: 'alternate',
      loop: true,
      easing: 'easeInQuad',
      duration: 1600,
      scale: function (el: any, i: any, l: any) {
        return l - i + 0.08;
      },
    });
  }

  function timeOut(num: number) {
    console.log('start');
    if (gameHasStarted) {
      return;
    }
    setButtonDisplay('none');
    setDisplay('block');
    setGameOver('none');
    setTitleMargin('0px');
    shakeScreen();
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
          animate(gameOverRef);
        }, 850);
      }
    }, 700);
  }

  function clearMoles() {
    for (let value in state) {
      if (!isNaN(Number(value))) {
        //다시볼것
        setState({
          ...state,
          [value]: 'translate(0, 110%)',
        });
      }
    }
  }

  function displayMoles() {
    let activeMole = Math.ceil(Math.random() * 9);
    if (lastMole[0] === activeMole) {
      displayMoles();
      return;
    }
    clearMoles();
    //다시볼것
    setState({
      ...state,
      [activeMole]: 'translate(0, 15%)',
    });
    setLastMole([activeMole]);
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
    target.parentNode.classList.add('game__cross');
    target.classList.add('no-background');
    lockOutClick();
    setBackground('75px');
    setMoleHasBeenWhacked(true);
    setScore(parseInt(String(score), 10) + 1);
    window.setTimeout(function () {
      target.parentNode.classList.remove('game__cross');
      target.classList.remove('no-background');
    }, 500);
  }

  function shakeScreen() {
    let posOrNeg = '+';
    let i = 0;
    let shake = () => {
      if (i === 15) {
        setShake('translate(0, 0)');
        return;
      }
      window.setTimeout(() => {
        posOrNeg = posOrNeg === '-' ? '+' : '-';
        setShake(`translate(${posOrNeg}${i}px, 0)`);
        shake();
      }, 80);
      i++;
    };
    shake();
  }

  function createMoleHoles() {
    let holes = [];
    for (let i = 1; i <= 9; i++) {
      holes.push(
        <Subway key={i} context={state} onClick={addToScore} holeNumber={i} />
      );
    }
    return <div className="board">{holes}</div>;
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="game" style={{ WebkitTransform: shake }}>
          <h1 className="game__title" style={{ margin: titleMargin }}>
            Covid-19-Prevention
          </h1>
          <GameOver context={state} />
          <div ref={gameOverRef} className="game__button-container">
            <StartButton buttonDisplay={buttonDisplay} buttonMessage={buttonMessage} onClick={timeOut} />
          </div>
          {createMoleHoles()}
          <Score context={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
