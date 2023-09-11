import React from 'react';

// Status component displays game status messages
const Status = ({ remainingAttempts, isGameOver }) => {
  return (
    <div className="status">
      {/* Display appropriate message based on whether the game is over */}
      {isGameOver ? (
        <p>{remainingAttempts === 0 ? 'You lost the game!' : 'Congratulations! You won!'}</p>
      ) : (
        <p>Remaining Attempts: {remainingAttempts}</p>
      )}
    </div>
  );
};

export default Status;
