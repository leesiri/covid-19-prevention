import React, { useEffect, useState, createContext } from 'react';

import Container from './container';
import Start from './start';

export const AppContext = createContext({});

function App() {
  const setFlag = (e: number) => {
    setState((prevState) => {
      return { ...prevState, flag: e };
    });
  };
  const plusOne = () => {
    setState((prevState) => {
      return { ...prevState, score: prevState.score + 1 };
    });
    setFlag(0);
  };
  const scoreZero = () => {
    setState((prevState) => {
      return { ...prevState, score: 0 };
    });
    setFlag(0);
  };
  const setUiStatus = (e: 'init' | 'ing') => {
    setState((prevState) => {
      return { ...prevState, uiStatus: e };
    });
    setFlag(0);
  };

  const initState = {
    score: 0,
    plusOne,
    scoreZero,
    flag: 0,
    setFlag,
    uiStatus: 'init',
    setUiStatus,
  };
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (state.score > 10) {
      alert('10점 !');
      setUiStatus('init');
    }
    // eslint-disable-next-line
  }, [state.score]);

  return (
    <AppContext.Provider value={state}>
      <div
        className="App"
        style={
          state.uiStatus === 'init'
            ? { background: 'black', height: '100vh', overflow: 'hidden' }
            : {}
        }
      >
        {state.uiStatus === 'init' ? <Start /> : <Container />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
