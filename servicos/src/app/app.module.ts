import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroCalculoComponent } from './primeiro-calculo/primeiro-calculo.component';
import { SegundoCalculoComponent } from './segundo-calculo/segundo-calculo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroCalculoComponent,
    SegundoCalculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
