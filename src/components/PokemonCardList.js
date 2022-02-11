import { useEffect, useState } from 'react';
import { getDistinctNumberArrayInRange } from './helper-functions';
import { CardFactory, CardList } from './Card';

function PokemonCardList({ numberOfCards, gameNumber }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function getPokemonCards(ids) {
      const promises = ids.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      );
      const responses = await Promise.all(promises);
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      const pokemonCards = data.map((pokemon) =>
        CardFactory(pokemon.species.name, pokemon.sprites.front_default)
      );
      return pokemonCards;
    }

    async function fetchPokemonData() {
      // TODO: make numberOfPokemons dynamic instead of hardcoded
      const numberOfPokemons = 800;
      const ids = getDistinctNumberArrayInRange(
        1,
        numberOfPokemons,
        numberOfCards
      );
      const pokemonCards = await getPokemonCards(ids);
      setCards(pokemonCards);
    }
    fetchPokemonData();
  }, [numberOfCards, gameNumber]);
  return <CardList cards={cards} onCardClick={(e) => console.log(e)} />;
}

export { PokemonCardList };
