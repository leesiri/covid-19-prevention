import React, { memo, useContext } from 'react';
import cova1 from './image/cova1.png';
import { AppContext } from './App';

const MakeCovaImg = ({ style, index, name }: any) => {
  const { plusOne }: { [index: string]: any } = useContext(AppContext);

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
          src={cova1}
          alt={'cova' + index}
          style={{ zIndex: 2 + name, cursor: 'pointer' }}
          onClick={plusOne}
        />
      </div>
    </div>
  );
};

export default memo(MakeCovaImg);
