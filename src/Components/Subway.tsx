import React, { memo, useEffect, useState } from 'react';
const after = [
  require('../image/mole-hole.svg'),
  require('../image/mask-boy-left.png'),
  require('../image/mask-girl-left.png'),
  require('../image/mask-man-left.png'),
  require('../image/mask-woman-left.png'),
  require('../image/angry-boy-left.png'),
  require('../image/angry-girl-left.png'),
  require('../image/angry-man-left.png'),
  require('../image/angry-woman-left.png'),
];

const before = [
  require('../image/mole-hole.svg'),
  require('../image/none-boy-left.png'),
  require('../image/none-girl-left.png'),
  require('../image/none-man-left.png'),
  require('../image/none-woman-left.png'),
  require('../image/mask-boy-left.png'),
  require('../image/mask-girl-left.png'),
  require('../image/mask-man-left.png'),
  require('../image/mask-woman-left.png'),
];

const moleStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  height: '100%',
  transform: 'translate(0, 50%)',
  transition: 'all 0.4s',
  cursor: 'pointer',
};

function Subway({
  holeNumber,
  display,
  score,
  setScore,
}: {
  holeNumber: Array<number | null>;
  display: string;
  score: number;
  setScore: (e: number) => void;
}) {
  const [isClick, setIsClick] = useState(false);
  const customStyle = {
    ...moleStyle,
    background: 'none',
    WebkitTransform: String(holeNumber[0]) || '',
    cursor: isClick ? 'initial' : 'pointer',
  };

  useEffect(() => {
    if (isClick) {
      setTimeout(() => setIsClick(false), 500);
    }
  }, [isClick]);

  return (
    <div className="game__hole" style={{ display: display }} draggable={false}>
      <div className="game__whack">
        {isClick ? (
          <img
            alt={'clicked'}
            src={after[Number(holeNumber[1])]}
            style={customStyle}
            draggable={false}
          />
        ) : (
          <img
            alt={'none-click'}
            src={before[Number(holeNumber[1])]}
            onClick={() => {
              setIsClick(true);
              if (4 >= Number(holeNumber[1]) && Number(holeNumber[1]) >= 1) {
                setScore(parseInt(String(score), 10) + 1);
              } else if (Number(holeNumber[1]) >= 5) {
                setScore(parseInt(String(score), 10) - 2);
              }
            }}
            style={customStyle}
            draggable={false}
          />
        )}
        <div className="game__mound" draggable={false} />
      </div>
    </div>
  );
}

export default Subway;
