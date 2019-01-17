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

  constructor(private dataService : DataManagerService) { }

  ngOnInit() {
  }

  addNewTask(ev){
    const text = ev.target.value.trim();
    this.dataService.addNewTask(text,this.list);
    ev.target.value = '';
  }

}
