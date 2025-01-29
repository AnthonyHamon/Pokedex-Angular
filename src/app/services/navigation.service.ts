import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private dataSource = new BehaviorSubject<string>('');
  currentPokemon = this.dataSource.asObservable();

  renderPokemonInformations(data: string) {
    this.dataSource.next(data);
  }

}
