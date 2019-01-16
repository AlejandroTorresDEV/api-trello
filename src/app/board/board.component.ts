import { Component, OnInit } from '@angular/core';
import { Data } from '../models.interface';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  data: Data;
  constructor(private dataManager: DataManagerService) {}

  ngOnInit() {
    this.data = this.dataManager.getData();
    console.log(this.data);
  }

}
