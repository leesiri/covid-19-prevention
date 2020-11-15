import React from 'react';

export default function Score(props: any) {
  return (
    <div className="game__score" style={{ display: props.context.display }}>
      <h1>SCORE: {props.context.score}</h1>
    </div>
  )
}
