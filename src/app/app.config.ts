import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { pokemonReducer } from './store/pokemon.reducer';
import { PokemonEffects } from './store/pokemon.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ pokemon: pokemonReducer }),
    provideEffects([PokemonEffects]),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
