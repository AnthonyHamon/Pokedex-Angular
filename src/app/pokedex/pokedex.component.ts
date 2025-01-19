import { Component} from '@angular/core';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';



@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [TopBarComponent, PokemonListComponent, PokemonOverviewComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

 



}
