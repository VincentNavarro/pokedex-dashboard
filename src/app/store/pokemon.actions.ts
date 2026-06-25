import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';

export const loadPokemon = createAction('[Pokemon] Load Pokemon');
export const loadPokemonSuccess = createAction(
  '[Pokemon] Load Pokemon Success',
  props<{ pokemon: Pokemon[] }>(),
);
export const loadPokemonFailure = createAction(
  '[Pokemon] Load Pokemon Failure',
  props<{ error: string }>(),
);

export const setSearchTerm = createAction(
  '[Pokemon] Set Search Term',
  props<{ searchTerm: string }>(),
);
export const setActiveFilter = createAction(
  '[Pokemon] Set Active Filter',
  props<{ filter: string | null }>(),
);

export const loadPokemonDetail = createAction('[Pokemon] Load Detail', props<{ id: number }>());
export const loadPokemonDetailSuccess = createAction(
  '[Pokemon] Load Detail Success',
  props<{ pokemon: Pokemon }>(),
);
