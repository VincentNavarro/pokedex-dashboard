import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/pokemon.model';
import { setActiveFilter } from '../../store/pokemon.actions';
import { selectActiveFilter } from '../../store/pokemon.selectors';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss',
})
export class FilterBarComponent implements OnInit {
  activeFilter: string | null = null;

  types: string[] = [
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
  ];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectActiveFilter).subscribe((filter) => {
      this.activeFilter = filter;
    });
  }

  setFilter(type: string | null): void {
    this.activeFilter = type;
    this.store.dispatch(setActiveFilter({ filter: type }));
  }
}
