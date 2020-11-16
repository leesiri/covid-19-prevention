import React from 'react';
import noneBoyLeft from '../image/none-boy-left.png';

let randNum: number = 0;
function setRandNum() {
  randNum = Math.ceil(Math.random() * 2);
}

export default function Subway({
  holeNumber,
  display,
  onClick,
  maskFlag,
}: {
  holeNumber: string;
  display: string;
  onClick: any;
  maskFlag: number;
}) {
  setRandNum();

  return (
    <div className="game__hole" style={{ display: display }}>
      <div className="game__whack">
        <div
          className={'game__mole' + 1}
          onClick={onClick}
          style={{ WebkitTransform: holeNumber }}
        />
        <div className="game__mound" />
      </div>
    </div>
  );
}
