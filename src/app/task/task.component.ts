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

  completada : boolean = false;

  colours = [
    {name: "blue"},
    {name: "red"},
    {name: "yellow"}
  ];
  
 selectedValue : string = this.colours[0].name;

 select(){
   console.log(this.selectedValue);
 }

  constructor(private dataManagerService: DataManagerService) { }

  ngOnInit() {
  }

  deleteTask(){
    console.log("Eliminado")
    this.dataManagerService.deleteTask(this.task.listId,this.task.taskId);
  }

  editColorTask(){
    this.task.color = this.selectedValue;
    this.dataManagerService.editColorTask(this.task.listId,this.task.taskId,this.task);
  }

  changeTaskDone(){
    this.completada = !this.completada;
    if(this.completada){
      this.task.color = "grey";
    }else{
      this.task.color = "white";
    }
  }

}
