import React, { useContext } from 'react';
import { AppContext } from './App';
export default function Start() {
  const { score,scoreZero, setUiStatus }: { [index: string]: any } = useContext(
    AppContext
  );

  function handleStart() {
    setUiStatus('ing');
    scoreZero()
  }

  return (
    <>
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
          fontSize: 50,
          fontWeight: 'bold',
          color: 'whitesmoke',
        }}
      >
        COVID-19-Prevention
      </div>
      {score > 0 && (
        <div
          style={{
            margin: 100,
            float: 'right',
            fontSize: 20,
            color: 'white',
          }}
        >
          {'이전점수 : ' + score}
        </div>
      )}

      <div className={'container'} style={{ padding: '35vh 0' }}>
        <div className="box">
          <button
            className={'box'}
            style={{ width: '50vw', margin: '0 auto' }}
            onClick={handleStart}
          >
            Game Start
          </button>
        </div>
      </div>
    </>
  );
}
