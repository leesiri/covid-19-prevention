import React, { useEffect } from 'react';

export default function StartButton(props: any) {
  useEffect(() => {
    console.log(props.context.buttonDisplay, 'buttonDisplay');
  }, [props]);

  return (
    <button
      className="game__start-button"
      type="button"
      onClick={props.onClick}
      style={{ display: props.context.buttonDisplay }}
    >
      {props.context.buttonMessage}
    </button>
  );
}
