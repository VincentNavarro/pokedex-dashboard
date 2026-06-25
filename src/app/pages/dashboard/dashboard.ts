import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Pokemon, AppState } from '../../models/pokemon.model';
import { loadPokemon } from '../../store/pokemon.actions';
import { selectFilteredPokemon, selectLoading, selectError } from '../../store/pokemon.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent implements OnInit {
  pokemon$!: Observable<Pokemon[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pokemon$ = this.store.select(selectFilteredPokemon);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.store.dispatch(loadPokemon());
  }
}
