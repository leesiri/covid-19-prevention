import React, { useEffect, useState, memo } from 'react';

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
        <img src={'cova1.png'} alt={'cova' + index} />
      </div>
    </div>
  );
};

export default memo(MakeCovaImg);
