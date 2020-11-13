import React from 'react';

export default function StartButton({ onClick, buttonDisplay, buttonMessage }: any) {
  return (
    <button
      className="game__start-button"
      type="button"
      onClick={onClick}
      style={{ display: buttonDisplay }}
    >
      {buttonMessage}
    </button>
  );
}
