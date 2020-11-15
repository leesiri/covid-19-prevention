import React from 'react';

export default function GameOver(props: any) {

  return (
    <div className="game__game-over" style={{ display: props.context.gameOver }}>
      <h1 className="game__game-over-header" >GAME OVER!</h1>
      <p className="game__you-scored">You scored { props.context.score }/15</p>
    </div>
  )
}
