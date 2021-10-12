import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ids: number[] = [];
  lastId: number = 0;
  label: string = '';

  // counter1: number = 0;

  delete( id: number) {
    this.ids.splice(this.ids.indexOf(id), 1);
  }

  add() {
    this.lastId++;
    this.ids.push(this.lastId);
  }

  // increment() {
  //   this.counter1++;
  // }
}
