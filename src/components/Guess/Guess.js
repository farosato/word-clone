import React from 'react';
import { WORD_LENGTH } from '../../constants';

function Guess({ value }) {
  const cells = value
    ? value.split('')
    : new Array(WORD_LENGTH).fill(undefined);
  return (
    <p className="guess">
      {cells.map((char, index) => (
        <span className="cell" key={index}>
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
