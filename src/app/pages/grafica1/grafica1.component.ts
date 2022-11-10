import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  
  public labels1: string[] = [ 'Pan', 'Cerveza', 'Pizza' ];
  public data1 =  {
    labels: this.labels1,
    datasets: [
    { data: [ 30, 40, 100 ],
      backgroundColor: ['rgba(0, 160, 0, 1)', 'rgba(240, 160, 0, 1)', 'rgba(220, 0, 0, 1)'],
      borderColor: ['rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)'],
      hoverBackgroundColor: ['rgba(0, 160, 0, 0.8)', 'rgba(240, 160, 0, 0.8)', 'rgba(220, 0, 0, 0.8)'],
      hoverBorderColor: ['rgba(0, 160, 0, 1)', 'rgba(240, 160, 0, 1)', 'rgba(220, 0, 0, 1)'],}
  ]}

  public labels2: string[] = [ 'Pokemón', 'One Piece', 'Mazinger Z' ];
  public data2 =  {
    labels: this.labels2,
    datasets: [
    { data: [ 300, 400, 1000 ],
      backgroundColor: ['rgba(0, 160, 0, 1)', 'rgba(240, 160, 0, 1)', 'rgba(220, 0, 0, 1)'],
      borderColor: ['rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)'],
      hoverBackgroundColor: ['rgba(0, 160, 0, 0.8)', 'rgba(240, 160, 0, 0.8)', 'rgba(220, 0, 0, 0.8)'],
      hoverBorderColor: ['rgba(0, 160, 0, 1)', 'rgba(240, 160, 0, 1)', 'rgba(220, 0, 0, 1)'],}
  ]}

  public labels3: string[] = [ 'Almería', 'Barcelona', 'Madrid' ];
  public data3 =  {
    labels: this.labels3,
    datasets: [
    { data: [ 30000, 40000, 100000 ],
      backgroundColor: ['rgba(0, 160, 0, 1)', 'rgba(240, 160, 0, 1)', 'rgba(220, 0, 0, 1)'],
      borderColor: ['rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)'],
      hoverBackgroundColor: ['rgba(0, 160, 0, 0.8)', 'rgba(240, 160, 0, 0.8)', 'rgba(220, 0, 0, 0.8)'],
      hoverBorderColor: ['rgba(0, 160, 0, 1)', 'rgba(240, 160, 0, 1)', 'rgba(220, 0, 0, 1)'],}
  ]}

}
