import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  valor: number = 0;

  ngOnInit(): void {
    this.valor = 10;
  }

  clickButtonIncrementa() {
    this.valor = this.valor + 1;
  }

}
