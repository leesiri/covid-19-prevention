import React, { useEffect, useState, memo } from 'react';
import cova1 from './image/cova1.png';

const MakeCovaImg = ({ style, index }: any) => {
  return (
    <div style={style}>
      <div
        style={{
          width: 100,
          zIndex: 2,
          marginLeft: 25,
        }}
      >
        <img src={cova1} alt={'cova' + index} />
      </div>
    </div>
  );
};

export default memo(MakeCovaImg);
