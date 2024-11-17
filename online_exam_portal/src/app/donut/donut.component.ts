import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DonutChartService } from 'src/shared/Services/donut-chart.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent {
  @Input() resultData: number;
  donutData: any = [
    {
      name: 'Score',
      y: 0,
      color: ''
    },
    {
      name: 'Remaining',
      y: 0,
      color: '#dddddd'
    }];

  donutOptions = {
    text: 0,
    color: ''
  };

  constructor(private donut: DonutChartService) { }

  @ViewChild('donutChart', { static: true }) donutChart!: ElementRef;

  ngOnInit() {
    this.donutData[0].y = this.resultData;
    this.donutData[1].y = 100 - this.resultData;
    this.donutOptions.text = this.resultData;
    if (this.resultData >= 70) {
      this.donutData[0].color = 'green';
      this.donutOptions.color = 'green';
    }
    else {
      this.donutData[0].color = 'red';
      this.donutOptions.color = 'red';
    }
    this.renderDonutChart();
  }

  renderDonutChart() {
    this.donut.drawDonut(this.donutChart.nativeElement, this.donutData, this.donutOptions);
  }
}
