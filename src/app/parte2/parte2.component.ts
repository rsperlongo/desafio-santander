import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { Abertura, Atividades } from './parte2';

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
    const url = 'http://localhost:3004/agencias';

    this.http.get<Abertura[]>(url).subscribe(data => {
      const labels = data.map((abertura) => abertura.concluidas);
      const values = data.map((abertura) => abertura.parciais);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
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
        labels: ['% Marcações Completas', '% Marcações Parciais' ],
        datasets: [{
          data: labels, 
          backgroundColor: [
            'rgb(195, 198, 198)',
            'rgb(78, 192, 221)',
          ],
          hoverOffset: 2,
        }],
      }  
    })
  }
)}

  createChart2() {

    const url = 'http://localhost:3001/agencias';

    this.http.get<Atividades[]>(url).subscribe(data => {
      const labels = data.map((atividades) => atividades.concluidas);
      const values = data.map((atividades) => atividades.percentual);

    const ctx = document.getElementById('atividades') as HTMLCanvasElement;
    
    this.chart = new Chart(ctx, {
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
        labels: ['Qtde de Atividades Concluídas'],
        datasets: [{
          data: values,
          backgroundColor: [
            'rgb(78, 192, 221)',
            'rgb(195, 198, 198)',
            
          ],
          hoverOffset: 2,
        }]
      }  
    })
  }
 )}
}
