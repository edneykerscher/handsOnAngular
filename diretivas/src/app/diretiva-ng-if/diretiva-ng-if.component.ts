import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivaNgIf',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.scss']
})
export class DiretivaNgIfComponent implements OnInit {

  exibirInformacoes: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
