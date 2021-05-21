import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cy-app-common',
  templateUrl: './app-common.component.html',
  styleUrls: ['./app-common.component.scss']
})
export class AppCommonComponent implements OnInit {

  get isAloneStart(): boolean {
    return false;
  }

  constructor() { }


  ngOnInit(): void {
  }

}
