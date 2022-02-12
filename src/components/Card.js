import { useState } from 'react';
import uniqid from 'uniqid';
import '../styles/Card.css';

function CardFactory(title, imageSrc) {
  const id = uniqid('card-');
  return { id, title, imageSrc };
}

function CardItem({ card, onCardClick }) {
  return (
    <li id={card.id} onClick={onCardClick}>
      <img src={card.imageSrc} alt={card.title} />
      <h3>{card.title}</h3>
    </li>
  );
}

function CardList({
  cards,
  shuffleCards,
  onValidClick,
  onInvalidClick,
  onFinish,
}) {
  const [expiredIds, setExpiredIds] = useState([]);
  function onCardClick(event) {
    const id = event.target.id;
    if (expiredIds.findIndex((expiredId) => id === expiredId) !== -1) {
      onInvalidClick();
    } else {
      shuffleCards();
      onValidClick();
      if (expiredIds.length + 1 === cards.length) {
        onFinish();
      } else {
        setExpiredIds([...expiredIds, id]);
      }
    }
  }

  return (
    <ul>
      {cards.map((card) => {
        return <CardItem key={card.id} card={card} onCardClick={onCardClick} />;
      })}
    </ul>
  );
}

export { CardFactory, CardItem, CardList };
