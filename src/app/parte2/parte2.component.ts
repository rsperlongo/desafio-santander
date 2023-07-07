import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.scss']
})

export class Parte2Component implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Blue',
          'Marcações Concluídas',
        ],
        datasets: [{
          data: [70, 200],
          backgroundColor: [
            'rgb(195, 198, 198)',
            'rgb(78, 192, 221)',
            
            
          ],
          hoverOffset: 2
        }]
      }  
    })
  }
}
