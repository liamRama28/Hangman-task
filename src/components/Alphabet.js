import React from 'react';

// Alphabet component displays clickable letter buttons for user interaction
const Alphabet = ({ guessedLetters, onClick }) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="alphabet">
      {/* Map through each letter in the alphabet */}
      {letters.map(letter => (
        <button
          key={letter}
          className={`letter ${guessedLetters.includes(letter) ? 'disabled' : ''}`}
          onClick={() => onClick(letter)} // Call onClick function when button is clicked
          disabled={guessedLetters.includes(letter)} // Disable button if letter has already been guessed
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Alphabet;

