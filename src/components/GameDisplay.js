import { Footer } from './Footer';
import { Header } from './Header';
import { InfoList } from './InfoList';
import { PokemonCardList } from './PokemonCardList';
import '../styles/GameDisplay.css';

function GameDisplay({
  currentScore,
  maxScore,
  numberOfCards,
  onValidClick,
  onInvalidClick,
}) {
  return (
    <div className="game-display">
      <Header currentScore={currentScore} maxScore={maxScore} />
      <InfoList />
      <PokemonCardList
        numberOfCards={numberOfCards}
        onValidClick={onValidClick}
        onInvalidClick={onInvalidClick}
      ></PokemonCardList>
      <Footer />
    </div>
  );
}

export { GameDisplay };
