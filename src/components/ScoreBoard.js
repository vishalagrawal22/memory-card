import '../styles/ScoreBoard.css';

function ScoreBoard({ currentScore, maxScore }) {
  return (
    <div className="score-board">
      <div className="current-score score">Current Score: {currentScore}</div>
      <div className="max-score score">Max Score: {maxScore}</div>
    </div>
  );
}

export { ScoreBoard };
