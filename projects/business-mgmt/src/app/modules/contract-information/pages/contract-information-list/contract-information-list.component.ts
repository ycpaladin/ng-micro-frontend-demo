import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cy-contract-information-list',
  templateUrl: './contract-information-list.component.html',
  styleUrls: ['./contract-information-list.component.scss']
})
export class ContractInformationListComponent implements OnInit {

  priceValue = '';
  constructor(
  ) { }

  ngOnInit(): void {
  }


}
