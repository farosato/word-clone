import React from 'react';
import { WORD_LENGTH } from '../../constants';

function GuessInput() {
  const INIT_GUESS = '';
  const [guess, setGuess] = React.useState(INIT_GUESS);

  function handleGuessSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess(INIT_GUESS);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
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
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
