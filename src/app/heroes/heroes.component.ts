import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[];

  // private heroService: HeroService;

  // constructor(heroService: HeroService) {
  constructor(private heroService: HeroService) {
    // this.heroService = heroService;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      // VERSIÓN 1
      // this.seHanRecibidoHeroes.bind(this)

      // VERSIÓN 2
      // (function(heroesRecibidos: Hero[]) {
      //   console.log(this);
      //   this.heroes = heroesRecibidos;
      // }).bind(this)

      // VERSIÓN 3
      // heroesRecibidos => {
      //   console.log(this);
      //   this.heroes = heroesRecibidos;
      // }

      // VERSIÓN 4
      // (heroesRecibidos: Hero[]) => this.heroes = heroesRecibidos

      // VERSIÓN 5
      this.seHanRecibidoHeroes
    );
  }


  // VERSIÓN 5
  seHanRecibidoHeroes = (heroesRecibidos: Hero[]) => {
    console.log(this);
    this.heroes = heroesRecibidos;
  }

  // VERSIÓN 1
  // seHanRecibidoHeroes(heroesRecibidos: Hero[]) {
  //   console.log(this);
  //   this.heroes = heroesRecibidos;
  // }
}
