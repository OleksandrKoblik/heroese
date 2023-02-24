import { Injectable } from '@angular/core';
import {HeroesService} from "./heroes.service";

@Injectable({
  providedIn: 'root'
})
export class AddPowerUpsService {

  constructor(public heroesService: HeroesService) { }

  powerUpsUpd() {
    if (localStorage.getItem('power-ups')) {
      let oldDate2 = +(new Date(JSON.parse(localStorage.getItem('use-date') || '')))
      let oldDate = new Date(+oldDate2 + 10800*1000)
      let nowDate = new Date()
      if (nowDate > oldDate) {
        localStorage.removeItem('power-ups')
        localStorage.setItem('power-ups', JSON.stringify(this.heroesService.powerUps));
        location.reload()
      } else {
        alert('Please tru again latter')
      }
    } else {
      localStorage.setItem('power-ups', JSON.stringify(this.heroesService.powerUps));
    }
  }
}
