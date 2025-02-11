import { Component, inject, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-overview.component.html',
  styleUrl: './pokemon-overview.component.scss'
})
export class PokemonOverviewComponent implements OnInit {

  pokemonData: any;
  pokemonSpecies: any;
  
  api = inject(ApiService);

  male = false;
  female = false;
  genderless = false;


  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.currentPokemon.subscribe(data => {
      this.pokemonData = data;
    });
    this.navigationService?.currentSpecies.subscribe(data => {
      this.pokemonSpecies = data;
      this.getPokemonGender(this.pokemonSpecies?.gender_rate);
    });
  }

  getPokemonGender(genderRate: number) {
    if (genderRate === -1) {
      this.isGenderless();
    } if (genderRate >= 0 && genderRate <= 7 && genderRate >= 1 && genderRate <= 8) {
      this.isBothGender()
    } 
    if(genderRate === 0) {
      this.isOnlyMale();
    }
    if(genderRate === 8) {
    this.isOnlyFemale()
    }
  }
  
  isOnlyMale(){
    this.male = true;
    this.female = false;
  }

  isOnlyFemale(){
    this.female = true;
    this.male = false;
  }

  isGenderless(){
    this.genderless = true;
    this.male = false;
    this.female = false;
  }

  isBothGender(){
    this.male = true;
    this.female = true;
    this.genderless = false;
  }

  // getPokemonGender(genderRate: number, genderType: string): boolean {
  //   if (genderRate === undefined) return false;

  //   if (genderType === 'male') return genderRate >= 0 && genderRate <= 7;
  //   if (genderType === 'female') return genderRate >= 1 && genderRate <= 8;
  //   if (genderType === 'genderless') return genderRate === -1;

  //   return false;
  // }


}
