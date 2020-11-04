import React, {memo, useContext, useEffect, useState} from 'react';
import cova1 from './image/cova1.png';
import cova2 from './image/cova2.png';
import { AppContext } from './App';

const MakeCovaImg = ({ style, index, name,flag }: any) => {
  const { plusOne }: { [index: string]: any } = useContext(AppContext);
  const [hit, setHit] = useState<boolean>(false);

  function imgClick (){
    console.log(flag,name)
    if(flag === name){
      setHit(true);
      plusOne()
    }
  }

  return (
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
            hit ? { zIndex: 2 + name } : { zIndex: 2 + name, cursor: 'pointer' }
          }
          onClick={imgClick}
        />
      </div>
    </div>
  );
};

export default memo(MakeCovaImg);
