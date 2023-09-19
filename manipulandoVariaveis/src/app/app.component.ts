import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  valor: String = '';

  clickButtonA() {
    this.valor = 'A';
  }

  clickButtonB() {
    this.valor = 'B';
  }

}
