export interface PokemonStat {
  name: string;
  value: number;
}

export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  types: string[];
  stats: PokemonStat[];
  height: number;
  weight: number;
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface AppState {
  pokemon: PokemonState;
}

export interface PokemonState {
  list: Pokemon[];
  selected: Pokemon | null;
  loading: boolean;
  error: string | null;
  searchTerm: string;
  activeFilter: string | null;
}
