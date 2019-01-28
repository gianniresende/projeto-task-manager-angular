import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import { Task } from "./task.model";

const TASKS: Array<Task> = [

  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' },
  { id: 5, title: 'Fazer tarefa 5' },
  { id: 6, title: 'Fazer tarefa 6' },
  { id: 7, title: 'Fazer tarefa 7' },
  { id: 8, title: 'Fazer tarefa 8' }

];

@Injectable()

export class TaskService{
  public constructor(private http: Http){}
  
  public getTasks(): Promise<Task[]> {
    let promise = new Promise(function(resolve, reject) {
      if(TASKS.length > 0)
      {
        resolve(TASKS);
      }
      else
      {
        let error_msg = "NÃO HA TAREFAS";
        reject(error_msg)
      }      
      
    })

    return promise;
  }
  
  public getImportantTasks(): Promise<Task[]>{
    return Promise.resolve(TASKS.slice(0, 3))
  }

  public getTask(id: number): Promise<Task>{
    return this.getTasks()
      .then(tasks => tasks.find(task => task.id === id))
  }
  
}