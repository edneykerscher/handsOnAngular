import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../servico-calculo.service';

@Component({
  selector: 'segundoCalculo',
  templateUrl: './segundo-calculo.component.html',
  styleUrls: ['./segundo-calculo.component.scss']
})
export class SegundoCalculoComponent implements OnInit {

  public servicoCalculo: CalculoService = new CalculoService();

  constructor() { }

  ngOnInit(): void {
  }

  executaMultiplicacao() {
    return this.servicoCalculo.multiplicaDoisNumeros(7, 8);
  }

}
