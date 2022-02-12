import { useState, useEffect } from 'react';
import { PokemonCardList } from './components/PokemonCardList';

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
      <PokemonCardList
        numberOfCards={numberOfCards}
        onValidClick={onValidClick}
        onInvalidClick={onInvalidClick}
      ></PokemonCardList>
    );
  } else {
    return (
      <div>
        Current Score: {currentScore}
        <br />
        Max Score: {maxScore}
      </div>
    );
  }
}

export default App;
