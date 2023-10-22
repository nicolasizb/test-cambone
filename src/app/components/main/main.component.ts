import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  dataUnits = [
    {
      numUnit: 'Unit 1: Where are you from?',
      numFill: 16,
      numCompleted: 16,
      timeSpent: '1h 22m'
    },
    {
      numUnit: 'Unit 2: Where are you from?',
      numFill: 16,
      numCompleted: 16,
      timeSpent: '1h 22m'
    },
  ]

  unitCtrStatus = false;
  detailsCtrStatus = false;
  testsCtrStatus = false;

  toggleUnitCtr() {
    this.unitCtrStatus = !this.unitCtrStatus;
    this.detailsCtrStatus = false;
  }
  toggleDetails() {
    this.detailsCtrStatus = !this.detailsCtrStatus;
    this.testsCtrStatus = false;
  }
  toggleTests() {
    this.testsCtrStatus = !this.testsCtrStatus;
  }

}
