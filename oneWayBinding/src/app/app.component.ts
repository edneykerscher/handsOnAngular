import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  valor: number = 0;

  incrementaValor () {
    this.valor = this.valor + 1;
  }

  decrementaValor () {
    this.valor = this.valor - 1;
  }

}
