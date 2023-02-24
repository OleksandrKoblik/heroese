import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryTableComponent } from './history-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [
    HistoryTableComponent
  ],
  exports: [
    HistoryTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ]
})
export class HistoryTableModule { }
