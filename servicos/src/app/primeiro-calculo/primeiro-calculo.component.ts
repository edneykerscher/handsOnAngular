import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../servico-calculo.service';

@Component({
  selector: 'primeiroCalculo',
  templateUrl: './primeiro-calculo.component.html',
  styleUrls: ['./primeiro-calculo.component.scss']
})
export class PrimeiroCalculoComponent implements OnInit {

  constructor(public servicoCalculo: CalculoService) { }

  ngOnInit(): void {
  }

  executaSoma() {
    return this.servicoCalculo.somaDoisNumeros(5, 6);
  }

}
