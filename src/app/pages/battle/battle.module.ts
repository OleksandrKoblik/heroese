import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle.component';
import { RouterModule, Routes } from "@angular/router";
import {HeroItemModule} from "../../core/components/hero-item/hero-item.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {PowerUpsModule} from "../../core/components/power-ups/power-ups.module";

const routes: Routes = [
  {
    path: '',
    component: BattleComponent
  }
]

@NgModule({
  declarations: [
    BattleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeroItemModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    PowerUpsModule
  ]
})
export class BattleModule { }
