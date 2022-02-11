import { CardFactory } from '../components/Card';

describe('tests for CardFactory', () => {
  test('Card object has correct title and imageSrc', () => {
    const card = CardFactory('example card name', 'www.example.com');
    expect(card.title).toBe('example card name');
    expect(card.imageSrc).toBe('www.example.com');
  });
});
