import { Component, Input, OnInit } from '@angular/core';
import Hero from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css', '../heroes/heroes.component.css']
})
export class HeroDetailComponent implements OnInit {
  
    @Input()
    myHero: Hero | undefined;
    
    constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location) { }

    ngOnInit(): void {
      this.getHero();
    }

    getHero(): void {

      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService.getHero(id)
        .subscribe(hero => this.myHero = hero);
    }

    goBack(): void {

      this.location.back();
    }



}
