import React from 'react';
import MakeCovaImg from './makeCovaImg';
import hole1 from './image/hole.png';
import hole2 from './image/hole2.png';

export default function BoxContainer({
  flag,
  style,
  name,
}: {
  flag: any;
  style: any;
  name: number;
}) {
  if (name === 10) {
    return (
      <div style={{ width: 150 }} className="column">
        <div style={{ padding: 0 }}>
          <div
            className={`box${name}`}
            style={{
              width: 150,
              margin: '0 30px',
              padding: 0,
              position: 'relative',
            }}
          >
            <div
              className={'front'}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1 + name,
                width: 150,
                height: 150,
                backgroundColor: 'white',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ width: 150 }} className="column">
      <div style={{ padding: 0 }}>
        <div
          className={`box${name}`}
          style={{
            width: 150,
            margin: '0 30px',
            padding: 0,
            position: 'relative',
          }}
        >
          <div
            className={'front'}
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 + name }}
          >
            <img src={hole1} alt={'hole' + 1} />
          </div>

          <div
            style={{
              position: 'absolute',
              top: 160,
              left: 0,
              zIndex: 2 + name,
            }}
          >
            <MakeCovaImg
              style={
                flag === name
                  ? style
                  : { transition: 'all 0.3s linear 0s', zIndex: 2 + name }
              }
              index={1}
              name={name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
