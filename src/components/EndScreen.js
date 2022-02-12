import '../styles/EndScreen.css';
import { Overlay } from './Overlay';

function EndScreen({ currentScore, maxScore, startNewGame, gameStatus }) {
  return (
    <Overlay>
      <div className="end-screen-container">
        <div className="end-screen">
          <p>
            You caught {gameStatus.clearedAll ? 'all' : currentScore} pokemons
            in this game.
          </p>
          {currentScore === maxScore ? (
            <p>You created a new high score!</p>
          ) : null}
          <p>Your maximum score is {maxScore} pokemons.</p>
          <button onClick={startNewGame}>New Game</button>
        </div>
      </div>
    </Overlay>
  );
}

export { EndScreen };
