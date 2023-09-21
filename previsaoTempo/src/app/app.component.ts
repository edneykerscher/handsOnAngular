import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  cidade: string = '';
  apiKey = '5436a68d0fd72bf7aa75d5342269cc7a';
  climaAtual: any;

  constructor(private http: HttpClient) { }

  consultaAtual() {
    this.climaAtual = null;
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cidade}&lang=pt_br&units=metric&appid=${this.apiKey}`)
      .subscribe(data => {
        this.climaAtual = data;
      });
  }

}
