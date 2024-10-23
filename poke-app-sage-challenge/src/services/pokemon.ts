import axios from 'axios';

interface Ability {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }

  interface Form {
    name: string;
    url: string;
  }

  interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }

  interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }

export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    height: number;
    id: number;
    name: string;
    order: number;
    stats: Stat[];
    types: Type[];
    weight: number;
  }

export const getPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
    return response.data.results;
  } catch (error) {
    throw new Error('Error fetching Pokemon list');
  }
};
