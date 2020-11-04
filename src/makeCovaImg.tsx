import React, { memo, useContext, useEffect, useState } from 'react';
import cova1 from './image/cova1.png';
import cova2 from './image/cova2.png';
import cova3 from './image/cova3.png';
import { AppContext } from './App';


const MakeCovaImg = ({ style, index, name, isFlag, img }: any) => {
  const { plusOne, scoreMinusTwo }: { [index: string]: any } = useContext(AppContext);
  const [hit, setHit] = useState<boolean>(false);

  function imgClick() {
    if (isFlag) {
      setHit(true);
      plusOne();
    }
  }
  function maskClick() {
    if (isFlag) {
      setHit(true);
      scoreMinusTwo()
    }
  }

  useEffect(() => {
    if (hit) setTimeout(() => setHit(false), 1000);
  }, [hit]);

  if(img){
    return(
      <div style={style}>
        <div
          style={{
            width: 100,
            zIndex: 2 + name,
            marginLeft: 25,
          }}
        >
          <img
            src={hit ? cova3 : cova1}
            alt={'cova' + index}
            style={
              isFlag ? { zIndex: 2 + name, cursor: 'pointer' } :{ zIndex: 2 + name }
            }
            onClick={maskClick}
          />
        </div>
      </div>
    )
  }

  else return (
    <div style={style}>
      <div
        style={{
          width: 100,
          zIndex: 2 + name,
          marginLeft: 25,
        }}
      >
        <img
          src={hit ? cova1 : cova2}
          alt={'cova' + index}
          style={
            isFlag ? { zIndex: 2 + name, cursor: 'pointer' } :{ zIndex: 2 + name }
          }
          onClick={imgClick}
        />
      </div>
    </div>
  );
};

export default memo(MakeCovaImg);
