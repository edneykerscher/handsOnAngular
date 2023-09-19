import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivaNgClass',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.scss']
})
export class DiretivaNgClassComponent implements OnInit {

  labelVermelho: boolean = false;
  labelSublinhado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
