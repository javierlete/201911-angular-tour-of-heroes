import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  // get<T>(url): Observable<T> {
  //   return of({} as T);
  // }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero);
  }

  deleteHero(hero: Hero): Observable<Hero> {
    return this.http.delete<Hero>(`${this.heroesUrl}/${hero.id}`);
  }
}
