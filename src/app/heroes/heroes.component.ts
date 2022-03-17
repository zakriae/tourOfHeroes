import { Component, OnInit } from '@angular/core';
import Hero  from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes = HEROES;

  hero?: Hero; 

  constructor() { 

  }

  ngOnInit(): void {

    this.hero = {
      id: 0,
      name: 'zakariae'
    }
  }

  onClick(hero: Hero) : void {
    console.log(hero);
    this.hero=hero;
  }

}
