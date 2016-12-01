import { Component, OnInit } from '@angular/core';
import { Todo } from "app/models/todo";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  public selectedTodo = new Todo();

  constructor() { }

  ngOnInit() {

  }

  onSelect(todo: Todo): void {
  	this.selectedTodo = todo;
  }



}
