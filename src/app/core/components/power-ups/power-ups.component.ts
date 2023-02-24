import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';


import {Hero, PowerUps} from "../../interfaces/main-interface";

@Component({
  selector: 'app-power-ups',
  templateUrl: './power-ups.component.html',
  styleUrls: ['./power-ups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PowerUpsComponent implements OnInit {

  @Input() bonus!: PowerUps;
  public myHero!: Hero;
  public bonusList: PowerUps[] = [];

  ngOnInit(): void {
    this.myHero = JSON.parse(localStorage.getItem('selected-hero') || '')
    this.bonusList = JSON.parse(localStorage.getItem('power-ups') || '')
  }

  public addPowerUps() {
    if (this.bonus.quantity > 0) {
      if (localStorage.getItem('selected-hero')) {
        switch (this.bonus.param) {
          case 'speed':
            this.myHero = JSON.parse(localStorage.getItem('selected-hero') || '')
            this.myHero.powerstats.speed = String(Number(this.myHero.powerstats.speed) + Number(this.bonus.stats));
            this.bonus.quantity = this.bonus.quantity - 1;
            localStorage.setItem('power-ups', JSON.stringify([this.bonus, this.bonusList[1], this.bonusList[2], this.bonusList[3], this.bonusList[4], this.bonusList[5]]))
            localStorage.setItem('selected-hero', JSON.stringify(this.myHero))
            localStorage.setItem('use-date', JSON.stringify(new Date()))
            break;
          case 'intelligence':
            this.myHero = JSON.parse(localStorage.getItem('selected-hero') || '')
            this.myHero.powerstats.intelligence = String(Number(this.myHero.powerstats.intelligence) + Number(this.bonus.stats));
            this.bonus.quantity = this.bonus.quantity - 1;
            localStorage.setItem('power-ups', JSON.stringify([this.bonusList[0], this.bonus, this.bonusList[2], this.bonusList[3], this.bonusList[4], this.bonusList[5]]))
            localStorage.setItem('selected-hero', JSON.stringify(this.myHero))
            localStorage.setItem('use-date', JSON.stringify(new Date()))
            break;
          case 'combat':
            this.myHero = JSON.parse(localStorage.getItem('selected-hero') || '')
            this.myHero.powerstats.combat = String(Number(this.myHero.powerstats.combat) + Number(this.bonus.stats));
            this.bonus.quantity = this.bonus.quantity - 1;
            localStorage.setItem('power-ups', JSON.stringify([this.bonusList[0], this.bonusList[1], this.bonus, this.bonusList[3], this.bonusList[4], this.bonusList[5]]))
            localStorage.setItem('selected-hero', JSON.stringify(this.myHero))
            localStorage.setItem('use-date', JSON.stringify(new Date()))
            break;
          case 'strength':
            this.myHero = JSON.parse(localStorage.getItem('selected-hero') || '')
            this.myHero.powerstats.strength = String(Number(this.myHero.powerstats.strength) + Number(this.bonus.stats));
            this.bonus.quantity = this.bonus.quantity - 1;
            localStorage.setItem('power-ups', JSON.stringify([this.bonusList[0], this.bonusList[1], this.bonusList[2], this.bonus, this.bonusList[4], this.bonusList[5]]))
            localStorage.setItem('selected-hero', JSON.stringify(this.myHero))
            localStorage.setItem('use-date', JSON.stringify(new Date()))
            break;
          case 'durability':
            this.myHero = JSON.parse(localStorage.getItem('selected-hero') || '')
            this.myHero.powerstats.durability = String(Number(this.myHero.powerstats.durability) + Number(this.bonus.stats));
            this.bonus.quantity = this.bonus.quantity - 1;
            localStorage.setItem('power-ups', JSON.stringify([this.bonusList[0], this.bonusList[1], this.bonusList[2], this.bonusList[3], this.bonus, this.bonusList[5]]))
            localStorage.setItem('selected-hero', JSON.stringify(this.myHero))
            localStorage.setItem('use-date', JSON.stringify(new Date()))
            break;
          case 'power':
            this.myHero = JSON.parse(localStorage.getItem('selected-hero') || '')
            this.myHero.powerstats.power = String(Number(this.myHero.powerstats.power) + Number(this.bonus.stats));
            this.bonus.quantity = this.bonus.quantity - 1;
            localStorage.setItem('power-ups', JSON.stringify([this.bonusList[0], this.bonusList[1], this.bonusList[2], this.bonusList[3], this.bonusList[4], this.bonus]))
            localStorage.setItem('selected-hero', JSON.stringify(this.myHero))
            localStorage.setItem('use-date', JSON.stringify(new Date()))
            break;
        }
      }
    }
  }
}


