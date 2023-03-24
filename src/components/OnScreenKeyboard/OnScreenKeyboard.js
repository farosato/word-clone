import React from 'react';

function OnScreenKeyboard({ onKeyPress }) {
  const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['⏎', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
  ];
  return (
    <div className="keyboard">
      {keyboard.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((char, charIndex) => (
            <button
              className="keyboard-key"
              key={charIndex}
              type={char === '⏎' ? 'submit' : 'button'}
              onClick={() => onKeyPress(char)}
            >
              {char}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OnScreenKeyboard;
