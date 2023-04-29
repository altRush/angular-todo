import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo';
  todos: string[] = [];
  todo = '';

  onUpdateTodo(newValue: string) {
    this.todo = newValue;
  }

  onAdd() {
    if (!this.todo) return;
    this.todos.push(this.todo);
    this.todo = '';
  }

  onChangeTitle() {
    this.title = 'Angular Todo App';
  }
}
