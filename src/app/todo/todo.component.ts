import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in')),
    ]),
  ],
})
export class TodoComponent {
  inputVisible: boolean = true;
  todos: Array<string> = ['hey there', 'hello'];
  current_todo = '';

  handleOnAddTodo() {
    if (this.current_todo.trim() != '') {
      this.todos.push(this.current_todo);
    }
    this.current_todo = '';
  }
  handleRemoveTodo(ind: number) {
    this.todos.splice(ind, 1);
  }

  toggleInputVisibility() {
    this.inputVisible = !this.inputVisible;
  }
}
