import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { MainModelComponent } from "./pages/main-model/main-model.component";
import { AuthModelComponent } from "./pages/auth-model/auth-model.component";
import {HeaderModule} from "./core/components/header/header.module";


@NgModule({
  declarations: [
    AppComponent,
    MainModelComponent,
    AuthModelComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HeaderModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
