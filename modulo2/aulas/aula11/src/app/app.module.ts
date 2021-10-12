import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';

import { CepPipe } from './cep.pipe';
import { CpfPipe } from './cpf.pipe';
import { JoinStringsPipe } from './join-strings.pipe';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    CepPipe,
    CpfPipe,
    JoinStringsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "pt"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
