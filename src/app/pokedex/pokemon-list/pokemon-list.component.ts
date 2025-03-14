import { Component, inject } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { ApiService } from '../../services/api.service';
import { PokemonSorterComponent } from './pokemon-sorter/pokemon-sorter.component';
import { NavigationService } from '../../services/navigation.service';
import { Pokemon } from 'pokenode-ts';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonSorterComponent, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {


  pokeService = inject(ApiService);
  navigationService = inject(NavigationService);
  query = this.pokeService.query;

  constructor() {
    this.pokeService.getQueryPokemons(this.query);
  }

  async renderPokemonInformations(data: Pokemon) {
    this.navigationService.renderPokemonInformations(data);

  }

  
}
