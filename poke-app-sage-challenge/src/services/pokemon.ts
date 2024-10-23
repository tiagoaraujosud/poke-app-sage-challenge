import axios from 'axios';

export interface Pokemon {
  name: string;
  url: string;
}

export const getPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
    return response.data.results;
  } catch (error) {
    throw new Error('Error fetching Pokemon list');
  }
};
