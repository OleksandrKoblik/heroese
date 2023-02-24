import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerUpsComponent } from './power-ups.component';



@NgModule({
    declarations: [
        PowerUpsComponent
    ],
    exports: [
        PowerUpsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PowerUpsModule { }
