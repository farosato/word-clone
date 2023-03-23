import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [analyzedGuesses, setAnalyzedGuesses] = React.useState([]);

  const isSolved = guesses.includes(answer);
  const isGameOver = isSolved || guesses.length >= NUM_OF_GUESSES_ALLOWED;

  function addGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    setGuesses([...guesses, guess]);
    setAnalyzedGuesses([...analyzedGuesses, checkGuess(guess, answer)]);
  }

  return (
    <>
      <GuessResults analyzedGuesses={analyzedGuesses} />
      <GuessInput guessHandler={addGuess} isDisabled={isGameOver} />
      {isGameOver && (
        <GameOverBanner
          isSolved={isSolved}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

function GameOverBanner({ isSolved, numOfGuesses, answer }) {
  if (isSolved) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Game;
