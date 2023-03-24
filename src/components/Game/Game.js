import React from 'react';
import clsx from 'clsx';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

function pickAnswer() {
  const answer = sample(WORDS);
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  return answer;
}

function Game() {
  const [answer, setAnswer] = React.useState(pickAnswer);
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

  function reset() {
    setGuesses([]);
    setAnalyzedGuesses([]);
    setAnswer(pickAnswer());
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
          resetHandler={reset}
        />
      )}
    </>
  );
}

function GameOverBanner({ isSolved, numOfGuesses, answer, resetHandler }) {
  let message;
  if (isSolved) {
    message = (
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    );
  } else {
    message = (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );
  }
  return (
    <div className={clsx('banner', isSolved ? 'happy' : 'sad')}>
      {message}
      <button className="reset-button" onClick={resetHandler}>
        <strong>Play again!</strong>
      </button>
    </div>
  );
}

export default Game;
