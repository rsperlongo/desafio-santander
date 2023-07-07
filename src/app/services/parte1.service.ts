import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../parte1/parte1.component';
import { PRODUCTS } from '../mock-parte1/mock-parte1';

interface Parte1 {
  product: string;
  amount: number;
}


@Injectable({
  providedIn: 'root'
})


export class Parte1Service {

  constructor() { }

  getData(): Observable<Parte1> {
    //
  }
}
