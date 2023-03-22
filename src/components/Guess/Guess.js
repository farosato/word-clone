import clsx from 'clsx';
import React from 'react';
import { WORD_LENGTH } from '../../constants';

function Guess({ value }) {
  const cells = value ?? new Array(WORD_LENGTH).fill(undefined);
  return (
    <p className="guess">
      {cells.map((char, index) => (
        <span className={clsx('cell', char && char.status)} key={index}>
          {char && char.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
