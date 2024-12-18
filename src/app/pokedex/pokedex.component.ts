import { Component, inject, Input } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { ApiService } from '../services/api.service';
import { PokemonClient } from 'pokenode-ts';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [PokemonCardComponent, HeaderComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

  PokeService = inject(ApiService);
  query = this.PokeService.query;

  constructor(){
    this.PokeService.getQueryPokemons(this.query);
  }



}
