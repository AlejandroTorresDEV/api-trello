import { Injectable } from '@angular/core';
import { List } from './models.interface';

@Injectable({
  providedIn: 'root'
})

export class DataManagerService {
  data: { lists: Array<List> } = {
    lists: [
      {
        listId: 0,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'to do',
        tasks: [
          {
            listId: 0,
            taskId: 0,
            text: 'aprender angular',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
          {
            listId: 0,
            taskId: 1,
            text: 'aprender js',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
        ],
      },
      {
        listId: 1,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'doing',
        tasks: [
          {
            listId: 1,
            taskId: 0,
            text: 'aprender typescript',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
        ],
      },
    ],
  };

  constructor() { }

  getData() {
    return this.data;
  }

}