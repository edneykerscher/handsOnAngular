import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { FormsModule } from '@angular/forms';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgContentSimplesComponent } from './diretiva-ng-content-simples/diretiva-ng-content-simples.component';
import { DiretivaNgContentSelectorComponent } from './diretiva-ng-content-selector/diretiva-ng-content-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgClassComponent,
    DiretivaNgStyleComponent,
    DiretivaNgIfComponent,
    DiretivaNgForComponent,
    DiretivaNgContentSimplesComponent,
    DiretivaNgContentSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
