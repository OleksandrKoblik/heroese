import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";

import {PeriodicElement} from "../../interfaces/PeriodicElement";


@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HistoryTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['battleTime', 'heroName', 'opponentName', 'result'];

  ELEMENT_DATA: PeriodicElement[] = [
    {
      battleTime: new Date(),
      heroName: '',
      opponentName: '',
      result: '',
    }
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(
    private _liveAnnouncer: LiveAnnouncer
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('history-list')) {
      this.dataSource = JSON.parse(localStorage.getItem('history-list') || '');
    }
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`).then(r => r);
    } else {
      this._liveAnnouncer.announce('Sorting cleared').then(r => r);
    }
  }
}
