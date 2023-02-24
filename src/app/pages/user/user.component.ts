import { Component, OnInit } from '@angular/core';
import {Hero, PowerUps} from "../../core/interfaces/main-interface";
import {Router} from "@angular/router";
import {AddPowerUpsService} from "../../core/services/add-power-ups.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public selectedHeroesList: Hero[] = [];
  public bonusList: PowerUps[] = [];

  constructor(
    public router: Router,
    public powerUpsService: AddPowerUpsService,
  ) {
  }

  ngOnInit(): void {
    this.bonusList = JSON.parse(localStorage.getItem('power-ups') || '')
    if (localStorage.getItem('selected-heroes')) {
      this.selectedHeroesList = JSON.parse(localStorage.getItem('selected-heroes') || '');
    }
  }

  removeHero(id: string) {
    this.selectedHeroesList = this.selectedHeroesList.filter(hero => hero.id !== id)
    localStorage.setItem('selected-heroes',JSON.stringify(this.selectedHeroesList))
  }

  powerUpsUpd() {
    this.powerUpsService.powerUpsUpd()
  }
}
