import {Component, Input} from '@angular/core';
import {Hero} from "../../interfaces/main-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {

  @Input() hero!: Hero;

  constructor(public router: Router) { }

  public detailInfo(): void {
    if (this.hero.id) {
      this.router.navigate(['/detail-hero', this.hero.id])
    }
  }

  public selectHeroes(): void {
    if (localStorage.getItem('selected-heroes')) {
      let selectedHeroes = JSON.parse(localStorage.getItem('selected-heroes') || '');
      localStorage.setItem('selected-heroes', JSON.stringify([...selectedHeroes, this.hero]))
    } else {
      localStorage.setItem('selected-heroes', JSON.stringify([this.hero]))
    }
  }

  public selectHero() {
    localStorage.setItem('selected-hero', JSON.stringify(this.hero))
    if (this.router.url === '/battle') {
      location.reload()
    }
    this.router.navigate(['/battle']);
  }

}
