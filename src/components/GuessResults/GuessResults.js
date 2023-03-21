import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ guesses }) {
  const rows = guesses.concat(
    new Array(NUM_OF_GUESSES_ALLOWED - guesses.length).fill(undefined)
  );
  return (
    <div className="guess-results">
      {rows.map((guess, index) => (
        <Guess className="guess" key={index} value={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
