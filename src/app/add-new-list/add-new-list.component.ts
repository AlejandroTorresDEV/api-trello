import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.scss']
})
export class AddNewListComponent implements OnInit {

  constructor(private dataManagerService : DataManagerService) { }

  ngOnInit() {

  }

  addElementList(eve){
    if(eve.target.value.trim() != ''){
      const text = eve.target.value.trim();
      let capitaliceText = text.charAt(0).toUpperCase() + text.slice(1);
      this.dataManagerService.addNewList(capitaliceText);
      eve.target.value = '';
    }
  }

}
