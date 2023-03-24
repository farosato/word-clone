import React from 'react';
import { WORD_LENGTH } from '../../constants';
import OnScreenKeyboard from '../OnScreenKeyboard';

function GuessInput({ guessHandler, isDisabled }) {
  const INIT_GUESS = '';
  const [tentativeGuess, setTentativeGuess] = React.useState(INIT_GUESS);

  function handleTentativeGuessSubmit(event) {
    event.preventDefault();
    guessHandler(tentativeGuess);
    setTentativeGuess(INIT_GUESS);
  }

  function onKeyPress(key) {
    switch (key) {
      case '⏎':
        return;
      case '⌫':
        setTentativeGuess(tentativeGuess.slice(0, -1));
        return;
      default:
        if (tentativeGuess.length >= WORD_LENGTH) return;
        setTentativeGuess(tentativeGuess + key.toUpperCase());
        return;
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleTentativeGuessSubmit}>
      <label htmlFor="guess-input">
        {`Enter guess (${WORD_LENGTH} letters)`}:
      </label>
      <input
        id="guess-input"
        type="text"
        disabled={isDisabled}
        autoFocus={true}
        pattern={`^[A-Za-z]{${WORD_LENGTH}}$`} // minLength doesn't work
        maxLength={WORD_LENGTH}
        required={true} // pattern alone still allows empty string submissions
        title={`Enter exactly ${WORD_LENGTH} letters.`}
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
      <OnScreenKeyboard onKeyPress={onKeyPress} />
    </form>
  );
}

export default GuessInput;
