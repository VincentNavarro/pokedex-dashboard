import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { PokemonService } from '../services/pokemon.service';
import * as PokemonActions from './pokemon.actions';

@Injectable()
export class PokemonEffects {
  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemon),
      switchMap(() =>
        this.pokemonService.getPokemonList().pipe(
          map((pokemon) => PokemonActions.loadPokemonSuccess({ pokemon })),
          catchError((error) => of(PokemonActions.loadPokemonFailure({ error: error.message }))),
        ),
      ),
    ),
  );

  loadPokemonDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemonDetail),
      switchMap(({ id }) =>
        this.pokemonService.getPokemonDetail(id).pipe(
          map((pokemon) => PokemonActions.loadPokemonDetailSuccess({ pokemon })),
          catchError((error) => of(PokemonActions.loadPokemonFailure({ error: error.message }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,
  ) {}
}
