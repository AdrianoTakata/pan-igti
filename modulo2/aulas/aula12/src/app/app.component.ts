import { Component } from '@angular/core';
import { TodoListService } from './todoList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoListService: TodoListService;
  
  constructor( todoListService: TodoListService) {
    this.todoListService = todoListService;
  }

}
