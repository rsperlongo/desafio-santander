import { Component } from '@angular/core';

export interface Products {
  product: string;
  amount: number;
}

const products: Products[] = [
  { product: 'Débito Automático', amount: 20 },
  { product: 'Cliente CERTO', amount: 69 },
  { product: 'Consignado', amount: 70},
  { product: 'Kgiro', amount: 0},
  { product: 'Gestão Preventiva', amount: 60},
  { product: 'Cap PM', amount: 70},
  { product: 'Consórcio', amount: 150},
  { product: 'Seguros Open', amount: 177},
]

@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.scss']
})
export class Parte1Component {
}
