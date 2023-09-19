import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivaNgFor',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss']
})
export class DiretivaNgForComponent implements OnInit {

  mesesDoAno: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor() { }

  ngOnInit(): void {
  }

}
