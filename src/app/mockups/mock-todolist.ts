import { Injectable } from '@angular/core';
import { Todo } from "../models/todo";

@Injectable()
export class TODOLISTS {
    count: number = 0;
    list: Todo[] = [];

    getList() {
        return this.list;
    }

    addToList(item: Todo) {
        this.list.push(item);
        this.setIndex();
    }

    getIndex() {
        return this.count;
    }

    private setIndex() {
        this.count++;
    }
}