import React from 'react';

export default function GameOver({
  gameOver,
  score,
}: {
  gameOver: string;
  score: number;
}) {
  return (
    <div className="game__game-over" style={{ display: gameOver }}>
      <h1 className="game__game-over-header">GAME OVER!</h1>
      <p className="game__you-scored">You scored {score}</p>
    </div>
  );
}
