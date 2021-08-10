import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  newTaskName = '';
  array: Array<ITask> = [];
  constructor() { }

  ngOnInit(): void {
  }
  
  addNewTask(): void {
    if (this.newTaskName) {
      let task = new Task(this.newTaskName);
      this.array.push(task);
      this.newTaskName = '';
    }
    else {
    }
  }

  refreshTasks(tasks: Array<ITask>): void {
    this.array = tasks;
  }

}

export interface ITask {
  name: string,
  isDone: boolean,
}

export class Task implements ITask {
  constructor(
    public name: string,
    public isDone: boolean = false,
  ) { }

}

