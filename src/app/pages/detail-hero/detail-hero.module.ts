import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailHeroComponent } from './detail-hero.component';
import { RouterModule, Routes } from "@angular/router";
import {ButtonModule} from "../../core/components/button/button.module";

const routes: Routes = [
  {
    path: '',
    component: DetailHeroComponent
  }
]

@NgModule({
  declarations: [
    DetailHeroComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ButtonModule
    ]
})
export class DetailHeroModule { }
