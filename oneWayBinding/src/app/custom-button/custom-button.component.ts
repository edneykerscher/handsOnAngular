import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'customButton',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input() etiqueta: String = '';
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    this.onButtonClick.emit();
  }

}
