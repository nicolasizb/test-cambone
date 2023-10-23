import { Component, Input } from '@angular/core';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent {
  detailsCtrStatus = false;
  testsCtrStatusVo = false;
  testsCtrStatusGa = false;
  testsCtrStatusLi = false;
  testsCtrStatusRe = false;
  testsCtrStatusVi = false;
  img = '';

  // UNIT
  @Input() imgStatusListener = false;
  @Input() numUnitListener = '';
  @Input() numFillListener = 0;
  @Input() numCompletedListener = 0;
  @Input() timeSpentListener = '';
  @Input() finishedListener = '';
  @Input() vocabularyArrayListener: Test[] = [];
  @Input() grammarArrayListener: Test[] = [];
  @Input() listeningArrayListener: Test[] = [];
  @Input() readingArrayListener: Test[] = [];
  @Input() videoArrayListener: Test[] = [];

  toggleDetails() {
    this.detailsCtrStatus = !this.detailsCtrStatus;
    this.testsCtrStatusVo = false;
    this.testsCtrStatusGa = false;
    this.testsCtrStatusLi = false;
    this.testsCtrStatusRe = false;
    this.testsCtrStatusVi = false;
  }
  toggleTestsVo() {
    this.testsCtrStatusVo = !this.testsCtrStatusVo;
  }
  toggleTestsGa() {
    this.testsCtrStatusGa = !this.testsCtrStatusGa;
  }
  toggleTestsLi() {
    this.testsCtrStatusLi = !this.testsCtrStatusLi;
  }
  toggleTestsRe() {
    this.testsCtrStatusRe = !this.testsCtrStatusRe;
  }
  toggleTestsVi() {
    this.testsCtrStatusVi = !this.testsCtrStatusVi;
  }

  checkImg() {
    if(!this.imgStatusListener) {
      this.img = "../../../assets/imgs/load-zero.png"
    } else {
      this.img = "../../../assets/imgs/load-completed.png"
    }
  }

  ngOnInit() {
    this.checkImg();
  }
}
