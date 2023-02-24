import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthUser} from "../../interfaces/main-interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {
  }

  public authUser:AuthUser = JSON.parse(localStorage.getItem('session') || '');

  public logout(): void {
    if (localStorage.getItem('session')){
      localStorage.removeItem('session')
      this.router.navigate(['/login'])
    }
  }

}
