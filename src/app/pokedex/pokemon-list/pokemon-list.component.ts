import { Component, inject } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { ApiService } from '../../services/api.service';
import { PokemonSorterComponent } from './pokemon-sorter/pokemon-sorter.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonSorterComponent, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {


  PokeService = inject(ApiService);
  query = this.PokeService.query;

  constructor() {
    this.PokeService.getQueryPokemons(this.query);
  }

  
}
