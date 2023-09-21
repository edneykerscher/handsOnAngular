import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PercentualPipe } from './percentual.pipe';
import { DataCustomizadaPipe } from './data-customizada.pipe';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    PercentualPipe,
    DataCustomizadaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt' }, { provide:  DEFAULT_CURRENCY_CODE, useValue: 'BRL' } ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
