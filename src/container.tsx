import React, { useContext, useEffect, useState } from 'react';
import BoxContainer from './boxContainer';
import { useAnimate } from 'react-simple-animate';
import { AppContext } from './App';

const styles: { [index: string]: any } = {
  textAlign: 'center',
  width: '30%',
};

const randImg = () => {
  let imgNumber = Math.floor(Math.random() * 9) + 1;
  if([0,1].includes(imgNumber) ) return true;
  else return false
};

export default function Container() {
  // eslint-disable-next-line
  const [testNumber, setTestNumber] = useState<number>(0);
  const [isMask, setIsMask]= useState<boolean>(false)
  const {
    score,
    flag,
    setFlag,
    setUiStatus,
  }: { [index: string]: any } = useContext(AppContext);

  // eslint-disable-next-line
  const { play, style, isPlaying } = useAnimate({
    start: {
      transform: 'translateY(-130px)',
      // transform: downType ? 'translateY(-300px)' : 'translateY(-200px)',
    },
    end: {},
    // end: { transform: downType ? 'translateY(-200px)' : 'translateY(-300px)' },
  });

  const rand = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

  useEffect(() => {
    play(false);
  }, [flag, play]);

  const makeInter = () => {
    let nnn = rand();
    setIsMask(randImg)
    // @ts-ignore
    setTestNumber((prev: number) => {
      if (prev === nnn) {
        nnn = rand()
      }
      else {
        setFlag(nnn);
        return nnn;
      }
    });
  };

  useEffect(() => {
    setInterval(makeInter, 1000);
    // eslint-disable-next-line
  }, []);

  function handleInit() {
    setUiStatus('init');
  }

  return (
    <div className={'container'} style={{ padding: '10vw 20vh' }}>
      <div style={{ fontWeight: 'bold', fontSize: 40 }}>
        <div style={{ float: 'right' }}>{score}</div>
      </div>
      <div style={styles} className="columns">
        <BoxContainer flag={flag} style={style} name={1} img={isMask}/>
        <BoxContainer flag={flag} style={style} name={2} img={isMask}/>
        <BoxContainer flag={flag} style={style} name={3} img={isMask}/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={styles} className="columns">
        <BoxContainer flag={flag} style={style} name={4} img={isMask}/>
        <BoxContainer flag={flag} style={style} name={5} img={isMask}/>
        <BoxContainer flag={flag} style={style} name={6} img={isMask}/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={styles} className="columns">
        <BoxContainer flag={flag} style={style} name={7} img={isMask}/>
        <BoxContainer flag={flag} style={style} name={8} img={isMask}/>
        <BoxContainer flag={flag} style={style} name={9} img={isMask}/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={styles} className="columns">
        <BoxContainer flag={flag} style={style} name={10} img={isMask}/>
        <BoxContainer flag={flag} style={style} name={10} img={isMask}/>
        <BoxContainer flag={flag} style={style} name={10} img={isMask}/>
      </div>
      <br />
      <br />
      <button
        className={'button'}
        style={{ zIndex: 99, width: '50vw', margin: '0 auto' }}
        onClick={handleInit}
      >
        종료
      </button>
    </div>
  );
}
