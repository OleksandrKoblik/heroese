import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from "@angular/router";
import {HistoryTableModule} from "../../core/components/history-table/history-table.module";
import {MatTabsModule} from "@angular/material/tabs";
import {HeroItemModule} from "../../core/components/hero-item/hero-item.module";
import {PowerUpsModule} from "../../core/components/power-ups/power-ups.module";
import {ButtonModule} from "../../core/components/button/button.module";

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  }
]

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HistoryTableModule,
    MatTabsModule,
    HeroItemModule,
    PowerUpsModule,
    ButtonModule
  ]
})
export class UserModule { }
