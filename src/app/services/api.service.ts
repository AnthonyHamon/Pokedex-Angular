import { Injectable } from '@angular/core';
import { PokemonClient, MainClient, GameClient, POKEDEXES, PokemonEntry, Pokedex } from 'pokenode-ts';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = new PokemonClient();
  pokedex = new GameClient();

  pokemonCount: number = 0;
  pokemonsList:any = [];
  loadedPokemons:any = [];
  query:number = 0;

  constructor() {
    this.getAllPokemonsDatas();    
  }

  async getAllPokemonsDatas() {
    try{
      const pokedex = await this.pokedex.getPokedexById(POKEDEXES.NATIONAL);
      this.pokemonCount = (pokedex).pokemon_entries.length;
      const data = await this.api.listPokemons(0, this.pokemonCount);
      for (const pokemon of data.results){
        const pokemonData = await this.returnPokemonData(pokemon.name);
        this.pokemonsList.push(pokemonData);
        console.log(pokemonData);
      }
    } catch(error) {
      console.log(error);
    }
  }

  async getQueryPokemons(query: number = 0, limit:number = 50) {
    try{
      const data = await this.api.listPokemons(query, limit);
      for (const pokemon of data.results){
        const pokemonData = await this.returnPokemonData(pokemon.name);
        this.loadedPokemons.push(pokemonData);
      }
      console.log(this.loadedPokemons);
    }catch(error) {
      console.log(error);
    }
  }

  async returnPokemonData(pokemonName:any){
      const pokemonData = await this.api.getPokemonByName(pokemonName);
      return pokemonData;
      }
}
