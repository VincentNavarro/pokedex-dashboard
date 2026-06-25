import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/pokemon.model';
import { setSearchTerm } from '../../store/pokemon.actions';
import { selectSearchTerm } from '../../store/pokemon.selectors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBarComponent implements OnInit {
  searchValue: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectSearchTerm).subscribe((term) => {
      this.searchValue = term;
    });
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.store.dispatch(setSearchTerm({ searchTerm: value }));
  }
}
