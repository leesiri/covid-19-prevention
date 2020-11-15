import React from 'react';

export default function Subway({
  holeNumber,
  display,
  onClick,
}: {
  holeNumber: string;
  display: string;
  onClick: any;
}) {
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
