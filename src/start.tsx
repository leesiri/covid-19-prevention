import React, { useContext } from 'react';
import { AppContext } from './App';
export default function Start() {
  const { setUiStatus }: { [index: string]: any } = useContext(AppContext);

  function handleStart() {
    setUiStatus('ing');
  }

  return (
    <>
      <div
        style={{
          paddingTop:100,
          textAlign: 'center',
          fontSize: 50,
          fontWeight: 'bold',
          color: "whitesmoke",
        }}
      >
        COVID-19-Prevention
      </div>
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
