import React from 'react';

// Word component displays the secret word, revealing guessed letters
const Word = ({ word, guessedLetters }) => {
  return (
    <div className="word">
      {/* Map through each letter in the secret word */}
      {word.split('').map((letter, index) => (
        <span key={index} className="word-letter">
          {/* Display guessed letter if it's in guessedLetters, else display '_' */}
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default Word;
