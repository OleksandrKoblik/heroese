import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AllHeroResponse, AuthUser, PowerUps} from "../interfaces/main-interface";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public authUser: AuthUser[] = [];
  public powerUps: PowerUps[] = [
    {
      imgUrl: 'https://i.ibb.co/SPKPNjQ/Flash-boots.png',
      param: "speed",
      quantity: 5,
      stats: 10,
      title: "Flash boots (speed +10)"
    },
    {
      imgUrl: "https://i.ibb.co/YyGsrQP/dr-strange.png",
      param: "intelligence",
      quantity: 5,
      stats: 10,
      title: "Dr. Strange's cloak (intelligence + 10)"
    },
    {
      imgUrl: "https://i.ibb.co/cxnnNZk/pngwing-com.webp",
      param: "combat",
      quantity: 5,
      stats: 10,
      title: "Ironman nano armor (combat + 10)"
    },
    {
      imgUrl: "https://i.ibb.co/bd89JK9/Green-lantern-s-ring.png",
      param: "strength",
      quantity: 5,
      stats: 10,
      title: "Green lantern's ring (strength +10)"
    },
    {
      imgUrl:"https://i.ibb.co/TBTPk52/Captain-Americ.png",
      param: "durability",
      quantity: 5,
      stats: 10,
      title: "Captain America shield (durability +10)"
    },
    {
      imgUrl: "https://i.ibb.co/mv73qQZ/Mjolnir.png",
      param: "power",
      quantity: 5,
      stats: 10,
      title: "Mjolnir (power +10)"
    },
  ]

  constructor(private httpClient: HttpClient) { }

  public getSearchedHeroes(heroName: string): Observable<AllHeroResponse> {
    return this.httpClient.get<AllHeroResponse>(`https://www.superheroapi.com/api.php/2138823296314202/search/${heroName}`)
  }

  public getHeroById(heroId: string): Observable<AllHeroResponse> {
    return this.httpClient.get<AllHeroResponse>(`https://www.superheroapi.com/api.php/2138823296314202/${heroId}`);
  }

  public getEnemyById(randomEnemy: number): Observable<AllHeroResponse> {
    return this.httpClient.get<AllHeroResponse>(`https://www.superheroapi.com/api.php/2138823296314202/${randomEnemy}`);
  }
}
