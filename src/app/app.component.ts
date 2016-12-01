import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { TODOLISTS } from './mockups/mock-todolist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [TodoService]
})

export class AppComponent {
	todoService: TodoService;

	constructor(todoService: TodoService) {
		this.todoService = todoService;
	}

	addTodo(): void {
		this.todoService.add("1");

	}
}
