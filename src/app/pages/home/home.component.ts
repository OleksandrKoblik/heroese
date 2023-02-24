import { Component, OnInit } from '@angular/core';
import {Hero} from "../../core/interfaces/main-interface";
import {HeroesService} from "../../core/services/heroes.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public heroesList: Hero[] = [];
  public searchControl: FormControl = new FormControl('');
  public lettersBox: boolean = true

  constructor(public heroesService: HeroesService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('power-ups')){
      localStorage.setItem('power-ups', JSON.stringify(this.heroesService.powerUps));
    }
    if (!localStorage.getItem('selected-hero')){
      this.heroesService.getEnemyById(Math.round(Math.random() * 500)).subscribe((data) => {
        localStorage.setItem('selected-hero', JSON.stringify(data));
      })
    }
    this.heroesService.authUser = JSON.parse(localStorage.getItem('session') || '');
  }

  public searchHeroes(): void {
    if (this.searchControl.value) {
      this.heroesService.getSearchedHeroes(this.searchControl.value)
        .subscribe((searchedHeroes) => {
          this.heroesList = searchedHeroes.results
          console.log(searchedHeroes.results);
        })
    }
  }

  public letterSearch(letter: string) {
    this.heroesService.getSearchedHeroes(letter)
      .subscribe((searchedHeroes) => {
        this.heroesList = searchedHeroes.results
      })
  }
}


