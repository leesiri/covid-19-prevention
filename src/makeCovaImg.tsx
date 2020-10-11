import React, { memo } from 'react';
import cova1 from './image/cova1.png';

const MakeCovaImg = ({ style, index, name }: any) => {
  return (
    <div style={style}>
      <div
        style={{
          width: 100,
          zIndex: 2 + name,
          marginLeft: 25,
        }}
      >
        <img src={cova1} alt={'cova' + index} style={{ zIndex: 2 + name }} />
      </div>
    </div>
  );
};

export default memo(MakeCovaImg);
