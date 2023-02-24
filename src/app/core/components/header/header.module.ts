import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {RouterLink} from "@angular/router";
import {ButtonModule} from "../button/button.module";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
