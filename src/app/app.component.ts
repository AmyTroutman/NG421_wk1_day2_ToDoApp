import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';
  todoList: any [] = [];
  todoTitle: string;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      { title: 'Install Angular CLI', isDone: false},
    ];
  }

  deleteTodo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}
