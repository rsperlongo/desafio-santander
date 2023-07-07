import { Component, OnInit } from '@angular/core';
import { Products } from './parte1';
import { Parte1Service } from '../services/parte1.service';

@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.scss']
})
export class Parte1Component implements OnInit {
  products?: Products[];
  amount?: Products[]

  constructor(private parte1Service: Parte1Service) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.parte1Service.getAll()
    .subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (err) => console.log(err)
    })
  }
}
