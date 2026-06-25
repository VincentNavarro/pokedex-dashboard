import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss',
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  constructor(private router: Router) {}

  navigateToDetail(): void {
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}
