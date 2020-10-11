import React, { useEffect, useState } from 'react';
import { useAnimate } from 'react-simple-animate';
import MakeCovaImg from './makeCovaImg';
import hole from './image/hole.png';
import cova1 from './image/cova1.png';

const styles: { [index: string]: any } = {
  textAlign: 'center',
  width: '30%',
  // border: '1px solid black',
};

function App() {
  const [downType, setDownType] = useState(false);
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
  }, [flag]);

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
      <br />
      <br />
      <br />
      <div className={'container'}>
        <div style={styles} className="columns">
          <div style={{ width: 150 }} className="column">
            <div style={{ padding: 0 }}>
              <div style={{ width: 150 }}>
                <img src={hole} alt={'hole' + 1} />
              </div>
              <MakeCovaImg
                style={
                  flag === 1 ? style : { transition: 'all 0.3s linear 0s' }
                }
                index={1}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div style={{ width: 150 }} className="column">
            <div
              style={{
                position: 'relative',
                padding: 0,
              }}
            >
              <div style={{ width: 150 }}>
                <img src={hole} alt={'hole' + 2} />
              </div>
              <MakeCovaImg
                style={
                  flag === 2 ? style : { transition: 'all 0.3s linear 0s' }
                }
                index={2}
              />
            </div>
          </div>
        </div>
      </div>
      {/*<table className="table is-bordered is-fullwidth">*/}
      {/*  <tbody>*/}
      {/*    <tr>*/}
      {/*      {[1, 2, 3].map((row) => (*/}
      {/*        */}
      {/*      ))}*/}
      {/*    </tr>*/}
      {/*  </tbody>*/}
      {/*</table>*/}
    </div>
  );
}

export default App;
