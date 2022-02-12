import { useState, useEffect } from 'react';
import { EndScreen } from './components/EndScreen';
import { GameDisplay } from './components/GameDisplay';
import './styles/common.css';

function App() {
  const numberOfCards = 12;
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [gameStatus, setGameStatus] = useState({
    isPending: true,
    clearedAll: false,
  });

  function onValidClick() {
    setCurrentScore((prevScore) => prevScore + 1);
  }

  function onInvalidClick() {
    setGameStatus((gameStatus) => {
      return { ...gameStatus, isPending: false, clearedAll: false };
    });
  }

  function startNewGame() {
    setCurrentScore(0);
    setGameStatus({
      isPending: true,
      clearedAll: false,
    });
  }

  useEffect(() => {
    setMaxScore((maxScore) => Math.max(maxScore, currentScore));
  }, [currentScore]);

  useEffect(() => {
    if (currentScore === numberOfCards) {
      setGameStatus((gameStatus) => {
        return { ...gameStatus, isPending: false, clearedAll: true };
      });
    }
  }, [currentScore]);

  if (gameStatus.isPending) {
    return (
      <>
        <GameDisplay
          currentScore={currentScore}
          maxScore={maxScore}
          numberOfCards={numberOfCards}
          onValidClick={onValidClick}
          onInvalidClick={onInvalidClick}
        />
      </>
    );
  } else {
    return (
      <EndScreen
        currentScore={currentScore}
        maxScore={maxScore}
        startNewGame={startNewGame}
        gameStatus={gameStatus}
      />
    );
  }
}

export default App;
