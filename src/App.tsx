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
  const setUiStatus = (e: 'init' | 'ing') => {
    setState((prevState) => {
      return { ...prevState, uiStatus: e };
    });
    setFlag(0);
  };

  const initState = {
    score: 0,
    plusOne,
    flag: 0,
    setFlag,
    uiStatus: 'init',
    setUiStatus,
  };
  const [state, setState] = useState(initState);
  // eslint-disable-next-line
  const [downType, setDownType] = useState(false);

  // useEffect(() => {
  //   if (downType) {
  //     setTimeout(() => {
  //       play(!isPlaying);
  //       setDownType(false);
  //     }, 1000);
  //   }
  // }, [downType]);

  return (
    <AppContext.Provider value={state}>
      <div
        className="App"
        style={
          state.uiStatus === 'init'
            ? { background: 'black', height: '100vh', overflow:'hidden' }
            : {}
        }
      >
        {state.uiStatus === 'init' ? <Start /> : <Container />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
