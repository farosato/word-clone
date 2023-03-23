import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ analyzedGuesses }) {
  const rows = analyzedGuesses.concat(
    new Array(NUM_OF_GUESSES_ALLOWED - analyzedGuesses.length).fill(undefined)
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
