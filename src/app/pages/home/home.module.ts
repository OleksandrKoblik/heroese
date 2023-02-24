import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from "@angular/router";
import {HeaderModule} from "../../core/components/header/header.module";
import {HeroItemModule} from "../../core/components/hero-item/hero-item.module";
import {ReactiveFormsModule} from "@angular/forms";
import {InputModule} from "../../core/components/input/input.module";
import {ArrayLettersModule} from "../../core/components/array-letters/array-letters.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
        HeroItemModule,
        ReactiveFormsModule,
        InputModule,
        ArrayLettersModule,

    ]
})
export class HomeModule { }
