import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroes',
  template: `      
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes" (click)=onSelect(hero)>
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <hr/>
      <hero-detail [hero]="selectedHero"></hero-detail>
  `
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  hero: Hero;
  selectedHero: Hero;

  constructor(
    private heroService: HeroService
  ) {
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


}