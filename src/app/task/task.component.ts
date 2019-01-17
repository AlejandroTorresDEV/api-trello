import { Component, OnInit,Input } from '@angular/core';
import { Task } from '../models.interface';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private dataManagerService: DataManagerService) { }

  ngOnInit() {
  }

  deleteTask(){
    console.log("Eliminado")
    this.dataManagerService.deleteTask(this.task.listId,this.task.taskId);
  }

}
