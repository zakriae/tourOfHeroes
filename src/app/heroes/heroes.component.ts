import { Component, OnInit } from '@angular/core';
import Hero  from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes?: Hero[];

  hero?: Hero; 

  constructor(private heroService: HeroService,
     private messageService: MessageService) { }

  ngOnInit(): void {

    this.hero = {
      id: 0,
      name: 'zakariae'
    }
    this.getHeroes();
  }

  // onClick(hero: Hero) : void {

  //   this.hero=hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }

  getHeroes(): void
  {  
     this.heroService.
     getHeroesService().
     subscribe(heroes => this.heroes=heroes);
  }
}
