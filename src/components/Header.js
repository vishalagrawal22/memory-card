import { ScoreBoard } from './ScoreBoard';
import '../styles/Header.css';
import pokeball from '../images/pokeball.png';

function Header({ currentScore, maxScore }) {
  return (
    <header>
      <div className="header-info">
        <img className="logo" src={pokeball} alt="pokeball" />
        <div className="slogan">Gotta catch 'em all</div>
      </div>
      <ScoreBoard currentScore={currentScore} maxScore={maxScore} />
    </header>
  );
}

export { Header };
