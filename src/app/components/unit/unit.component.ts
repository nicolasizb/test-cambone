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

  @Input() vocabularyArrayListener: any[] = [];
  @Input() grammarArrayListener: any[] = [];
  @Input() listeningArrayListener: any[] = [];
  @Input() readingArrayListener: any[] = [];
  @Input() videoArrayListener: any[] = [];

  vocabularyDetails: any = {};
  vocabularyTests: any = {};

  grammarDetails: any = {};
  grammarTests: any = {};

  listeningDetails: any = {};
  listeningTests: any = {};

  readingDetails: any = {};
  readingTests: any = {};

  videoDetails: any = {};
  videoTests: any = {};

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

    this.vocabularyDetails = this.vocabularyArrayListener[0];
    this.vocabularyTests = this.vocabularyArrayListener[1].test;

    this.grammarDetails = this.grammarArrayListener[0];
    this.grammarTests = this.grammarArrayListener[1].test;

    this.listeningDetails = this.listeningArrayListener[0];
    this.listeningTests = this.listeningArrayListener[1].test;

    this.readingDetails = this.readingArrayListener[0];
    this.readingTests = this.readingArrayListener[1].test;

    this.videoDetails = this.videoArrayListener[0];
    this.videoTests = this.videoArrayListener[1].test;
  }
}
