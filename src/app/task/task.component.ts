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
  oldName : string;
  editing :boolean = false;
  completada : boolean = false;
  colours = [
    {name : "white"},
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
    this.dataManagerService.editTask(this.task);
  }

  editTask(nodo){
    setTimeout(() => {
      nodo.focus();
    },0);
    this.oldName = this.task.text;
    this.editing = true;
  }

  editTaskText(){
    console.log(this.task)
    this.oldName = this.task.text;
    this.dataManagerService.editTask(this.task);
    this.editing = false;
  }

  cancelEdit(){
    this.editing = false;
    this.task.text = this.oldName;
  }

  changeTaskDone(){
    this.completada = !this.completada;
    this.task.completed = this.completada;
    if(this.completada){
      this.dataManagerService.editTask(this.task);
    }else{
      this.dataManagerService.editTask(this.task);
      this.selectedValue = this.task.color;
    }
  }
}
