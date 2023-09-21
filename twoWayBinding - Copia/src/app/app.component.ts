import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nome: string = 'Edney Carlos Kerscher';

  atribuiValor(event: string) {
    this.nome = event;
  }

}
