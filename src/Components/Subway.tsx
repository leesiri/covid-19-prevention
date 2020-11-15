import React from 'react';

export default function Subway({ display, onClick, holeNumber }: any) {
  return (
    <div className="game__hole" style={{ display: display }}>
      <div className="game__whack">
        <div
          className={'game__mole'}
          onClick={onClick}
          style={{ WebkitTransform: holeNumber }}
        />
        <div className="game__mound" />
      </div>
    </div>
  );
}
