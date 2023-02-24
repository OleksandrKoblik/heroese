import { Component, OnInit } from '@angular/core';
import {Hero, PowerUps} from "../../core/interfaces/main-interface";
import {HeroesService} from "../../core/services/heroes.service";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  public myHero!: Hero;
  public enemy: any = {};
  public battleResult: any = {};
  public bonusList: PowerUps[] = [];
  public match: boolean = false

  constructor(
    private heroesService: HeroesService,
  ) {
  }


  ngOnInit(): void {
    this.myHero = JSON.parse(localStorage.getItem('selected-hero') || '')
    this.bonusList = JSON.parse(localStorage.getItem('power-ups') || '')
    this.heroesService.getEnemyById(Math.round(Math.random() * 500)).subscribe((data) => {
      this.enemy = data;
    })
  }

  public getRandomEnemy(): void {
    this.heroesService.getEnemyById(Math.round(Math.random() * 500)).subscribe((data) => {
      this.enemy = data;
    })
  }

  public battle(): void {
    this.match = true
    setTimeout(() => {
      let sumHero = +(this.myHero.powerstats.combat) +
        +(this.myHero.powerstats.durability) +
        +(this.myHero.powerstats.intelligence) +
        +(this.myHero.powerstats.power) +
        +(this.myHero.powerstats.speed) +
        +(this.myHero.powerstats.strength);
      let sumEnemy = +(this.enemy.powerstats.combat) +
        +(this.enemy.powerstats.durability) +
        +(this.enemy.powerstats.intelligence) +
        +(this.enemy.powerstats.power) +
        +(this.enemy.powerstats.speed) +
        +(this.enemy.powerstats.strength);
      if (sumHero > sumEnemy) {
        this.battleResult = {
          battleTime: new Date(),
          heroName: this.myHero.name,
          opponentName: this.enemy.name,
          result: 'Win',
        }
      } else {
        this.battleResult = {
          battleTime: new Date(),
          heroName: this.myHero.name,
          opponentName: this.enemy.name,
          result: 'False',
        }
      }
      if (localStorage.getItem('history-list')) {
        let results = JSON.parse(localStorage.getItem('history-list') || '');
        localStorage.setItem('history-list', JSON.stringify([...results, this.battleResult]))
      } else {
        localStorage.setItem('history-list', JSON.stringify([this.battleResult]))
      }
      this.match = false
    }, 2000)
  }

  ngDoCheck(): void {
    this.myHero = JSON.parse(localStorage.getItem('selected-hero') || '')
  }
}
