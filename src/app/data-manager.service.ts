import { Injectable } from '@angular/core';
import { List, Task } from './models.interface';

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
        name: 'To do',
        tasks: [
          {
            listId: 0,
            taskId: 0,
            text: 'Aprender angular',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
          {
            listId: 0,
            taskId: 1,
            text: 'Aprender js',
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
        name: 'Doing',
        tasks: [
          {
            listId: 1,
            taskId: 0,
            text: 'Aprender typescript',
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

  addNewList(name: string) {
    const now = new Date();
    const newList: List = {
      listId: Date.now(),
      createdAt: now,
      modifiedAt: now,
      name,
      tasks: [],
    };
    this.data.lists.push(newList);
  }

  deleteTask(listId: number, taskId: number) {
    this.data.lists = this.data.lists.map(list => {
      if (list.listId === listId) {
        list.tasks = list.tasks.filter(task => task.taskId !== taskId);
      }
      return list
    });
  }

  addNewTask(text: string, list: List) {
    const now = new Date();
    const newTask: Task = {
      listId: list.listId,
      taskId: Date.now(),
      text,
      completed: false,
      color: 'white',
      createdAt: now,
      modifiedAt: now,
    };

    this.data.lists = this.data.lists.map(listObj => {
      if (listObj.listId === list.listId) {
        listObj.tasks.push(newTask);
      }
      return listObj;
    });

  }

  editListName(list: List) {
    this.data.lists = this.data.lists.map(
      listObj => (listObj.listId === list.listId ? list : listObj));
  }

  editTask(task : Task){
    this.data.lists = this.data.lists.map(listObj => {
      if (listObj.listId ===task.listId) {
        listObj.tasks.forEach(function (elemento, indice) {
          if(elemento.taskId === task.taskId ){
            listObj.tasks[indice] = task;   
          }
      });
      }
      return listObj;
    });
    console.log(this.data);

    
    /*this.data.lists = this.data.lists.map(list => {
      if (list.listId === listId) {
        console.log(task.color);
          this.tasks = this.tasks.map(task => {
            if(task.taskId = 22){
              console.log(task.color);
              return task;
            }else{
              return task;
            }
          })
      }
      return list
    });*/
  }

}
