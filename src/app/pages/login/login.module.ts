import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule, Routes} from "@angular/router";
import {InputModule} from "../../core/components/input/input.module";
import {ButtonModule} from "../../core/components/button/button.module";
import {GetControlModule} from "../../core/pipes/get-control.module";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
    ButtonModule,
    GetControlModule
  ]
})
export class LoginModule { }
