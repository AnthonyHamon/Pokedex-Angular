import { Component, inject, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Pokemon } from 'pokenode-ts';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {

  PokeService = inject(ApiService);

  @Input() pokemon!: Pokemon;

  constructor(){
  }
  
  formatPokemonId(id: number){
    return '#' + id.toString().padStart(3, '0');
  }

  formatPokemonName(name: string){
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

}
