import { createReducer, on } from '@ngrx/store';
import { PokemonState } from '../models/pokemon.model';
import * as PokemonActions from './pokemon.actions';

export const initialState: PokemonState = {
  list: [],
  selected: null,
  loading: false,
  error: null,
  searchTerm: '',
  activeFilter: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemon, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PokemonActions.loadPokemonSuccess, (state, { pokemon }) => ({
    ...state,
    loading: false,
    list: pokemon,
  })),
  on(PokemonActions.loadPokemonFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(PokemonActions.setSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  })),
  on(PokemonActions.setActiveFilter, (state, { filter }) => ({
    ...state,
    activeFilter: filter,
  })),
  on(PokemonActions.loadPokemonDetailSuccess, (state, { pokemon }) => ({
    ...state,
    selected: pokemon,
  })),
);
