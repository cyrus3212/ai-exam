import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  // Get to do list
  get todos() {
    return this.todoService.getAllTodos();
  }

  // Add new task
  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  // Update task
  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  // Delete task
  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

}
