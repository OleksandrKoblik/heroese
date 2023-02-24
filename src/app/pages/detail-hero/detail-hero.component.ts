import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../core/services/heroes.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.scss']
})
export class DetailHeroComponent implements OnInit {

  public hero: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((data) => this.heroesService.getHeroById(data['id']))
      )
      .subscribe((hero) => {
        this.hero = hero;
      });
  }

}
