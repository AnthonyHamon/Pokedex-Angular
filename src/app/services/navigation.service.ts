import { inject, Injectable } from '@angular/core';
import { Pokemon, PokemonSpecies } from 'pokenode-ts';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  pokeService = inject(ApiService);


  private pokemonDataSource = new BehaviorSubject<Pokemon | undefined>(undefined);
  currentPokemon = this.pokemonDataSource.asObservable();

  private speciesDataSource = new BehaviorSubject<PokemonSpecies | undefined>(undefined);
  currentSpecies = this.speciesDataSource.asObservable();

  renderPokemonInformations(data: Pokemon) {
    this.getPokemonMainInformations(data);
    this.getPokemonSpeciesInformations(data);
  }

  getPokemonMainInformations(data: Pokemon) {
    this.pokemonDataSource.next(data);
  }

  async getPokemonSpeciesInformations(data: Pokemon) {
    const species = await this.pokeService.getPokemonSpecies(data);
    this.speciesDataSource.next(species);
  }

}
