import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/pokemon.model';
import { setSearchTerm } from '../../store/pokemon.actions';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBarComponent {
  constructor(private store: Store<AppState>) {}

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.store.dispatch(setSearchTerm({ searchTerm: value }));
  }
}
