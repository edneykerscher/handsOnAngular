import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataAtual: Date = new Date();
  valor: number = 1235.5;
  texto: string = 'OI MUNdo!';

}
