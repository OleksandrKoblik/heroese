import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayLettersComponent } from './array-letters.component';



@NgModule({
    declarations: [
        ArrayLettersComponent
    ],
    exports: [
        ArrayLettersComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ArrayLettersModule { }
