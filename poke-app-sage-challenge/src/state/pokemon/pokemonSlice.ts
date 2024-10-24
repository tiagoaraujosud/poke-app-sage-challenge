import { createSlice } from "@reduxjs/toolkit";

interface Ability {
    ability: {
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

interface PokemonState {
    name: string;
    sprites: {
        front_default: string;
    };
    height: number;
    weight: number;
    types: Type[],
    abilities: Ability[];
}

const initialState: PokemonState = {
    name: "",
    sprites: {
        front_default: "",
    },
    height: 0,
    weight: 0,
    types: [],
    abilities: []
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        saveNamePokemon: (state, action) => {
            state.name = action.payload.name;
        },
    },
});

export const { saveNamePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;