import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../parte1/parte1';

const url = 'http://localhost:3000/indice';


@Injectable({
  providedIn: 'root'
})


export class Parte1Service {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Products[]> {
    return this.http.get<Products[]>(url);
  }
}
