import { useState, useEffect } from 'react';
import { PokemonCardList } from './components/PokemonCardList';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('ongoing');

  function onValidClick() {
    setCurrentScore((prevScore) => prevScore + 1);
  }

  function onInvalidClick() {
    setGameStatus('game over');
  }

  function onFinish() {
    setGameStatus('game finished');
  }

  useEffect(() => {
    setMaxScore((maxScore) => Math.max(maxScore, currentScore));
  }, [currentScore]);

  if (gameStatus === 'ongoing') {
    return (
      <PokemonCardList
        numberOfCards={12}
        gameNumber={1}
        onValidClick={onValidClick}
        onInvalidClick={onInvalidClick}
        onFinish={onFinish}
      ></PokemonCardList>
    );
  } else {
    return (
      <div>
        Game Status: {gameStatus}
        <br />
        Current Score: {currentScore}
        <br />
        Max Score: {maxScore}
      </div>
    );
  }
}

export default App;
