import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon, PokemonListItem } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 151): Observable<Pokemon[]> {
    return this.http
      .get<{ results: PokemonListItem[] }>(`${this.baseUrl}/pokemon?limit=${limit}`)
      .pipe(
        switchMap((response) => {
          const detailRequests = response.results.map((item) => this.getPokemonDetail(item.url));
          return forkJoin(detailRequests);
        }),
      );
  }

  getPokemonDetail(urlOrId: string | number): Observable<Pokemon> {
    const url =
      typeof urlOrId === 'string' && urlOrId.startsWith('http')
        ? urlOrId
        : `${this.baseUrl}/pokemon/${urlOrId}`;

    return this.http.get<any>(url).pipe(
      map((data) => ({
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map((t: any) => t.type.name),
        stats: data.stats.map((s: any) => ({
          name: s.stat.name,
          value: s.base_stat,
        })),
        height: data.height,
        weight: data.weight,
      })),
    );
  }
}
