import React from 'react';
import { WORD_LENGTH } from '../../constants';

function GuessInput({ guessHandler }) {
  const INIT_GUESS = '';
  const [tentativeGuess, setTentativeGuess] = React.useState(INIT_GUESS);

  function handleTentativeGuessSubmit(event) {
    event.preventDefault();
    console.log({ tentativeGuess });
    guessHandler(tentativeGuess);
    setTentativeGuess(INIT_GUESS);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleTentativeGuessSubmit}>
      <label htmlFor="guess-input">
        {`Enter guess (${WORD_LENGTH} letters)`}:
      </label>
      <input
        id="guess-input"
        type="text"
        pattern={`^[A-Za-z]{${WORD_LENGTH}}$`} // minLength doesn't work
        maxLength={WORD_LENGTH}
        required={true} // pattern alone still allows empty string submissions
        title={`Enter exactly ${WORD_LENGTH} letters.`}
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
    </form>
  );
}

export default GuessInput;
