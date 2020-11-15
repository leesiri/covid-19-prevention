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
    shake: 'translate(0, 0)',
    gameHasStarted: false,
    moleHasBeenWhacked: false,
    score: 0,
    lastMole: [],
    display: 'none',
    buttonMessage: 'Start Game',
    gameOver: 'none',
    buttonDisplay: 'inline-block',
    titleMargin: '15px',
    background: '',
  });

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
    if (state.gameHasStarted) {
      return;
    }
    setState({
      ...state,
      buttonDisplay: 'none',
      display: 'block',
      gameOver: 'none',
      titleMargin: '0px',
    });
    shakeScreen();
    window.setTimeout(() => {
      startGame();
    }, num);
  }

  function startGame() {
    if (state.gameHasStarted) {
      return;
    }

    setState({
      ...state,
      gameHasStarted: true,
      score: 0,
    });

    let x = 0;
    const intervalID = setInterval(() => {
      displayMoles();
      if (++x === 16) {
        window.clearInterval(intervalID);
        clearMoles();
        setState({ ...state, gameHasStarted: false });
        window.setTimeout(() => {
          setState({
            ...state,
            display: 'none',
            gameOver: 'block',
            buttonMessage: 'Play again',
            buttonDisplay: 'inline-block',
            titleMargin: '15px',
          });
          animate(gameOverRef);
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
    if (state.lastMole[0] === activeMole) {
      displayMoles();
      return;
    }
    clearMoles();
    // @ts-ignore
    setState({
      ...state,
      [activeMole]: 'translate(0, 15%)',
      //@ts-ignore
      lastMole: [activeMole],
    });
  }

  function lockOutClick() {
    window.setTimeout(() => {
      setState({ ...state, moleHasBeenWhacked: false });
    }, 350);
  }

  function addToScore(e: any) {
    if (state.moleHasBeenWhacked) {
      return;
    }
    let target = e.target;
    target.parentNode.classList.add('game__cross');
    target.classList.add('no-background');
    lockOutClick();
    setState({
      ...state,
      background: '75px',
      moleHasBeenWhacked: true,
      score: parseInt(String(state.score), 10) + 1,
    });
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
        setState({ ...state, shake: 'translate(0, 0)' });
        return;
      }
      window.setTimeout(() => {
        posOrNeg = posOrNeg === '-' ? '+' : '-';
        setState({ ...state, shake: `translate(${posOrNeg}${i}px, 0)` });
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
        <div className="game" style={{ WebkitTransform: state['shake'] }}>
          <h1 className="game__title" style={{ margin: state.titleMargin }}>
            WHACK-A-MOLE
          </h1>
          <GameOver context={state} />
          <div ref={gameOverRef} className="game__button-container">
            <StartButton context={state} onClick={timeOut} />
          </div>
          {createMoleHoles()}
          <Score context={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
