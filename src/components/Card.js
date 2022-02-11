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

function CardList({ cards, onCardClick }) {
  return (
    <ul>
      {cards.map((card) => {
        return <CardItem key={card.id} card={card} onCardClick={onCardClick} />;
      })}
    </ul>
  );
}

export { CardFactory, CardItem, CardList };
