import React from 'react';

export default function Score({
  display,
  score,
}: {
  display: string;
  score: number;
}) {
  return (
    <div className="game__score" style={{ display: display }}>
      <h1>SCORE: {score}</h1>
    </div>
  );
}
