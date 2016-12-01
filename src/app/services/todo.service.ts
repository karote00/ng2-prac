import { Injectable } from '@angular/core';
import { TODOLISTS } from "../mockups/mock-todolist";

@Injectable()
export class TodoService {
    todolist: TODOLISTS;

    constructor(todolist: TODOLISTS) {
        this.todolist = todolist;
    }

	add(todo: string) {
        this.todolist.addToList({id: this.todolist.getIndex(), name: todo});
	}

    getTodos() {
        return TODOLISTS;
    }
}