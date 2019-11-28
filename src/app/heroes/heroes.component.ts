import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  selectedHero: Hero;

  heroes: Hero[] = HEROES;

  onSelect(hero: Hero) {
    console.log('onSelect', hero);
    this.selectedHero = hero;
  }
}
