import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TictacToeComponent } from './tictac-toe/tictac-toe.component';

@NgModule({
  declarations: [
    AppComponent,
    TictacToeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
