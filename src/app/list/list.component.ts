import { Component, OnInit,Input } from '@angular/core';
import { List } from '../models.interface';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list:List;
  editing :boolean = false;
  oldName : string;
  constructor(private dataService : DataManagerService) { }

  ngOnInit() {
  }

  addNewTask(ev){
    const text = ev.target.value.trim();
    this.dataService.addNewTask(text,this.list);
    ev.target.value = '';
  }

  editList(nodo){
    setTimeout(() => {
      nodo.focus();
    },0);
    this.oldName = this.list.name;
    this.editing = true;
  }

  editNameList(ev){
    console.log(this.list)
    this.oldName = this.list.name;
    this.dataService.editListName(this.list);
    this.editing = false;
  }

  cancelEdit(){
    this.editing = false;
    this.list.name = this.oldName;
  }

}
