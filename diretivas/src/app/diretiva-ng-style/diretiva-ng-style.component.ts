import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivaNgStyle',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent implements OnInit {

  corDeFundo: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
