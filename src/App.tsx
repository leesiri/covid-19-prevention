import React, { useEffect, useState } from 'react';
import { useAnimate } from 'react-simple-animate';
import BoxContainer from './boxContainer';

const styles: { [index: string]: any } = {
  textAlign: 'center',
  width: '30%',
  // border: '1px solid black',
};

function App() {
  // eslint-disable-next-line
  const [downType, setDownType] = useState(false);
  // eslint-disable-next-line
  const { play, style, isPlaying } = useAnimate({
    start: {
      transform: 'translateY(-130px)',
      // transform: downType ? 'translateY(-300px)' : 'translateY(-200px)',
    },
    end: {},
    // end: { transform: downType ? 'translateY(-200px)' : 'translateY(-300px)' },
  });
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    play(false);
  }, [flag, play]);

  // useEffect(() => {
  //   if (downType) {
  //     setTimeout(() => {
  //       play(!isPlaying);
  //       setDownType(false);
  //     }, 1000);
  //   }
  // }, [downType]);

  return (
    <div className="App">
      <div style={{ top: 100, right: 20, position: 'fixed' }}>
        <button className={'button'} onClick={() => setFlag(1)}>
          1번
        </button>
        <button className={'button'} onClick={() => setFlag(2)}>
          2번
        </button>
        <button className={'button'} onClick={() => setFlag(3)}>
          3번
        </button>
      </div>
      <div className={'container'} style={{ margin: '100px auto 0' }}>
        <div style={styles} className="columns">
          <BoxContainer flag={flag} style={style} name={1} />
          <BoxContainer flag={flag} style={style} name={2} />
          <BoxContainer flag={flag} style={style} name={3} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={styles} className="columns">
          <BoxContainer flag={flag} style={style} name={4} />
          <BoxContainer flag={flag} style={style} name={5} />
          <BoxContainer flag={flag} style={style} name={6} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={styles} className="columns">
          <BoxContainer flag={flag} style={style} name={7} />
          <BoxContainer flag={flag} style={style} name={8} />
          <BoxContainer flag={flag} style={style} name={9} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={styles} className="columns">
          <BoxContainer flag={flag} style={style} name={10} />
          <BoxContainer flag={flag} style={style} name={10} />
          <BoxContainer flag={flag} style={style} name={10} />
        </div>
      </div>
    </div>
  );
}

export default App;
