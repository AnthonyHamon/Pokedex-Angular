import { Component } from '@angular/core';
import { SearchbarComponent } from "./searchbar/searchbar.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

}
