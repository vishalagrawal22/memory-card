import uniqid from 'uniqid';

function CardFactory(title, imageSrc) {
  const id = uniqid('card-');
  return { id, title, imageSrc };
}

export { CardFactory };
