import { Component, Input, OnInit } from '@angular/core';
import Hero from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css', '../heroes/heroes.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  @Input()
  myHero?: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}
