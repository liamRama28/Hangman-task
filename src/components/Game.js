import React, { Component } from 'react';
import Word from './Word';
import Alphabet from './Alphabet';
import Status from './Status';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    // Initialize the game state
    this.state = {
      word: 'hangman', // The secret word to guess
      guessedLetters: [], // Letters guessed by the player
      remainingAttempts: 6, // Number of attempts remaining
      helpLetter: null, // Store the revealed help letter
      isHelpUsed: false, // Track if help has been used
    };
  }

  // Handle when the player clicks on a letter
  handleLetterClick = (letter) => {
    if (!this.state.guessedLetters.includes(letter)) {
      const { word, guessedLetters, remainingAttempts } = this.state;

      if (!word.includes(letter)) {
        // Update state if the guessed letter is incorrect
        this.setState({
          guessedLetters: [...guessedLetters, letter],
          remainingAttempts: remainingAttempts - 1,
        });
      } else {
        // Update state if the guessed letter is correct
        this.setState({ guessedLetters: [...guessedLetters, letter] });
      }
    }
  };

  // Restart the game
  restartGame = () => {
    // Reset the game state
    this.setState({
      guessedLetters: [],
      remainingAttempts: 6,
      helpLetter: null,
      isHelpUsed: false,
    });
  };

  // Reveal a help letter
  revealHelpLetter = () => {
    if (!this.state.isHelpUsed) {
      const { word, guessedLetters } = this.state;
      const unguessedLetters = word.split('').filter(letter => !guessedLetters.includes(letter));
      const randomIndex = Math.floor(Math.random() * unguessedLetters.length);
      const helpLetter = unguessedLetters[randomIndex];

      // Update state with the revealed help letter
      this.setState({
        helpLetter,
        isHelpUsed: true,
      });
    }
  };

  render() {
    const { word, guessedLetters, remainingAttempts } = this.state;
    const isGameOver = word.split('').every((letter) => guessedLetters.includes(letter)) || remainingAttempts === 0;

    return (
      <div className="game">
        <h1>Hangman Game</h1>
        {/* Render the Word, Alphabet, and Status components */}
        <Word word={word} guessedLetters={guessedLetters} />
        <Alphabet guessedLetters={guessedLetters} onClick={this.handleLetterClick} />
        <Status remainingAttempts={remainingAttempts} isGameOver={isGameOver} />
        {/* Restart Game button */}
        <button onClick={this.restartGame} disabled={!isGameOver}>
          Restart Game
        </button>
        {/* Display help letter if available */}
        {this.state.helpLetter && (
          <p className="help-letter">
            Need help? Try the letter: {this.state.helpLetter}
          </p>
        )}
        {/* Request Help button */}
        <button onClick={this.revealHelpLetter} disabled={this.state.isHelpUsed}>
          Request Help
        </button>
      </div>
    );
  }
}

export default Game;
