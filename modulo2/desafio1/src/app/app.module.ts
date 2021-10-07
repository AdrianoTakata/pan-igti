import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SelecaoComponent } from './selecao/selecao.component';
import { BackSelecaoComponent } from './back-selecao/back-selecao.component';

@NgModule({
  declarations: [
    AppComponent,
    SelecaoComponent,
    BackSelecaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
