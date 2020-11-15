import React, { useEffect } from 'react';

export default function Subway(props: any) {
  useEffect(() => {
    console.log(props.context, 'context');
  }, [props]);

  return (
    <div className="game__hole" style={{ display: props.context.display }}>
      <div className="game__whack">
        <div
          className={'game__mole'}
          onClick={props.onClick}
          style={{ WebkitTransform: props.context.holeNumber }}
        />
        <div className="game__mound" />
      </div>
    </div>
  );
}
