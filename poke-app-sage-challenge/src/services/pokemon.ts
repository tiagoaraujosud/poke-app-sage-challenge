import axios from 'axios';
import { Pokemon } from './pokemontypes';

export const getPokemonList = async (): Promise<Pokemon> => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
      return response.data; // Retorna o Pokémon com base na interface definida
    } catch (error) {
      throw new Error('Error fetching Pokémon details');
    }
  };