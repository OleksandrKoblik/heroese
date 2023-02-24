import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroItemComponent } from './hero-item.component';
import {ButtonModule} from "../button/button.module";



@NgModule({
    declarations: [
        HeroItemComponent
    ],
    exports: [
        HeroItemComponent
    ],
    imports: [
        CommonModule,
        ButtonModule
    ]
})
export class HeroItemModule { }
