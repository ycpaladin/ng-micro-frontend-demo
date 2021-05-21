import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'cy-print-mgmt-list',
  templateUrl: './print-mgmt-list.component.html',
  styleUrls: ['./print-mgmt-list.component.scss']
})
export class PrintMgmtListComponent implements OnInit, OnDestroy {

  destory$ = new Subject<boolean>();

  constructor(
  ) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}
