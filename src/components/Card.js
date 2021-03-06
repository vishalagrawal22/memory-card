import { useState } from 'react';
import uniqid from 'uniqid';
import '../styles/Card.css';

function CardFactory(title, imageSrc) {
  const id = uniqid('card-');
  return { id, title, imageSrc };
}

function CardItem({ card, onCardClick }) {
  return (
    <li className="card" id={card.id} onClick={onCardClick}>
      <img src={card.imageSrc} alt={card.title} />
      <h3>{card.title}</h3>
    </li>
  );
}

function CardList({ cards, shuffleCards, onValidClick, onInvalidClick }) {
  const [expiredIds, setExpiredIds] = useState([]);
  function onCardClick(event) {
    const id = event.target.id;
    if (expiredIds.findIndex((expiredId) => id === expiredId) !== -1) {
      onInvalidClick();
    } else {
      shuffleCards();
      onValidClick();
      setExpiredIds([...expiredIds, id]);
    }
  }

  return (
    <main>
      <ul className="card-list">
        {cards.map((card) => {
          return (
            <CardItem key={card.id} card={card} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </main>
  );
}

export { CardFactory, CardItem, CardList };
