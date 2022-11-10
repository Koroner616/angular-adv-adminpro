import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {
  @Input() title:string='Sin título'
  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['rgba(0, 160, 0, 1)', 'rgba(240, 160, 0, 1)', 'rgba(220, 0, 0, 1)'],
        borderColor: ['rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)'],
        hoverBackgroundColor: ['rgba(0, 160, 0, 0.8)', 'rgba(240, 160, 0, 0.8)', 'rgba(220, 0, 0, 0.8)'],
        hoverBorderColor: ['rgba(0, 160, 0, 1)', 'rgba(240, 160, 0, 1)', 'rgba(220, 0, 0, 1)'],}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
