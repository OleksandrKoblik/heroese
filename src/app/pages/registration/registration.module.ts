import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from "@angular/router";
import {InputModule} from "../../core/components/input/input.module";
import {GetControlModule} from "../../core/pipes/get-control.module";
import {ButtonModule} from "../../core/components/button/button.module";

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
]

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
    GetControlModule,
    ButtonModule
  ]
})
export class RegistrationModule { }
