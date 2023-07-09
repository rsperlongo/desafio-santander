import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.scss']
})

export class Parte2Component implements OnInit {
  public chart: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.createChart();
    this.createChart2();
  }

  createChart() {

    this.http.get<any>('your-api-url').subscribe(data => {
      const labels = data.map((item: { label: any; }) => item.label);
      const values = data.map((item: { value: any; }) => item.value);
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    const myChart = new Chart(ctx, {
      type: 'doughnut',
      options: {
        cutout:100,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              textAlign: 'center'
            },
          },
        }
      },
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: [
            'rgb(195, 198, 198)',
            'rgb(78, 192, 221)',
          ],
          hoverOffset: 2,
        }]
      }  
    })
  }
)}

  createChart2() {
    
    this.chart = new Chart("atividades", {
      type: 'doughnut',
      options: {
        cutout:100,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              textAlign: 'center'
            },
          },
        }
      },
      data: {
        labels: [
          'Qtdade Ativades Concluídas',
        ],
        datasets: [{
          data: [70, 200],
          backgroundColor: [
            'rgb(78, 192, 221)',
            'rgb(195, 198, 198)',
            
          ],
          hoverOffset: 2,
        }]
      }  
    })
  }
}
