import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function addGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      alert('Out of guesses. Start a new game!');
      return;
    }
    setGuesses([...guesses, checkGuess(guess, answer)]);
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput guessHandler={addGuess} />
    </>
  );
}

export default Game;
