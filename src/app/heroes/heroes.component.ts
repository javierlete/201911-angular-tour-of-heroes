import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
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
    console.log('Voy a llamar a getHeroes');
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
      // (heroes) => {
      //   console.log('Ha llegado la respuesta');
      //   this.seHanRecibidoHeroes(heroes);
      // }
    );
    console.log('He terminado de llamar a getHeroes');

    console.log(this.heroes);
  }


  // VERSIÓN 5
  seHanRecibidoHeroes = (heroesRecibidos: Hero[]) => {
    console.log('seHanRecibidoHeroes', this);
    this.heroes = heroesRecibidos;
  }

  // VERSIÓN 1
  // seHanRecibidoHeroes(heroesRecibidos: Hero[]) {
  //   console.log(this);
  //   this.heroes = heroesRecibidos;
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(
      () => this.heroes = this.heroes.filter(h => h !== hero)
    );
  }
}
