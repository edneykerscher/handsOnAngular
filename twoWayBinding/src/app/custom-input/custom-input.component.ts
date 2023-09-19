import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'customInput',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() etiqueta: String = '';

  _valor: string = '';
  @Input()
  set valor(val: string) {
    this.valorChange.emit(val);
    this._valor = val;
  }
  get valor() {
    return this._valor;
  }

  @Output() valorChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
