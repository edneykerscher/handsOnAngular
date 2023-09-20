import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  valor: string = '';
  tamanho: number = 0;

  ngDoCheck() {
    this.tamanho = this.valor.length;
  }

}
