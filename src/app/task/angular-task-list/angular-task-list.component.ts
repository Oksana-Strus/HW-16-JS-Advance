import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../task/task.component';

@Component({
  selector: 'app-angular-task-list',
  templateUrl: './angular-task-list.component.html',
  styleUrls: ['./angular-task-list.component.css']
})
export class AngularTaskListComponent implements OnInit {
  @Input() tasks: Array<ITask> = [];
  @Output() tasksUpdated = new EventEmitter<Array<ITask>>();

  count = 0;
  editInput = '';
  isEditing = false;
  editIndex!: number;
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(index: number): void {
    this.tasks.splice(index, 1);
    this.tasksUpdated.emit(this.tasks);
  }

  editUser(index: number): void {
    this.editInput = this.tasks[index].name;
    this.editIndex = index;
    this.isEditing = true;
  }

  saveNewName(): void {
    this.tasks[this.editIndex].name = this.editInput;
    this.editInput = '';
    this.isEditing = false;
    this.tasksUpdated.emit(this.tasks);
  }
}

