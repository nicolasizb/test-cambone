import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() detailNameListener = '';
  @Input() detatilScoreListener = '';
  @Input() percentListener = '';
  @Input() detailBestScoreListener = '';
  @Input() bestPercentListener = '';
  @Input() detailAttemptsListener = '';
  @Input() attemptsListener = 0;
  
}
