import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PokemonState } from '../models/pokemon.model';

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemon');

export const selectAllPokemon = createSelector(selectPokemonState, (state) => state.list);

export const selectLoading = createSelector(selectPokemonState, (state) => state.loading);

export const selectError = createSelector(selectPokemonState, (state) => state.error);

export const selectSearchTerm = createSelector(selectPokemonState, (state) => state.searchTerm);

export const selectActiveFilter = createSelector(selectPokemonState, (state) => state.activeFilter);

export const selectSelectedPokemon = createSelector(selectPokemonState, (state) => state.selected);

export const selectFilteredPokemon = createSelector(
  selectAllPokemon,
  selectSearchTerm,
  selectActiveFilter,
  (pokemon, searchTerm, activeFilter) => {
    return pokemon
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter((p) => (activeFilter ? p.types.includes(activeFilter) : true));
  },
);
