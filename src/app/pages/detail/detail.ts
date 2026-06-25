import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Pokemon, AppState } from '../../models/pokemon.model';
import { loadPokemonDetail } from '../../store/pokemon.actions';
import { selectSelectedPokemon, selectLoading } from '../../store/pokemon.selectors';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class DetailComponent implements OnInit {
  pokemon$!: Observable<Pokemon | null>;
  loading$!: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.pokemon$ = this.store.select(selectSelectedPokemon);
    this.loading$ = this.store.select(selectLoading);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(loadPokemonDetail({ id }));
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
